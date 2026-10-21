// Servizi del CAF e documenti da portare. Prezzi e durate sono MOCK: verificarli con l'ufficio.

export type Servizio = {
  slug: string;
  nome: string;
  categoria: Categoria;
  sintesi: string;
  perChi: string;
  descrizione: string[];
  durata: string;
  prezzo: string;
  documenti: { gruppo: string; voci: string[] }[];
  note?: string[];
};

export const categorie = ['Dichiarazioni e tasse', 'Famiglia e agevolazioni', 'Casa e immobili', 'Lavoro e famiglia', 'Pensionati'] as const;
export type Categoria = (typeof categorie)[number];

// Vale per ogni appuntamento: viene aggiunto in testa a ogni lista.
export const documentiSempre = [
  "Documento d'identità valido",
  'Tessera sanitaria o codice fiscale',
];

export const servizi: Servizio[] = [
  {
    slug: '730',
    nome: 'Modello 730',
    categoria: 'Dichiarazioni e tasse',
    sintesi: 'La dichiarazione dei redditi per dipendenti e pensionati, con rimborso in busta paga o sulla pensione.',
    perChi: 'Lavoratori dipendenti, pensionati, chi ha un contratto di collaborazione.',
    descrizione: [
      'Partiamo dal 730 precompilato dell\'Agenzia delle Entrate, controlliamo che ci siano tutte le spese e aggiungiamo quelle che mancano. Tu firmi una delega: non servono SPID o password.',
      'Se ti spetta un rimborso arriva con lo stipendio o la pensione, di solito da luglio. Se devi pagare, l\'importo viene trattenuto nello stesso modo.',
    ],
    durata: '45 minuti',
    prezzo: 'da 60 €',
    documenti: [
      { gruppo: 'Redditi', voci: [
        'Certificazione Unica (CU) di lavoro o pensione',
        "Dichiarazione dell'anno scorso, se non l'hai fatta da noi",
        "Altri redditi: affitti incassati, assegni dall'ex coniuge, redditi esteri",
      ] },
      { gruppo: 'Casa', voci: [
        'Atti di acquisto, vendita o eredità di case e terreni avvenuti nell\'anno',
        'Contratto di mutuo, atto di acquisto e certificazione degli interessi pagati',
        'Contratto di affitto registrato, se sei in affitto',
      ] },
      { gruppo: 'Spese da detrarre, con la prova di pagamento (carta, bancomat, bonifico)', voci: [
        'Spese mediche, farmaci e ticket: scontrini parlanti e fatture',
        'Scuola, università, mensa e asilo nido',
        'Sport dei figli tra 5 e 18 anni',
        'Abbonamenti al trasporto pubblico',
        'Assicurazioni vita e infortuni',
        'Spese veterinarie',
        'Donazioni a ONLUS, associazioni e partiti',
        'Contributi pagati per colf e badanti',
        'Versamenti a fondi pensione',
      ] },
      { gruppo: 'Lavori in casa', voci: [
        'Fatture e bonifici per ristrutturazioni, risparmio energetico e bonus mobili',
        'Pratiche edilizie e comunicazione ENEA, se presenti',
      ] },
      { gruppo: 'Pagamenti', voci: ['Modelli F24 degli acconti già versati'] },
    ],
    note: ['Se una spesa è già nel 730 precompilato non serve portarla: la verifichiamo insieme sullo schermo.'],
  },
  {
    slug: 'modello-redditi',
    nome: 'Modello Redditi PF',
    categoria: 'Dichiarazioni e tasse',
    sintesi: 'La dichiarazione per chi non può usare il 730: redditi esteri, eredi, nessun datore di lavoro.',
    perChi: 'Chi non ha un sostituto d\'imposta, ha conti o immobili all\'estero o presenta la dichiarazione per una persona scomparsa.',
    descrizione: [
      'Prepariamo e inviamo la dichiarazione all\'Agenzia delle Entrate e ti consegniamo gli F24 con importi e scadenze già indicati.',
      'Se hai conti, investimenti o immobili all\'estero compiliamo anche il quadro di monitoraggio e calcoliamo IVIE e IVAFE.',
    ],
    durata: '1 ora',
    prezzo: 'da 90 €',
    documenti: [
      { gruppo: 'Redditi', voci: [
        'Certificazione Unica (CU) e altri redditi dell\'anno',
        'Dichiarazione dell\'anno scorso',
        'Redditi esteri: buste paga, pensioni, affitti incassati all\'estero',
      ] },
      { gruppo: 'Beni all\'estero', voci: [
        'Estratti conto esteri con saldo al 31 dicembre e giacenza media',
        'Valore di investimenti e immobili detenuti all\'estero',
      ] },
      { gruppo: 'Spese e casa', voci: [
        'Le stesse spese detraibili e i documenti della casa richiesti per il 730',
        'Modelli F24 degli acconti già versati',
      ] },
      { gruppo: 'Se dichiari per una persona scomparsa', voci: [
        'Certificato di morte',
        'Documento d\'identità e codice fiscale dell\'erede che firma',
      ] },
    ],
  },
  {
    slug: 'isee',
    nome: 'ISEE',
    categoria: 'Famiglia e agevolazioni',
    sintesi: 'L\'indicatore che serve per Assegno Unico, bonus, rette scolastiche e agevolazioni comunali.',
    perChi: 'Ogni famiglia che chiede una prestazione legata al reddito.',
    descrizione: [
      'Compiliamo la DSU (Dichiarazione Sostitutiva Unica) per tutto il nucleo familiare e la inviamo all\'INPS. L\'attestazione ISEE arriva di solito in pochi giorni e te la mandiamo noi.',
      'Facciamo anche ISEE universitario, sociosanitario, per minorenni con genitori non conviventi e ISEE corrente.',
    ],
    durata: '30 minuti',
    prezzo: 'Gratuito',
    documenti: [
      { gruppo: 'Per ogni componente del nucleo familiare', voci: [
        'Documento d\'identità e codice fiscale',
        'Permesso di soggiorno, per i cittadini non UE',
      ] },
      { gruppo: 'Casa', voci: [
        'Contratto di affitto registrato e canone annuo',
        'Dati di case e terreni posseduti, anche all\'estero (visure o rogiti)',
        'Mutuo: quota capitale ancora da pagare al 31 dicembre di due anni fa',
      ] },
      { gruppo: 'Risparmi, al 31 dicembre di due anni fa', voci: [
        'Per ogni conto, libretto o carta con IBAN: saldo e giacenza media',
        'Titoli, fondi, azioni e polizze vita: valore a fine anno',
        'Partecipazioni in società',
      ] },
      { gruppo: 'Redditi di due anni fa non presenti in dichiarazione', voci: [
        'Borse di studio, compensi sportivi, redditi esteri o esenti',
        'Assegni di mantenimento pagati o ricevuti per coniuge e figli',
      ] },
      { gruppo: 'Altro', voci: [
        'Targhe di auto, moto sopra i 500 cc e imbarcazioni',
        'Certificati di invalidità o disabilità',
      ] },
    ],
    note: ['L\'ISEE scade il 31 dicembre. Rinnovalo da gennaio per non perdere l\'Assegno Unico pieno.'],
  },
  {
    slug: 'assegno-unico',
    nome: 'Assegno Unico e bonus famiglia',
    categoria: 'Famiglia e agevolazioni',
    sintesi: 'Domanda all\'INPS per l\'Assegno Unico per i figli, bonus asilo nido e altre prestazioni.',
    perChi: 'Genitori con figli fino a 21 anni, o senza limiti di età per i figli con disabilità.',
    descrizione: [
      'Presentiamo la domanda con il nostro patronato e controlliamo che l\'importo sia corretto rispetto al tuo ISEE.',
      'Se l\'ISEE non c\'è o è scaduto, lo facciamo nello stesso appuntamento.',
    ],
    durata: '30 minuti',
    prezzo: 'Gratuito',
    documenti: [
      { gruppo: 'Famiglia', voci: [
        'Documento d\'identità e codice fiscale di entrambi i genitori e dei figli',
        'ISEE valido, se lo hai già',
        'IBAN su cui ricevere l\'assegno (anche di tutti e due i genitori, se volete dividerlo)',
      ] },
      { gruppo: 'Se presenti', voci: [
        'Figli tra 18 e 21 anni: iscrizione a scuola o università, contratto di lavoro o servizio civile',
        'Certificazione di disabilità dei figli',
        'Ricevute della retta dell\'asilo nido, per il bonus nido',
      ] },
    ],
  },
  {
    slug: 'imu',
    nome: 'IMU',
    categoria: 'Casa e immobili',
    sintesi: 'Calcolo dell\'imposta su seconde case, terreni e immobili affittati, con F24 pronti da pagare.',
    perChi: 'Proprietari di immobili diversi dall\'abitazione principale.',
    descrizione: [
      'Calcoliamo acconto e saldo con le aliquote del tuo Comune e ti consegniamo i modelli F24 compilati. Se ci sono variazioni prepariamo anche la dichiarazione IMU.',
    ],
    durata: '30 minuti',
    prezzo: 'da 25 €',
    documenti: [
      { gruppo: 'Immobili', voci: [
        'Visure catastali o rendite di case, box e terreni',
        'Atti di acquisto, vendita o successione dell\'anno',
        'Contratti di affitto a canone concordato',
        'Contratti di comodato gratuito a figli o genitori',
      ] },
      { gruppo: 'Pagamenti', voci: ['Modelli F24 IMU dell\'anno scorso'] },
    ],
  },
  {
    slug: 'contratti-affitto',
    nome: 'Contratti di affitto',
    categoria: 'Casa e immobili',
    sintesi: 'Registrazione, proroghe, chiusure e scelta della cedolare secca.',
    perChi: 'Proprietari e inquilini.',
    descrizione: [
      'Scriviamo il contratto o controlliamo il vostro, lo registriamo all\'Agenzia delle Entrate e ti diciamo se conviene la cedolare secca. Gestiamo anche proroghe, cessioni e risoluzioni anticipate.',
    ],
    durata: '45 minuti',
    prezzo: 'da 80 €',
    documenti: [
      { gruppo: 'Parti', voci: [
        'Documento d\'identità e codice fiscale di proprietari e inquilini',
        'IBAN per l\'addebito delle imposte di registro',
      ] },
      { gruppo: 'Immobile', voci: [
        'Visura catastale',
        'Attestato di prestazione energetica (APE)',
        'Bozza del contratto, se l\'avete già concordata',
      ] },
      { gruppo: 'Per proroghe e chiusure', voci: ['Contratto registrato e ricevuta di registrazione'] },
    ],
  },
  {
    slug: 'successioni',
    nome: 'Successioni',
    categoria: 'Casa e immobili',
    sintesi: 'Dichiarazione di successione, volture catastali e calcolo delle imposte.',
    perChi: 'Eredi, dopo la scomparsa di un familiare.',
    descrizione: [
      'Nel primo incontro ricostruiamo insieme cosa ha lasciato la persona scomparsa e chi sono gli eredi. Poi prepariamo e inviamo la dichiarazione, calcoliamo le imposte e facciamo le volture degli immobili.',
      'Sappiamo che è un momento difficile: ci occupiamo noi di parlare con banche e uffici quando serve.',
    ],
    durata: '1 ora per il primo incontro',
    prezzo: 'Su preventivo',
    documenti: [
      { gruppo: 'Persona scomparsa ed eredi', voci: [
        'Certificato di morte',
        'Documento d\'identità e codice fiscale di tutti gli eredi',
        'Testamento, se presente, con il verbale di pubblicazione',
      ] },
      { gruppo: 'Patrimonio', voci: [
        'Rogiti o visure di case e terreni',
        'Saldo di conti, titoli e libretti alla data del decesso (lo chiede la banca su nostra indicazione)',
        'Libretti di circolazione dei veicoli',
      ] },
      { gruppo: 'Spese', voci: [
        'Fatture delle spese funebri',
        'Debiti della persona scomparsa, se ci sono',
        'IBAN dell\'erede su cui addebitare le imposte',
      ] },
    ],
    note: ['La dichiarazione va presentata entro 12 mesi dalla data del decesso.'],
  },
  {
    slug: 'colf-badanti',
    nome: 'Colf e badanti',
    categoria: 'Lavoro e famiglia',
    sintesi: 'Assunzione, buste paga, contributi INPS e chiusura del rapporto per il lavoro domestico.',
    perChi: 'Famiglie che assumono una colf, una badante o una baby sitter.',
    descrizione: [
      'Facciamo l\'assunzione all\'INPS, prepariamo ogni mese la busta paga e ogni tre mesi il bollettino dei contributi. A fine anno calcoliamo tredicesima e TFR e rilasciamo la certificazione per il 730.',
    ],
    durata: '45 minuti',
    prezzo: 'da 20 € al mese',
    documenti: [
      { gruppo: 'Datore di lavoro', voci: [
        'Documento d\'identità e codice fiscale',
        'Indirizzo dove si svolge il lavoro',
      ] },
      { gruppo: 'Lavoratore', voci: [
        'Documento d\'identità e codice fiscale',
        'Permesso di soggiorno valido, per i cittadini non UE',
        'IBAN, se lo pagherai con bonifico',
      ] },
      { gruppo: 'Accordi', voci: [
        'Data di inizio, orario settimanale e paga concordata',
        'Se sarà convivente o no',
      ] },
      { gruppo: 'Se il rapporto è già in corso', voci: ['Ultime buste paga e bollettini dei contributi'] },
    ],
  },
  {
    slug: 'naspi',
    nome: 'NASpI (disoccupazione)',
    categoria: 'Lavoro e famiglia',
    sintesi: 'Domanda di indennità di disoccupazione dopo la fine di un lavoro dipendente.',
    perChi: 'Chi ha perso il lavoro, anche alla scadenza di un contratto a termine.',
    descrizione: [
      'Presentiamo la domanda all\'INPS con il nostro patronato, calcoliamo quanto ti spetta e per quanti mesi, e ti spieghiamo cosa fare se trovi un nuovo lavoro.',
    ],
    durata: '30 minuti',
    prezzo: 'Gratuito',
    documenti: [
      { gruppo: 'Lavoro', voci: [
        'Lettera di licenziamento o contratto scaduto',
        'Ultime buste paga',
        'Certificazione Unica (CU)',
      ] },
      { gruppo: 'Altro', voci: [
        'IBAN intestato a te',
        'Permesso di soggiorno, per i cittadini non UE',
      ] },
    ],
    note: ['La domanda va presentata entro 68 giorni dalla fine del rapporto di lavoro. Non aspettare.'],
  },
  {
    slug: 'dimissioni',
    nome: 'Dimissioni online',
    categoria: 'Lavoro e famiglia',
    sintesi: 'Invio delle dimissioni volontarie o della risoluzione consensuale, obbligatorio online.',
    perChi: 'Lavoratori dipendenti del settore privato.',
    descrizione: [
      'Le dimissioni sono valide solo se inviate con la procedura telematica del Ministero del Lavoro. Le inviamo noi e ti verifichiamo il preavviso dovuto.',
    ],
    durata: '20 minuti',
    prezzo: 'da 15 €',
    documenti: [
      { gruppo: 'Rapporto di lavoro', voci: [
        'Data di assunzione e tipo di contratto (lo trovi in busta paga)',
        'Nome, codice fiscale o partita IVA ed email/PEC dell\'azienda',
        'Data da cui vuoi che le dimissioni abbiano effetto',
      ] },
    ],
  },
  {
    slug: 'red-pensionati',
    nome: 'RED e dichiarazioni dei pensionati',
    categoria: 'Pensionati',
    sintesi: 'Le dichiarazioni che l\'INPS chiede ai pensionati per confermare redditi e prestazioni.',
    perChi: 'Pensionati con integrazioni, maggiorazioni o invalidità civile.',
    descrizione: [
      'Inviamo il modello RED e le dichiarazioni ICRIC, ICLAV e ACCAS/PS. Non farle in tempo può portare alla sospensione di una parte della pensione.',
    ],
    durata: '20 minuti',
    prezzo: 'Gratuito',
    documenti: [
      { gruppo: 'Documenti', voci: [
        'Lettera o richiesta dell\'INPS, se l\'hai ricevuta',
        'Certificazione Unica della pensione',
        'Altri redditi dell\'anno: affitti, interessi, pensioni estere',
        'Per invalidi civili: date di eventuali ricoveri e attività lavorative',
      ] },
    ],
  },
  {
    slug: 'domanda-pensione',
    nome: 'Domanda di pensione',
    categoria: 'Pensionati',
    sintesi: 'Verifica dei requisiti e domanda all\'INPS di pensione di vecchiaia, anticipata o ai superstiti.',
    perChi: 'Chi ha già raggiunto i requisiti, o chi ha perso il coniuge.',
    descrizione: [
      'Controlliamo l\'estratto conto contributivo, verifichiamo la data di decorrenza e presentiamo la domanda con il nostro patronato.',
      'Se invece vuoi capire con anticipo quando e con quale importo potrai andare in pensione, c\'è la nostra consulenza pensionistica: relazione scritta e videochiamata.',
    ],
    durata: '45 minuti',
    prezzo: 'Gratuito',
    documenti: [
      { gruppo: 'Documenti', voci: [
        'IBAN su cui ricevere la pensione',
        'Estratto conto contributivo, se lo hai (altrimenti lo scarichiamo noi con una delega)',
        'Documenti di lavori svolti all\'estero',
        'Per la pensione ai superstiti: certificato di morte del coniuge',
      ] },
    ],
  },
];

export const servizioDa = (slug: string) => servizi.find((s) => s.slug === slug);
