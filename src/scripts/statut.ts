// Statut « Ouvert maintenant / Fermé » calculé à l'heure de Paris, à partir de src/data/infos.json.
import infos from '../data/infos.json';

type Jour = { jour: string; dow: number; services: string[][] };
const horaires = infos.horaires as Jour[];
const conges = infos.conges as { debut: string | null; fin: string | null };

const versMinutes = (h: string) => {
  const [hh, mm] = h.split(':').map(Number);
  return hh * 60 + mm;
};
const affiche = (h: string) => h.replace(':', 'h');

function maintenantParis() {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Europe/Paris',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
    weekday: 'short',
  }).formatToParts(new Date());
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? '';
  const joursCourts = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return {
    dow: joursCourts.indexOf(get('weekday')),
    minutes: Number(get('hour')) * 60 + Number(get('minute')),
    date: `${get('year')}-${get('month')}-${get('day')}`,
  };
}

function calcule() {
  const now = maintenantParis();
  if (conges.debut && conges.fin && now.date >= conges.debut && now.date <= conges.fin) {
    const fin = new Date(conges.fin + 'T12:00:00');
    return {
      etat: 'ferme',
      titre: 'Fermé pour congés',
      detail: `réouverture après le ${fin.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' })}`,
    };
  }
  const jour = horaires.find((j) => j.dow === now.dow);
  if (jour) {
    for (const [debut, fin] of jour.services) {
      if (now.minutes >= versMinutes(debut) && now.minutes < versMinutes(fin)) {
        const reste = versMinutes(fin) - now.minutes;
        return {
          etat: reste <= 30 ? 'bientot' : 'ouvert',
          titre: 'Ouvert maintenant',
          detail: `service jusqu’à ${affiche(fin)}`,
        };
      }
      if (now.minutes < versMinutes(debut)) {
        return { etat: 'ferme', titre: 'Fermé pour le moment', detail: `ouvre aujourd’hui à ${affiche(debut)}` };
      }
    }
  }
  for (let i = 1; i <= 7; i++) {
    const dow = (now.dow + i) % 7;
    const j = horaires.find((x) => x.dow === dow);
    if (j && j.services.length) {
      const quand = i === 1 ? 'demain' : j.jour.toLowerCase();
      return { etat: 'ferme', titre: 'Fermé', detail: `ouvre ${quand} à ${affiche(j.services[0][0])}` };
    }
  }
  return { etat: 'ferme', titre: 'Fermé', detail: '' };
}

function rendu() {
  const s = calcule();
  document.querySelectorAll<HTMLElement>('[data-statut]').forEach((el) => {
    el.dataset.etat = s.etat;
    el.innerHTML = `<span class="pastille" aria-hidden="true"></span><strong>${s.titre}</strong>${s.detail ? `<span class="statut-detail">${s.detail}</span>` : ''}`;
  });
  const { dow } = maintenantParis();
  document.querySelectorAll<HTMLElement>('[data-dow]').forEach((row) => {
    const today = Number(row.dataset.dow) === dow;
    row.toggleAttribute('data-aujourdhui', today);
    if (today) row.setAttribute('aria-current', 'date');
    else row.removeAttribute('aria-current');
  });
}

rendu();
setInterval(rendu, 60_000);

// Section braise : les mots s'allument quand la ligne entre à l'écran
const lignes = document.querySelectorAll('.braise-ligne');
if ('IntersectionObserver' in window && lignes.length) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('lit');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.6, rootMargin: '0px 0px -10% 0px' },
  );
  lignes.forEach((l) => io.observe(l));
} else {
  lignes.forEach((l) => l.classList.add('lit'));
}

// Carte Google : chargée seulement au clic
document.querySelectorAll<HTMLButtonElement>('[data-carte-google]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const iframe = document.createElement('iframe');
    iframe.src = btn.dataset.carteGoogle!;
    iframe.title = 'Plan Google Maps : O Conquistador, 93 avenue de Domont, Montmorency';
    iframe.loading = 'lazy';
    iframe.referrerPolicy = 'no-referrer-when-downgrade';
    iframe.className = 'absolute inset-0 h-full w-full border-0';
    btn.replaceWith(iframe);
  });
});
