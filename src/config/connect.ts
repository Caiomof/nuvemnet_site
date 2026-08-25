/**
 * Configuração do Communications widget (webchat) do Amazon Connect.
 *
 * Todos os valores vêm do snippet gerado em:
 * Connect admin → Channels → Communication widgets → seu widget → Copy script.
 *
 * Preencha o arquivo .env.local a partir do .env.example.
 */

export type ConnectChatConfig = {
  enabled: boolean;
  widgetId: string;
  snippetId: string;
  scriptUrl: string;
  /** Cores do balão de chat, alinhadas à identidade NuvemNet. */
  colors: {
    open: { color: string; backgroundColor: string };
    close: { color: string; backgroundColor: string };
  };
};

const env = import.meta.env;

export const connectChat: ConnectChatConfig = {
  enabled: env.VITE_CONNECT_CHAT_ENABLED === 'true',
  widgetId: env.VITE_CONNECT_WIDGET_ID ?? '',
  snippetId: env.VITE_CONNECT_SNIPPET_ID ?? '',
  scriptUrl: env.VITE_CONNECT_SCRIPT_URL ?? '',
  colors: {
    open: { color: '#ffffff', backgroundColor: '#1d4ed8' },
    close: { color: '#ffffff', backgroundColor: '#0a1b3d' },
  },
};

export function isConnectChatConfigured(config: ConnectChatConfig = connectChat) {
  return Boolean(config.enabled && config.widgetId && config.snippetId && config.scriptUrl);
}

/** Tipos de conteúdo aceitos, incluindo mensagens interativas do Lex (listas e botões). */
export const supportedMessagingContentTypes = [
  'text/plain',
  'text/markdown',
  'application/vnd.amazonaws.connect.message.interactive',
  'application/vnd.amazonaws.connect.message.interactive.response',
];
