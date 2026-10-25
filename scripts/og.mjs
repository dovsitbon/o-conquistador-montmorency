// Génère public/og.png (1200x630) et public/apple-touch-icon.png à partir du motif azulejo.
import { chromium } from 'playwright';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const racine = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const tuile = 'data:image/svg+xml;base64,' + readFileSync(path.join(racine, 'public/azulejo.svg')).toString('base64');
const police = (f) => 'data:font/woff2;base64,' + readFileSync(path.join(racine, 'node_modules/@fontsource/playfair-display/files', f)).toString('base64');
const css = `@font-face{font-family:P;font-style:italic;font-weight:900;src:url(${police('playfair-display-latin-900-italic.woff2')})}
body{margin:0}`;

const og = `<html><head><style>${css}
.o{width:1200px;height:630px;background:#F3F4EF;display:grid;grid-template-columns:1fr 330px;font-family:P;color:#1F3D99}
.t{padding:70px 0 0 70px}.t h1{font-size:150px;line-height:.9;margin:0;font-style:italic}
.t p{font:600 34px/1.3 system-ui,sans-serif;color:#15214A;margin:34px 0 0}
.z{background:url(${tuile}) 0 0/110px;border-left:6px solid #1F3D99}</style></head>
<body><div class="o"><div class="t"><h1>O<br>Conquistador</h1><p>Cuisine portugaise à la braise<br>93 avenue de Domont, Montmorency</p></div><div class="z"></div></div></body></html>`;

const icone = `<html><head><style>${css}</style></head><body><div style="width:180px;height:180px;background:url(${tuile}) center/180px"></div></body></html>`;

const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(og);
await p.evaluate(() => document.fonts.ready);
await p.screenshot({ path: path.join(racine, 'public/og.png') });
await p.setViewportSize({ width: 180, height: 180 });
await p.setContent(icone);
await p.screenshot({ path: path.join(racine, 'public/apple-touch-icon.png') });
await b.close();
console.log('og.png et apple-touch-icon.png générés');
