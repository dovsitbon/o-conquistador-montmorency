// Captures pleine page (390 px et 1440 px) de chaque page, dans captures/.
// Usage : npm run build && npm run captures
import { chromium } from 'playwright';
import { spawn, spawnSync } from 'node:child_process';
import { mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const PORT = 4405;
const racine = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sortie = path.join(racine, 'captures');
mkdirSync(sortie, { recursive: true });

const pages = [
  ['accueil', '/'],
  ['carte', '/carte/'],
  ['mentions-legales', '/mentions-legales/'],
  ['confidentialite', '/confidentialite/'],
  ['404', '/page-inexistante'],
];
const largeurs = [
  ['mobile', 390, 844],
  ['desktop', 1440, 900],
];

const serveur = spawn(`npx astro preview --port ${PORT} --host 127.0.0.1`, {
  cwd: racine,
  shell: true,
  stdio: 'ignore',
});

async function attendre(url, essais = 60) {
  for (let i = 0; i < essais; i++) {
    try {
      const r = await fetch(url);
      if (r.ok) return;
    } catch {}
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error('Le serveur de prévisualisation ne répond pas');
}

try {
  await attendre(`http://127.0.0.1:${PORT}/`);
  const navigateur = await chromium.launch();
  for (const [nomL, w, h] of largeurs) {
    const ctx = await navigateur.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1, locale: 'fr-FR', timezoneId: 'Europe/Paris' });
    const page = await ctx.newPage();
    for (const [nom, url] of pages) {
      await page.goto(`http://127.0.0.1:${PORT}${url}`, { waitUntil: 'networkidle' });
      await page.evaluate(async () => {
        for (let y = 0; y < document.body.scrollHeight; y += 400) {
          window.scrollTo(0, y);
          await new Promise((r) => setTimeout(r, 60));
        }
        window.scrollTo(0, 0);
      });
      await page.waitForTimeout(1500);
      const debord = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      if (debord > 0) console.warn(`  ! ${nom} ${nomL} : débordement horizontal de ${debord}px`);
      const fichier = path.join(sortie, `${nom}-${nomL}.png`);
      await page.screenshot({ path: fichier, fullPage: true });
      console.log('capture :', path.relative(racine, fichier));
    }
    await ctx.close();
  }
  await navigateur.close();
} finally {
  if (process.platform === 'win32' && serveur.pid) spawnSync('taskkill', ['/pid', String(serveur.pid), '/T', '/F'], { stdio: 'ignore' });
  else serveur.kill();
  process.exit(0);
}
