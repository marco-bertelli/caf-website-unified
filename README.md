# Tutela Previdenziale: i due siti

Due siti statici Astro, stessa azienda, due linee:

| Sito | Cartella | Cosa fa |
|---|---|---|
| CAF e Patronato | `sites/caf` | Servizi in ufficio a Palazzolo, lista documenti per ogni servizio (da spuntare e stampare), richiesta appuntamento |
| Consulenza pensionistica | `sites/pensioni` | Consulenza online di alto profilo: questionario a passi, tariffe, pagina convenzione per studi commercialisti |

`shared/` contiene dati aziendali, CSS base, font, logo, invio form e informativa privacy comuni.

## Avvio in locale

Serve Node 22 (`nvm use`).

```sh
npm install
npm run dev:caf        # http://localhost:4321
npm run dev:pensioni   # http://localhost:4321 (o la porta successiva libera)
npm run build          # build di entrambi in sites/*/dist
node sites/caf/src/lib/orari.test.ts      # test della logica "aperto ora"
node sites/caf/src/lib/scadenze.test.ts   # test di scadenze, weekend e file .ics
```

## Prima della messa online

Tutti i dati da completare sono in **`shared/azienda.ts`** e segnati `MOCK` o `DA VERIFICARE`:

- ragione sociale, P.IVA, email, PEC, numero WhatsApp
- convenzione CAF (Pagine Bianche indica C.A.F. Nazionale del Lavoro allo stesso indirizzo)
- domini dei due siti (`siti.caf.url`, `siti.pensioni.url`): servono per canonical e sitemap
- endpoint dei 3 form (`form.prenota`, `form.questionario`, `form.studi`), es. [Formspree](https://formspree.io): crea un form per ciascuno e incolla l'URL. Finché sono vuoti i form mostrano la conferma senza inviare nulla
- contatti dedicati agli studi e tempo di risposta promesso
- nota sul parcheggio, coordinate precise del civico

Altri contenuti da confermare con l'ufficio:

- `sites/caf/src/data/servizi.ts`: prezzi e durate dei servizi (le liste documenti sono pronte)
- `sites/pensioni/src/data/consulenza.ts`: prezzi dei pacchetti, tempi, nome e bio del consulente
- `sites/caf/src/data/scadenze.ts`: calendario fiscale, da ricontrollare a ogni legge di bilancio (le date si ricalcolano da sole ogni anno, i termini no)
- `sites/pensioni/src/content/guide/*.md`: le guide; per aggiungerne una basta un nuovo file Markdown con la stessa intestazione
- `shared/Privacy.astro`: testo base, da far rivedere a chi segue la privacy

Già reali (dalla scheda Google): nome, indirizzo, telefono, orari, pagina Facebook.

## Pubblicazione

Due progetti separati su Netlify, Vercel o Cloudflare Pages, collegati allo stesso repository:

| | Base directory | Build command | Output |
|---|---|---|---|
| CAF | `sites/caf` | `npm run build` | `dist` |
| Pensioni | `sites/pensioni` | `npm run build` | `dist` |

Versione di Node: 22. Il sito non usa cookie né statistiche, quindi non serve il banner cookie. La mappa è OpenStreetMap, senza tracciamento.

## Non incluso (per scelta, per ora)

- Pagamento online: oggi il preventivo si paga con bonifico. Si può aggiungere un link di pagamento Stripe al preventivo senza toccare il sito.
- Calendario con slot liberi: la prenotazione è una richiesta, l'ufficio richiama per confermare.
- Area riservata per gli studi: c'è il canale dedicato (email, telefono, codice studio nel questionario).
