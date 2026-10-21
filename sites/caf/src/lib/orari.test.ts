// node sites/caf/src/lib/orari.test.ts
import assert from 'node:assert/strict';
import { statoApertura, oraItaliana } from './orari.ts';

const orari = [
  { giorno: 'Lunedì', fasce: ['8:30–12:30', '14:30–18:30'] },
  { giorno: 'Martedì', fasce: ['8:30–12:30'] },
  { giorno: 'Mercoledì', fasce: [] },
  { giorno: 'Giovedì', fasce: [] },
  { giorno: 'Venerdì', fasce: ['8:30–12:30'] },
  { giorno: 'Sabato', fasce: [] },
  { giorno: 'Domenica', fasce: [] },
];
const h = (hh: number, mm = 0) => hh * 60 + mm;

assert.deepEqual(statoApertura(orari, 1, h(9)), { aperto: true, testo: 'Aperto ora, fino alle 12:30' });
assert.equal(statoApertura(orari, 1, h(12, 30)).testo, 'Chiuso ora, riapre alle 14:30');
assert.equal(statoApertura(orari, 1, h(7)).testo, 'Chiuso ora, riapre alle 8:30');
assert.equal(statoApertura(orari, 1, h(19)).testo, 'Chiuso ora, riapre domani alle 8:30');
assert.equal(statoApertura(orari, 2, h(13)).testo, 'Chiuso ora, riapre venerdì alle 8:30');
assert.equal(statoApertura(orari, 6, h(10)).testo, 'Chiuso ora, riapre lunedì alle 8:30'); // sabato
assert.equal(statoApertura(orari, 0, h(10)).testo, 'Chiuso ora, riapre domani alle 8:30'); // domenica
// 21 ott 2026 10:15 UTC = mercoledì 12:15 a Roma (ora legale)
assert.deepEqual(oraItaliana(new Date('2026-10-21T10:15:00Z')), { giorno: 3, minuti: h(12, 15) });
console.log('orari ok');
