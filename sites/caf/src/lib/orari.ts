type Giorno = { giorno: string; fasce: string[] };

const minuti = (hhmm: string) => { const [h, m] = hhmm.split(':').map(Number); return h * 60 + m; };
const inizio = (f: string) => f.split('–')[0];
const fine = (f: string) => f.split('–')[1];
// orari parte da lunedì, getDay() da domenica
const indice = (giornoJs: number) => (giornoJs + 6) % 7;

export function statoApertura(orari: Giorno[], giornoJs: number, ora: number): { aperto: boolean; testo: string } {
  const oggi = orari[indice(giornoJs)];
  const corrente = oggi.fasce.find((f) => ora >= minuti(inizio(f)) && ora < minuti(fine(f)));
  if (corrente) return { aperto: true, testo: `Aperto ora, fino alle ${fine(corrente)}` };

  const dopo = oggi.fasce.find((f) => minuti(inizio(f)) > ora);
  if (dopo) return { aperto: false, testo: `Chiuso ora, riapre alle ${inizio(dopo)}` };

  for (let i = 1; i <= 7; i++) {
    const g = orari[indice(giornoJs + i)];
    if (g.fasce.length) {
      const quando = i === 1 ? 'domani' : g.giorno.toLowerCase();
      return { aperto: false, testo: `Chiuso ora, riapre ${quando} alle ${inizio(g.fasce[0])}` };
    }
  }
  return { aperto: false, testo: 'Chiuso' };
}

// Giorno e minuti correnti in ora italiana, qualunque sia il fuso del visitatore.
export function oraItaliana(d = new Date()) {
  const parti = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Rome', weekday: 'short', hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
  }).formatToParts(d);
  const v = (t: string) => parti.find((p) => p.type === t)!.value;
  return {
    giorno: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(v('weekday')),
    minuti: Number(v('hour')) * 60 + Number(v('minute')),
  };
}
