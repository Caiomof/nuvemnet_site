# Site NuvemNet Fibra

Site institucional **fictício** da NuvemNet Fibra, construído em React + Vite + TypeScript e já
preparado para receber o **webchat do Amazon Connect** (Communications widget).

Todo o conteúdo (planos, preços, cobertura, procedimentos de suporte e regras de cobrança) vem da
base de conhecimento do piloto, em `../base-de-conhecimento/`. Assim o chatbot e o site contam a
mesma história.

---

## Como rodar

Na raiz do workspace, dê dois cliques em **`iniciar-nuvemnet.bat`**. Ele instala as dependências na
primeira execução e sobe o servidor em <http://localhost:5180>.

Ou, pelo terminal:

```bash
cd NuvemNet
npm install
npm run dev
```

| Script | O que faz |
|--------|-----------|
| `npm run dev` | Servidor de desenvolvimento com hot reload na porta 5180 |
| `npm run build` | Verifica tipos e gera o site estático em `dist/` |
| `npm run preview` | Serve o `dist/` para testar a versão de produção |
| `npm run lint` | Só a checagem de tipos do TypeScript |

---

## Estrutura

```
NuvemNet/
├── index.html               Documento raiz e fontes
├── .env.example             Modelo de configuração do webchat
├── public/favicon.svg
└── src/
    ├── main.tsx             Ponto de entrada (React + Router)
    ├── App.tsx              Tabela de rotas
    ├── components/          Componentes reutilizáveis
    │   ├── Layout.tsx       Header + conteúdo + Footer + chat
    │   ├── Header.tsx       Navegação (com menu mobile)
    │   ├── Footer.tsx
    │   ├── PageHero.tsx     Cabeçalho das páginas internas
    │   ├── Section.tsx      Seção + título padronizado
    │   ├── PlanCard.tsx     Cartão de plano
    │   ├── CoverageChecker.tsx  Consulta de CEP (simulada)
    │   ├── Accordion.tsx    FAQ expansível
    │   ├── CtaBanner.tsx    Faixa de chamada para ação
    │   ├── ConnectChat.tsx  Injeta o widget do Amazon Connect
    │   ├── ScrollToTop.tsx  Rola ao topo na troca de rota
    │   └── Icon.tsx         Ícones SVG inline
    ├── config/connect.ts    Configuração do webchat lida do .env
    ├── data/                Conteúdo tipado (planos, cobertura, FAQ, suporte)
    ├── pages/               Uma página por rota
    └── styles/
        ├── tokens.css       Cores, tipografia, espaçamentos, sombras
        ├── global.css       Reset, layout e utilitários
        └── components.css   Estilos dos componentes
```

**Decisões de arquitetura**

- Conteúdo separado da apresentação: tudo que é texto de negócio vive em `src/data`, tipado. Trocar
  um preço não exige mexer em componente.
- Design system em CSS puro com custom properties. Sem dependência de framework de UI, então o
  bundle fica pequeno e o visual continua consistente.
- Componentes sem estado global. O único estado compartilhado seria a sessão do chat, e essa fica
  dentro do widget do Connect.
- A integração com o Connect está isolada em `config/connect.ts` + `components/ConnectChat.tsx`.
  Nenhuma página conhece o Amazon Connect.

---

## Ligando o webchat do Amazon Connect

1. No Connect admin: **Channels → Communication widgets → Add widget**.
2. Em *domains*, autorize `http://localhost:5180` (desenvolvimento) e o domínio real de produção.
3. Aponte o widget para o contact flow do piloto (o mesmo usado por WhatsApp e Test Chat).
4. Salve e copie o snippet gerado.
5. Copie `.env.example` para `.env.local` e preencha:

```env
VITE_CONNECT_CHAT_ENABLED=true
VITE_CONNECT_WIDGET_ID=<4º argumento do snippet>
VITE_CONNECT_SNIPPET_ID=<string longa de amazon_connect('snippetId', ...)>
VITE_CONNECT_SCRIPT_URL=<URL .cloudfront.net do snippet>
```

6. Reinicie o `npm run dev`. O balão de chat aparece no canto inferior direito.

Enquanto o webchat estiver desligado, o site mostra um aviso discreto no canto (só em
desenvolvimento) lembrando o que falta configurar.

O passo a passo completo, com prints das telas e a parte de segurança JWT, está em
`../docs/guias/PASSO_A_PASSO_WEBCHAT.md`.

---

## Observações

- Site de demonstração: o formulário de contato, o login da área do cliente e a consulta de CEP não
  chamam backend nenhum. A consulta de viabilidade usa uma lista de prefixos em
  `src/data/coverage.ts` só para exercitar a jornada.
- Empresa, CNPJ, endereços, telefones e valores são fictícios.
