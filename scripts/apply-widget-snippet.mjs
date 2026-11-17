/**
 * Lê widget-snippet.txt (snippet gerado pelo Amazon Connect) e grava .env.local.
 *
 * Uso:
 *   1. Cole o <script>...</script> em widget-snippet.txt
 *   2. node scripts/apply-widget-snippet.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const snippetPath = path.join(root, 'widget-snippet.txt');
const envPath = path.join(root, '.env.local');

if (!fs.existsSync(snippetPath)) {
  console.error('Arquivo widget-snippet.txt não encontrado.');
  process.exit(1);
}

const raw = fs.readFileSync(snippetPath, 'utf8');

const scriptUrl = raw.match(/s\.src\s*=\s*['"]([^'"]+)['"]/i)?.[1]
  || raw.match(/src\s*=\s*['"](https:\/\/[^'"]+)['"]/i)?.[1];

const widgetId = raw.match(/amazon_connect['"]\s*,\s*['"]([^'"]+)['"]\s*\)/i)?.[1]
  || raw.match(/\(['"]amazon_connect['"]\s*,\s*['"]([^'"]+)['"]\)/i)?.[1];

const snippetId = raw.match(/amazon_connect\(\s*['"]snippetId['"]\s*,\s*['"]([^'"]+)['"]\s*\)/i)?.[1];

if (!scriptUrl || !widgetId || !snippetId) {
  console.error('Não consegui extrair SCRIPT_URL / WIDGET_ID / SNIPPET_ID do snippet.');
  console.error({ scriptUrl: !!scriptUrl, widgetId: !!widgetId, snippetId: !!snippetId });
  console.error('Cole o script completo gerado pelo Connect em widget-snippet.txt');
  process.exit(1);
}

const env = `# Gerado automaticamente a partir do Communications widget
VITE_CONNECT_CHAT_ENABLED=true
VITE_CONNECT_WIDGET_ID=${widgetId}
VITE_CONNECT_SNIPPET_ID=${snippetId}
VITE_CONNECT_SCRIPT_URL=${scriptUrl}
`;

fs.writeFileSync(envPath, env, 'utf8');
console.log('OK → .env.local criado/atualizado');
console.log(`  WIDGET_ID: ${widgetId}`);
console.log(`  SCRIPT_URL: ${scriptUrl}`);
console.log(`  SNIPPET_ID: ${snippetId.slice(0, 24)}… (${snippetId.length} chars)`);
console.log('');
console.log('Reinicie o nuvemnet_start.bat e abra http://localhost:5182');
