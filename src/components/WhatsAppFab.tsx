import { company } from '../data/company';

/**
 * Botão flutuante do WhatsApp do bot (piloto).
 * Empilha em cima do ícone do Communications widget (mesmo 60px e right: 24px).
 */
export function WhatsAppFab() {
  return (
    <a
      className="whatsapp-fab"
      href={company.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir WhatsApp da NuvemNet"
    >
      <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" focusable="false">
        <path
          fill="currentColor"
          d="M12.04 2C6.58 2 2.15 6.43 2.15 11.89c0 1.76.46 3.48 1.34 5L2 22l5.25-1.38a9.86 9.86 0 0 0 4.79 1.22h.01c5.46 0 9.89-4.43 9.89-9.89C21.94 6.43 17.5 2 12.04 2Zm5.76 14.01c-.24.68-1.4 1.25-1.94 1.33-.5.07-1.12.1-1.81-.11-.41-.13-.94-.31-1.62-.6-2.85-1.23-4.71-4.1-4.85-4.29-.14-.19-1.15-1.53-1.15-2.92 0-1.39.73-2.07.99-2.36.26-.29.56-.36.75-.36h.54c.17 0 .4-.06.63.48.24.56.81 1.98.88 2.13.07.14.12.31.02.5-.1.19-.14.31-.28.48-.14.17-.3.38-.42.51-.14.14-.29.29-.12.56.16.28.73 1.2 1.56 1.94 1.08.96 1.98 1.26 2.26 1.4.28.14.44.12.6-.07.16-.19.7-.82.89-1.1.19-.28.37-.23.63-.14.26.1 1.64.77 1.92.91.28.14.47.21.54.33.07.12.07.68-.17 1.36Z"
        />
      </svg>
    </a>
  );
}
