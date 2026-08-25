export const company = {
  name: 'NuvemNet Fibra',
  legalName: 'NuvemNet Telecom Ltda.',
  cnpj: '45.892.301/0001-77',
  foundedIn: 2016,
  address:
    'Av. Engenheiro Luís Carlos Berrini, 105 — 12º andar — Brooklin, São Paulo/SP — CEP 04571-010',
  site: 'www.nuvemnet.com.br',
  emails: {
    contact: 'contato@nuvemnet.com.br',
    support: 'suporte@nuvemnet.com.br',
    finance: 'financeiro@nuvemnet.com.br',
    ombudsman: 'ouvidoria@nuvemnet.com.br',
  },
  phones: {
    whatsapp: '+1 555-457-3044',
    callCenter: '0800 771 2000',
  },
  /** Link wa.me do piloto (WABA +1 555-457-3044). Produção: E.164 da WABA real. */
  whatsappUrl: 'https://wa.me/15554573044',
} as const;

export const channels = [
  {
    id: 'whatsapp',
    title: 'WhatsApp',
    value: '+1 555-457-3044',
    hours: 'Assistente virtual 24h · atendentes 8h às 22h',
    description: 'Dúvidas, segunda via, suporte guiado e transferência para humano.',
    icon: 'chat',
  },
  {
    id: 'phone',
    title: 'Central telefônica',
    value: '0800 771 2000',
    hours: 'Todos os dias, 8h às 22h',
    description: 'Falha total de conexão, preferência por voz e atendimento assistido.',
    icon: 'phone',
  },
  {
    id: 'app',
    title: 'App NuvemNet',
    value: 'iOS e Android',
    hours: 'Self-service 24h',
    description: 'Segunda via, consumo, troca de senha do Wi-Fi e abertura de chamado.',
    icon: 'app',
  },
  {
    id: 'email',
    title: 'E-mail de suporte',
    value: 'suporte@nuvemnet.com.br',
    hours: 'Resposta em até 1 dia útil',
    description: 'Assuntos que não são urgentes e envio de documentos.',
    icon: 'mail',
  },
] as const;

export const stats = [
  { value: '2016', label: 'Ano de fundação' },
  { value: '6', label: 'Cidades atendidas' },
  { value: '99%', label: 'SLA de disponibilidade' },
  { value: '3–7', label: 'Dias úteis para instalar' },
] as const;
