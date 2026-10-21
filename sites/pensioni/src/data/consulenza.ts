// Contenuti della consulenza pensionistica. Prezzi, tempi e consulente sono MOCK.

export const pacchetti = [
  {
    id: 'check-up',
    nome: 'Check-up contributivo',
    prezzo: '150 €',
    perChi: 'Per chi vuole sapere se i contributi sono tutti al loro posto.',
    include: [
      'Verifica dell\'estratto conto contributivo',
      'Errori e periodi mancanti da correggere',
      'Data di pensione stimata',
      'Relazione sintetica',
      'Videochiamata di 30 minuti',
    ],
  },
  {
    id: 'piano',
    nome: 'Piano pensione',
    prezzo: '350 €',
    perChi: 'Per chi deve decidere quando e come uscire dal lavoro.',
    include: [
      'Tutto quello del check-up',
      'Confronto tra le uscite possibili',
      'Importo netto stimato per ciascuna',
      'Convenienza di riscatti e versamenti volontari',
      'Relazione completa',
      'Videochiamata di 45 minuti',
    ],
    consigliato: true,
  },
  {
    id: 'su-misura',
    nome: 'Piano su misura',
    prezzo: 'da 550 €',
    perChi: 'Per carriere con più casse, periodi all\'estero o previdenza complementare.',
    include: [
      'Tutto quello del piano pensione',
      'Cumulo e totalizzazione tra gestioni e casse professionali',
      'Contributi versati all\'estero',
      'Fondo pensione e TFR',
      'Seconda videochiamata entro 6 mesi',
    ],
  },
];

export const tempi = {
  preventivo: '2 giorni lavorativi',
  relazione: 'circa 3 settimane',
  videochiamata: '45 minuti',
};

export const consulente = {
  nome: 'Nome Cognome', // MOCK
  ruolo: 'Consulente previdenziale',
  bio: 'Da oltre vent\'anni segue pratiche pensionistiche al patronato di Palazzolo sull\'Oglio: migliaia di estratti conto letti, corretti e trasformati in una pensione.', // MOCK
};
