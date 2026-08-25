export type CoverageStatus = 'disponivel' | 'expansao' | 'indisponivel';

export type CoverageCity = {
  city: string;
  status: CoverageStatus;
  neighborhoods: string[];
  note?: string;
};

export const coverage: CoverageCity[] = [
  {
    city: 'São Paulo (capital)',
    status: 'disponivel',
    neighborhoods: [
      'Brooklin',
      'Campo Belo',
      'Moema',
      'Vila Mariana',
      'Saúde',
      'Ipiranga',
      'Jabaquara (parcial)',
      'Tatuapé (parcial)',
      'Penha (parcial)',
    ],
  },
  {
    city: 'Santo André',
    status: 'disponivel',
    neighborhoods: ['Centro', 'Jardim', 'Vila Assunção', 'Casa Branca'],
    note: 'Primeiro POP da NuvemNet, em operação desde 2016.',
  },
  {
    city: 'São Bernardo do Campo',
    status: 'disponivel',
    neighborhoods: ['Centro', 'Assunção', 'Demarchi (parcial)'],
  },
  {
    city: 'São Caetano do Sul',
    status: 'disponivel',
    neighborhoods: ['Cobertura ampla no município'],
  },
  {
    city: 'Diadema',
    status: 'expansao',
    neighborhoods: ['Centro e entorno'],
    note: 'Cobertura parcial, com expansão em andamento.',
  },
  {
    city: 'Mauá',
    status: 'expansao',
    neighborhoods: ['Piloto limitado'],
    note: 'Consulte viabilidade antes de contratar.',
  },
];

export const statusLabel: Record<CoverageStatus, string> = {
  disponivel: 'Disponível',
  expansao: 'Em expansão',
  indisponivel: 'Indisponível',
};

/**
 * Simulação local de viabilidade. Em produção, este trecho chamaria a API de
 * mapa de CTO/postes. Aqui usamos o prefixo do CEP só para demonstrar a jornada.
 */
const availablePrefixes = ['0457', '0456', '0413', '0405', '0409', '0902', '0901', '0955', '0413'];
const expansionPrefixes = ['0994', '0940', '0813'];

export function checkViability(rawCep: string): {
  status: CoverageStatus;
  message: string;
} {
  const cep = rawCep.replace(/\D/g, '');

  if (cep.length !== 8) {
    return {
      status: 'indisponivel',
      message: 'Digite um CEP completo, com 8 números.',
    };
  }

  const prefix = cep.slice(0, 4);

  if (availablePrefixes.includes(prefix)) {
    return {
      status: 'disponivel',
      message:
        'Boa notícia: há estrutura NuvemNet na sua região. A instalação costuma acontecer em 3 a 7 dias úteis.',
    };
  }

  if (expansionPrefixes.includes(prefix)) {
    return {
      status: 'expansao',
      message:
        'Sua região está em expansão. Deixe seu contato que avisamos assim que a fibra chegar até você.',
    };
  }

  return {
    status: 'indisponivel',
    message:
      'Ainda não temos cobertura confirmada nesse CEP. Fale com nosso atendimento para entrar na lista de interesse.',
  };
}
