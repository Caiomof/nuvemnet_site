/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CONNECT_CHAT_ENABLED?: string;
  readonly VITE_CONNECT_WIDGET_ID?: string;
  readonly VITE_CONNECT_SNIPPET_ID?: string;
  readonly VITE_CONNECT_SCRIPT_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
