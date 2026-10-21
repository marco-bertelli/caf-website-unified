// Scadenze ricorrenti per i privati. Si ripetono ogni anno: la data esatta la calcola lib/scadenze.ts.
// Da ricontrollare a ogni legge di bilancio.

export const categorieScadenze = ['Dichiarazioni', 'Casa', 'Famiglia', 'Colf e badanti'] as const;
export type CategoriaScadenza = (typeof categorieScadenze)[number];

export type Scadenza = {
  id: string;
  giorno: number;
  mese: number; // 1–12
  titolo: string;
  testo: string;
  categoria: CategoriaScadenza;
  servizio: string; // slug in data/servizi.ts
  apertura?: boolean; // non è un termine ma un "da qui si può iniziare": non slitta nel weekend
};

export const scadenze: Scadenza[] = [
  { id: 'colf-4', giorno: 10, mese: 1, titolo: 'Contributi colf, ottobre-dicembre', testo: 'Pagamento all\'INPS dei contributi del quarto trimestre per colf, badanti e baby sitter.', categoria: 'Colf e badanti', servizio: 'colf-badanti' },
  { id: 'isee-auu', giorno: 28, mese: 2, titolo: 'ISEE per l\'Assegno Unico', testo: 'Senza un ISEE valido, da marzo l\'Assegno Unico scende all\'importo minimo. Se lo presenti entro giugno recuperi gli arretrati.', categoria: 'Famiglia', servizio: 'isee' },
  { id: 'cu', giorno: 16, mese: 3, titolo: 'Arriva la Certificazione Unica', testo: 'Datore di lavoro e INPS consegnano la CU. Da qui puoi prenotare il 730.', categoria: 'Dichiarazioni', servizio: '730', apertura: true },
  { id: 'colf-1', giorno: 10, mese: 4, titolo: 'Contributi colf, gennaio-marzo', testo: 'Pagamento all\'INPS dei contributi del primo trimestre.', categoria: 'Colf e badanti', servizio: 'colf-badanti' },
  { id: 'precompilata', giorno: 30, mese: 4, titolo: 'Esce il 730 precompilato', testo: 'L\'Agenzia delle Entrate pubblica la dichiarazione precompilata. Prima la presenti, prima arriva il rimborso.', categoria: 'Dichiarazioni', servizio: '730', apertura: true },
  { id: 'imu-acconto', giorno: 16, mese: 6, titolo: 'IMU, acconto', testo: 'Prima rata dell\'IMU su seconde case, terreni e immobili affittati.', categoria: 'Casa', servizio: 'imu' },
  { id: 'redditi-saldo', giorno: 30, mese: 6, titolo: 'Imposte del Modello Redditi', testo: 'Saldo e primo acconto per chi presenta il Modello Redditi. Si può pagare entro un mese con lo 0,40% in più.', categoria: 'Dichiarazioni', servizio: 'modello-redditi' },
  { id: 'colf-2', giorno: 10, mese: 7, titolo: 'Contributi colf, aprile-giugno', testo: 'Pagamento all\'INPS dei contributi del secondo trimestre.', categoria: 'Colf e badanti', servizio: 'colf-badanti' },
  { id: '730', giorno: 30, mese: 9, titolo: 'Ultimo giorno per il 730', testo: 'Termine per presentare il 730. Dopo resta solo il Modello Redditi.', categoria: 'Dichiarazioni', servizio: '730' },
  { id: 'colf-3', giorno: 10, mese: 10, titolo: 'Contributi colf, luglio-settembre', testo: 'Pagamento all\'INPS dei contributi del terzo trimestre.', categoria: 'Colf e badanti', servizio: 'colf-badanti' },
  { id: 'redditi', giorno: 31, mese: 10, titolo: 'Ultimo giorno per il Modello Redditi', testo: 'Termine per l\'invio telematico della dichiarazione.', categoria: 'Dichiarazioni', servizio: 'modello-redditi' },
  { id: 'acconto-irpef', giorno: 30, mese: 11, titolo: 'Secondo acconto IRPEF', testo: 'Con il 730 è trattenuto dallo stipendio o dalla pensione di novembre. Con il Modello Redditi si paga con F24.', categoria: 'Dichiarazioni', servizio: 'modello-redditi' },
  { id: 'imu-saldo', giorno: 16, mese: 12, titolo: 'IMU, saldo', testo: 'Seconda rata dell\'IMU, con le aliquote deliberate dal Comune per l\'anno.', categoria: 'Casa', servizio: 'imu' },
  { id: 'isee-scade', giorno: 31, mese: 12, titolo: 'Scade l\'ISEE', testo: 'Ogni ISEE vale fino al 31 dicembre. Dal 1° gennaio puoi già rinnovarlo.', categoria: 'Famiglia', servizio: 'isee', apertura: true },
];
