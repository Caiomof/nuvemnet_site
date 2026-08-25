import { useEffect, useState } from 'react';
import {
  connectChat,
  isConnectChatConfigured,
  supportedMessagingContentTypes,
} from '../config/connect';

type AmazonConnectFn = ((...args: unknown[]) => void) & { ac?: unknown[] };

declare global {
  interface Window {
    amazon_connect?: AmazonConnectFn;
  }
}

/**
 * Carrega o Communications widget do Amazon Connect uma única vez por sessão.
 *
 * O widget cria e controla o próprio balão flutuante, então este componente não
 * renderiza interface — apenas injeta o script e aplica a configuração.
 */
export function ConnectChat() {
  const [hintVisible, setHintVisible] = useState(true);
  const configured = isConnectChatConfigured();

  useEffect(() => {
    if (!configured) return;
    if (document.getElementById(connectChat.widgetId)) return;

    const script = document.createElement('script');
    script.src = connectChat.scriptUrl;
    script.async = true;
    script.id = connectChat.widgetId;
    document.head.appendChild(script);

    if (!window.amazon_connect) {
      const queue = ((...args: unknown[]) => {
        queue.ac = queue.ac ?? [];
        queue.ac.push(args);
      }) as AmazonConnectFn;
      window.amazon_connect = queue;
    }

    const amazonConnect = window.amazon_connect;

    amazonConnect('styles', {
      iconType: 'CHAT',
      openChat: connectChat.colors.open,
      closeChat: connectChat.colors.close,
    });
    amazonConnect('snippetId', connectChat.snippetId);
    amazonConnect('supportedMessagingContentTypes', supportedMessagingContentTypes);
    amazonConnect('customDisplayNames', {
      transcript: { botMessageDisplayName: 'Assistente NuvemNet' },
    });
  }, [configured]);

  if (configured || !hintVisible || !import.meta.env.DEV) {
    return null;
  }

  return (
    <aside className="chat-hint">
      <button
        type="button"
        className="chat-hint__close"
        onClick={() => setHintVisible(false)}
        aria-label="Fechar aviso"
      >
        ×
      </button>
      <strong>Webchat do Amazon Connect desativado</strong>
      Copie <code>.env.example</code> para <code>.env.local</code>, preencha os dados do
      Communications widget e defina <code>VITE_CONNECT_CHAT_ENABLED=true</code>. Depois reinicie o
      servidor de desenvolvimento.
    </aside>
  );
}
