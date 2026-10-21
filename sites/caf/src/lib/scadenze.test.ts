// node sites/caf/src/lib/scadenze.test.ts
import assert from 'node:assert/strict';
import { prossime, dataEffettiva, ics, traQuanto } from './scadenze.ts';
import { scadenze } from '../data/scadenze.ts';

const s = (giorno: number, mese: number, apertura = false) =>
  ({ id: 'x', giorno, mese, titolo: 'T, a; b', testo: 'x', categoria: 'Casa', servizio: 'imu', apertura }) as const;

// 31 ottobre 2026 è sabato: slitta a lunedì 2 novembre, ma un'apertura no
assert.equal(dataEffettiva(s(31, 10), 2026).getDate(), 2);
assert.equal(dataEffettiva(s(31, 10, true), 2026).getDate(), 31);
// 16 dicembre 2026 è mercoledì: resta
assert.equal(dataEffettiva(s(16, 12), 2026).getDate(), 16);

const oggi = new Date(2026, 9, 21); // 21 ottobre 2026
const p = prossime(scadenze, oggi);
assert.equal(p.length, scadenze.length);
assert.equal(p[0].id, 'redditi'); // 31/10 → 2/11
assert.equal(p[0].giorni, 12);
assert.equal(p.at(-1)!.id, 'colf-3'); // 10 ottobre è passato: torna l'anno dopo
assert.equal(p.at(-1)!.data.getFullYear(), 2027);
// la scadenza di oggi è "Oggi", non l'anno prossimo
assert.equal(prossime([s(21, 10)], oggi)[0].giorni, 0);
assert.equal(traQuanto(0), 'Oggi');

const file = ics({ ...p[0], titolo: 'T, a; b' });
assert.match(file, /DTSTART;VALUE=DATE:20261102/);
assert.match(file, /SUMMARY:T\\, a\\; b/);
console.log('scadenze ok');
