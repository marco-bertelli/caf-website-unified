// Invio dei form statici: ogni <form data-endpoint> viene inviato come POST multipart
// (Formspree/Basin/Netlify accettano FormData). Endpoint vuoto = demo, nessun invio.
// Il form deve contenere [data-success] (nascosto) e [data-error].

export function wireForms() {
  document.querySelectorAll<HTMLFormElement>('form[data-endpoint]').forEach((form) => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      form.setAttribute('data-touched', '');
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      if (data.get('_gotcha')) return; // honeypot compilato: bot

      const btn = form.querySelector<HTMLButtonElement>('[type=submit]');
      const err = form.querySelector<HTMLElement>('[data-error]');
      const label = btn?.textContent;
      if (btn) { btn.disabled = true; btn.textContent = 'Invio in corso…'; }
      if (err) err.hidden = true;

      try {
        const endpoint = form.dataset.endpoint;
        if (endpoint) {
          const res = await fetch(endpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
          if (!res.ok) throw new Error(String(res.status));
        } else {
          // ponytail: modalità demo finché non c'è un endpoint in shared/azienda.ts
          console.info('[form demo]', Object.fromEntries(data));
          await new Promise((r) => setTimeout(r, 500));
        }
        const ok = form.parentElement!.querySelector<HTMLElement>('[data-success]')!;
        form.hidden = true;
        ok.hidden = false;
        ok.focus();
        ok.scrollIntoView({ block: 'center' });
      } catch {
        if (err) { err.hidden = false; err.focus(); }
      } finally {
        if (btn) { btn.disabled = false; btn.textContent = label ?? 'Invia'; }
      }
    });
  });
}
