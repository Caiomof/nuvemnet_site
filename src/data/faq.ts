export type FaqItem = {
  question: string;
  answer: string;
  topic: 'Planos' | 'Cobertura' | 'Suporte' | 'Pagamentos' | 'Contrato';
};

export const faq: FaqItem[] = [
  {
    topic: 'Planos',
    question: 'Quais planos residenciais a NuvemNet oferece?',
    answer:
      'São três planos: Nuvem 300 (300/150 Mbps) por R$ 99,90, Nuvem 600 (600/300 Mbps) por R$ 129,90 e Nuvem 1 Giga (1000/500 Mbps) por R$ 169,90. Todos com roteador Wi-Fi 6 em comodato e sem franquia de dados.',
  },
  {
    topic: 'Planos',
    question: 'Existe plano sem fidelidade?',
    answer:
      'Sim. O plano mês a mês tem acréscimo de R$ 20,00 sobre a mensalidade do plano escolhido. Com fidelidade de 12 meses, você mantém o valor de tabela e a instalação promocional.',
  },
  {
    topic: 'Planos',
    question: 'O que é o Wi-Fi Mesh e quanto custa?',
    answer:
      'É um nó adicional que amplia o alcance do Wi-Fi em casas maiores. Custa R$ 19,90 por mês por nó, com limite de 2 nós, e está disponível para os planos Nuvem 600 e 1 Giga. A instalação dos nós não tem custo.',
  },
  {
    topic: 'Cobertura',
    question: 'Em quais cidades a NuvemNet atende?',
    answer:
      'Atendemos regiões de São Paulo capital (zona sul e leste), Santo André, São Bernardo do Campo, São Caetano do Sul, Diadema (parcial) e Mauá (piloto). A confirmação depende da viabilidade no CEP e número do endereço.',
  },
  {
    topic: 'Cobertura',
    question: 'Como funciona a consulta de viabilidade?',
    answer:
      'Você informa CEP e número. Consultamos o mapa de postes e caixas ópticas (CTO) da região. O resultado pode ser Disponível, Em expansão ou Indisponível. Em prédios sem estrutura NuvemNet, é necessária autorização do condomínio.',
  },
  {
    topic: 'Suporte',
    question: 'Minha internet está lenta no Wi-Fi. O que fazer?',
    answer:
      'Teste primeiro por cabo no roteador NuvemNet. Se o cabo estiver bom e o Wi-Fi ruim, o problema é local: reinicie o roteador por 30 segundos, aproxime-se dele, prefira a rede 5 GHz e desligue VPNs no celular. Se persistir, abra um chamado.',
  },
  {
    topic: 'Suporte',
    question: 'A luz da fibra está vermelha. É grave?',
    answer:
      'Pode indicar rompimento ou desconexão óptica. Reinicie o equipamento, verifique se o cabo foi puxado ou dobrado e confirme se a fatura está em dia. Se continuar vermelha, abrimos um chamado com prioridade de link.',
  },
  {
    topic: 'Suporte',
    question: 'Quanto tempo leva a instalação?',
    answer:
      'Com viabilidade e documentação aprovadas, de 3 a 7 dias úteis. Em condomínios que ainda não têm caixa óptica NuvemNet, o prazo vai de 7 a 20 dias úteis, porque depende da autorização e da infraestrutura do prédio.',
  },
  {
    topic: 'Pagamentos',
    question: 'Quais formas de pagamento são aceitas?',
    answer:
      'Pix, boleto bancário, cartão de crédito (inclusive em recorrência) e débito automático em conta nos bancos parceiros. O Pix é o meio mais rápido para regularizar e liberar o acesso.',
  },
  {
    topic: 'Pagamentos',
    question: 'Como emito a segunda via da fatura?',
    answer:
      'No app NuvemNet em Faturas → Segunda via, na área do cliente do site ou pelo WhatsApp oficial. Se a fatura já venceu, use sempre a segunda via atualizada, que já calcula multa e juros do dia.',
  },
  {
    topic: 'Pagamentos',
    question: 'Paguei e continuo sem internet. O que aconteceu?',
    answer:
      'Depende do meio: boleto pode levar até 3 dias úteis para compensar. Pix normalmente libera em minutos. Se você pagou por Pix há mais de 2 horas e segue bloqueado, fale com o atendimento com o comprovante e solicite o desbloqueio.',
  },
  {
    topic: 'Contrato',
    question: 'Quero mudar de endereço. Como funciona?',
    answer:
      'Informe o novo CEP com número e complemento para consultarmos a viabilidade. Se houver cobertura, agendamos a desinstalação e a nova instalação. A taxa de mudança residencial é R$ 99,90, cobrada na fatura seguinte.',
  },
  {
    topic: 'Contrato',
    question: 'Como funciona o cancelamento?',
    answer:
      'Dentro da fidelidade de 12 meses existe multa proporcional ao benefício recebido, de até R$ 450,00 conforme o caso. Após a fidelidade não há multa. Em ambos, os equipamentos em comodato devem ser devolvidos em até 7 dias.',
  },
];
