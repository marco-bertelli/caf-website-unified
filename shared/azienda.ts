// Tutti i dati dell'azienda in un unico posto.
// I valori segnati MOCK vanno sostituiti con quelli veri prima della messa online.

export const azienda = {
  nome: 'Tutela Previdenziale',
  ragioneSociale: 'CAF e Patronato Tutela Previdenziale', // MOCK: ragione sociale esatta da visura
  piva: '00000000000', // MOCK
  indirizzo: 'Via Giacomo Matteotti, 64',
  cap: '25036',
  citta: "Palazzolo sull'Oglio",
  provincia: 'BS',
  telefono: '030 730 1104',
  whatsapp: '393330000000', // MOCK, formato internazionale senza +
  email: 'info@example.it', // MOCK
  pec: 'tutelaprevidenziale@pec.example.it', // MOCK
  facebook: 'https://www.facebook.com/patronatopalazzolo',
  convenzione: 'Sede convenzionata C.A.F. Nazionale del Lavoro', // DA VERIFICARE
  coordinate: { lat: 45.5953, lng: 9.8876 }, // via Matteotti, da affinare sul civico
  parcheggio: 'Parcheggio gratuito a 50 metri, in piazza.', // MOCK

  // Da lunedì a domenica. Fasce vuote = chiuso.
  orari: [
    { giorno: 'Lunedì', fasce: ['9:00–12:30', '14:30–18:30'] },
    { giorno: 'Martedì', fasce: ['9:00–12:30', '14:30–18:30'] },
    { giorno: 'Mercoledì', fasce: ['9:00–12:30', '14:30–18:30'] },
    { giorno: 'Giovedì', fasce: ['9:00–12:30'] },
    { giorno: 'Venerdì', fasce: ['9:00–12:30', '14:30–18:30'] },
    { giorno: 'Sabato', fasce: ['9:00–12:30'] },
    { giorno: 'Domenica', fasce: [] },
  ], // da scheda Google, ottobre 2026

  siti: {
    caf: { nome: 'Tutela Previdenziale', linea: 'CAF e Patronato', url: 'https://caf.tutelaprevidenziale.example' }, // MOCK: dominio
    pensioni: { nome: 'Tutela Previdenziale', linea: 'Consulenza pensionistica', url: 'https://pensioni.tutelaprevidenziale.example' }, // MOCK: dominio
  },

  // Endpoint dei form (es. Formspree, Netlify Forms, Basin).
  // Stringa vuota = modalità demo: il form mostra la conferma senza inviare nulla.
  form: {
    prenota: '', // MOCK
    questionario: '', // MOCK
    studi: '', // MOCK
  },

  studi: {
    email: 'studi@example.it', // MOCK
    telefono: '030 000 0001', // MOCK
    rispostaEntro: '48 ore lavorative', // MOCK
  },
};

export const indirizzoCompleto = `${azienda.indirizzo}, ${azienda.cap} ${azienda.citta} (${azienda.provincia})`;
export const telLink = `tel:+39${azienda.telefono.replace(/\s/g, '')}`;
export const mappaLink = `https://www.openstreetmap.org/?mlat=${azienda.coordinate.lat}&mlon=${azienda.coordinate.lng}#map=17/${azienda.coordinate.lat}/${azienda.coordinate.lng}`;
