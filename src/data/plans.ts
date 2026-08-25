export type Plan = {
  id: string;
  name: string;
  download: number;
  upload: number;
  price: number;
  highlight?: boolean;
  badge?: string;
  features: string[];
};

export const residentialPlans: Plan[] = [
  {
    id: 'nuvem-300',
    name: 'Nuvem 300',
    download: 300,
    upload: 150,
    price: 99.9,
    features: [
      'Download até 300 Mbps · upload até 150 Mbps',
      'Roteador Wi-Fi 6 em comodato',
      'Instalação R$ 0,00 na promoção padrão',
      'Sem franquia de dados',
      'Suporte por WhatsApp, app e telefone',
    ],
  },
  {
    id: 'nuvem-600',
    name: 'Nuvem 600',
    download: 600,
    upload: 300,
    price: 129.9,
    highlight: true,
    badge: 'Mais escolhido',
    features: [
      'Download até 600 Mbps · upload até 300 Mbps',
      'Roteador Wi-Fi 6 em comodato',
      'Instalação R$ 0,00 na promoção padrão',
      'Compatível com Wi-Fi Mesh (add-on)',
      'Ideal para home office e streaming 4K',
    ],
  },
  {
    id: 'nuvem-1giga',
    name: 'Nuvem 1 Giga',
    download: 1000,
    upload: 500,
    price: 169.9,
    features: [
      'Download até 1000 Mbps · upload até 500 Mbps',
      'Roteador Wi-Fi 6 dual-band em comodato',
      'Instalação R$ 0,00 na promoção padrão',
      'Compatível com Wi-Fi Mesh (add-on)',
      'Para casas cheias de dispositivos e jogos online',
    ],
  },
];

export const businessPlans: Plan[] = [
  {
    id: 'business-600',
    name: 'Business 600',
    download: 600,
    upload: 300,
    price: 189.9,
    features: [
      'Download até 600 Mbps · upload até 300 Mbps',
      'IP fixo opcional (+ R$ 39,90/mês)',
      'Fila de suporte Business prioritária',
      'SLA comercial diferenciado',
      'Emissão de documentos fiscais para CNPJ',
    ],
  },
  {
    id: 'business-1giga',
    name: 'Business 1 Giga',
    download: 1000,
    upload: 500,
    price: 249.9,
    highlight: true,
    badge: 'IP fixo incluso',
    features: [
      'Download até 1000 Mbps · upload até 500 Mbps',
      'IP fixo incluso no plano',
      'Fila de suporte Business prioritária',
      'Indicado para VPN, servidores e câmeras IP',
      'Emissão de documentos fiscais para CNPJ',
    ],
  },
];

export const addOns = [
  { item: '1º nó Wi-Fi Mesh adicional', price: 'R$ 19,90/mês', note: 'Requer Nuvem 600 ou 1 Giga' },
  { item: '2º nó Wi-Fi Mesh adicional', price: 'R$ 19,90/mês', note: 'Máximo de 2 nós além do roteador' },
  { item: 'Instalação dos nós mesh', price: 'R$ 0,00', note: 'Na instalação ou em visita agendada' },
  { item: 'IP fixo (Business 600)', price: 'R$ 39,90/mês', note: 'Incluso no Business 1 Giga' },
];

export const serviceFees = [
  { item: 'Instalação padrão residencial (promoção vigente)', price: 'R$ 0,00', term: '3 a 7 dias úteis' },
  { item: 'Instalação fora de promoção', price: 'R$ 150,00', term: '3 a 7 dias úteis' },
  { item: 'Visita técnica corretiva (falha da rede NuvemNet)', price: 'R$ 0,00', term: 'Conforme fila' },
  { item: 'Visita técnica por problema no ambiente do cliente', price: 'R$ 120,00', term: 'Após diagnóstico remoto' },
  { item: 'Visita frustrada sem aviso prévio de 2h', price: 'R$ 80,00', term: '—' },
  { item: 'Remanejamento de ponto na mesma unidade', price: 'R$ 80,00', term: 'Agendamento' },
  { item: 'Mudança de endereço (residencial)', price: 'R$ 99,90', term: 'Sujeito a viabilidade' },
  { item: 'Troca de titularidade', price: 'R$ 50,00', term: 'Análise cadastral' },
];

export const contractRules = [
  'Fidelidade padrão de 12 meses a partir da ativação do sinal.',
  'Plano mês a mês (sem fidelidade) tem acréscimo de R$ 20,00 na mensalidade.',
  'Upgrade no mesmo endereço não tem taxa e vale a partir do ciclo seguinte.',
  'Cancelamento na fidelidade gera multa proporcional, de até R$ 450,00 conforme o caso.',
  'Equipamentos em comodato devem ser devolvidos em até 7 dias após o desligamento.',
];
