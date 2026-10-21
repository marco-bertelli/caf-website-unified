import type { Scadenza } from '../data/scadenze';

export type Prossima = Scadenza & { data: Date; giorni: number };

const giornoSolo = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate());

// I termini che cadono di sabato o domenica slittano al lunedì.
// ponytail: le festività nazionali non sono gestite, conta solo il weekend.
export function dataEffettiva(s: Scadenza, anno: number) {
  const d = new Date(anno, s.mese - 1, s.giorno);
  if (!s.apertura) {
    if (d.getDay() === 6) d.setDate(d.getDate() + 2);
    if (d.getDay() === 0) d.setDate(d.getDate() + 1);
  }
  return d;
}

// Le scadenze dei prossimi 12 mesi, dalla più vicina. Quella di oggi conta ancora.
export function prossime(lista: Scadenza[], oggi = new Date()): Prossima[] {
  const t = giornoSolo(oggi);
  return lista
    .map((s) => {
      let data = dataEffettiva(s, t.getFullYear());
      if (data < t) data = dataEffettiva(s, t.getFullYear() + 1);
      return { ...s, data, giorni: Math.round((data.getTime() - t.getTime()) / 864e5) };
    })
    .sort((a, b) => a.giorni - b.giorni);
}

export const traQuanto = (giorni: number) =>
  giorni === 0 ? 'Oggi' : giorni === 1 ? 'Domani' : `Tra ${giorni} giorni`;

const mesi = ['gen', 'feb', 'mar', 'apr', 'mag', 'giu', 'lug', 'ago', 'set', 'ott', 'nov', 'dic'];
const giorniSett = ['dom', 'lun', 'mar', 'mer', 'gio', 'ven', 'sab'];
export const meseBreve = (d: Date) => mesi[d.getMonth()];
export const giornoSettimana = (d: Date) => giorniSett[d.getDay()];

// File .ics con promemoria una settimana prima
export function ics(p: Prossima) {
  const ymd = (d: Date) => `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}`;
  const esc = (s: string) => s.replace(/[\\,;]/g, (c) => `\\${c}`);
  const fine = new Date(p.data); fine.setDate(fine.getDate() + 1);
  return [
    'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Tutela Previdenziale//Scadenze//IT',
    'BEGIN:VEVENT', `UID:${p.id}-${ymd(p.data)}@tutelaprevidenziale`, `DTSTAMP:${ymd(new Date())}T000000Z`,
    `DTSTART;VALUE=DATE:${ymd(p.data)}`, `DTEND;VALUE=DATE:${ymd(fine)}`,
    `SUMMARY:${esc(p.titolo)}`, `DESCRIPTION:${esc(p.testo)}`,
    'BEGIN:VALARM', 'TRIGGER:-P7D', 'ACTION:DISPLAY', `DESCRIPTION:${esc(p.titolo)}`, 'END:VALARM',
    'END:VEVENT', 'END:VCALENDAR',
  ].join('\r\n');
}
