export type Diagnostic = {
  id: string;
  title: string;
  summary: string;
  steps: string[];
  escalation: string;
};

export const diagnostics: Diagnostic[] = [
  {
    id: 'sem-internet',
    title: 'Estou sem internet',
    summary: 'Checklist para separar falha de rede, bloqueio por fatura e problema no equipamento.',
    steps: [
      'Confirme se o roteador está ligado e com os LEDs acesos.',
      'Olhe o LED de fibra/ONT: verde fixo indica link óptico normal; vermelho, apagado ou piscando fora do padrão indica possível rompimento.',
      'Verifique se a fatura está em dia — atraso pode reduzir a velocidade ou bloquear a navegação.',
      'Desligue o equipamento da tomada por 30 segundos, religue e aguarde 3 minutos.',
      'Teste em outro dispositivo para descartar problema em um aparelho específico.',
      'Confira se há aviso de manutenção programada na área do cliente.',
    ],
    escalation:
      'Sem link óptico após o reinício e com a fatura em dia, abrimos visita técnica corretiva sem custo.',
  },
  {
    id: 'wifi-lento',
    title: 'Wi-Fi lento ou fraco em algum ambiente',
    summary: 'Na maioria dos casos a fibra está normal e o problema é a propagação do Wi-Fi.',
    steps: [
      'Faça um teste por cabo, com o computador ligado direto no roteador NuvemNet.',
      'Se o cabo está bom e o Wi-Fi ruim, o problema é local (distância, paredes, interferência).',
      'Reinicie o roteador: 30 segundos desligado e 3 minutos para estabilizar.',
      'Aproxime o celular do roteador e repita o teste.',
      'Desligue VPN no dispositivo, se houver.',
      'Prefira a rede 5 GHz perto do roteador e 2,4 GHz para longas distâncias.',
      'Verifique downloads simultâneos em TVs, consoles e backups automáticos.',
    ],
    escalation:
      'Se o cabo também estiver lento em horários diferentes, abrimos chamado. Para casas grandes, avaliamos o add-on Wi-Fi Mesh.',
  },
  {
    id: 'senha-wifi',
    title: 'Quero trocar a senha do Wi-Fi',
    summary: 'Você mesmo altera pelo app ou pelo painel local do roteador.',
    steps: [
      'Abra o app NuvemNet e vá em Minha rede → Wi-Fi.',
      'Ou acesse http://192.168.1.1 conectado à rede NuvemNet.',
      'Defina uma senha com no mínimo 8 caracteres, misturando letras e números.',
      'Reconecte todos os aparelhos usando a nova senha.',
    ],
    escalation:
      'Se você não conseguir acessar o painel, um atendente valida sua identidade e ajuda na alteração.',
  },
  {
    id: 'bloqueio-fatura',
    title: 'Acho que estou bloqueado por fatura',
    summary: 'No bloqueio por inadimplência o link existe, mas a navegação fica filtrada.',
    steps: [
      'Observe os sinais: LEDs normais, mas sem navegação, ou redirecionamento para a página de regularização.',
      'Confira no app se há fatura marcada como Em atraso.',
      'Pague a fatura em aberto — o Pix tem a baixa mais rápida.',
      'Aguarde a compensação: Pix em minutos, cartão aprovado rapidamente, boleto em até 3 dias úteis.',
      'Após o desbloqueio, reinicie o roteador.',
    ],
    escalation:
      'Pix pago há mais de 2 horas e ainda bloqueado: envie o comprovante ao atendimento e solicite baixa manual.',
  },
];

export const ticketStatuses = [
  { status: 'Aberto', meaning: 'Registrado e aguardando fila de atendimento.' },
  { status: 'Em análise', meaning: 'Equipe de suporte remoto atuando no caso.' },
  { status: 'Aguardando cliente', meaning: 'Precisamos de uma resposta ou teste da sua parte.' },
  { status: 'Visita agendada', meaning: 'Técnico com janela de atendimento marcada.' },
  { status: 'Em deslocamento', meaning: 'Técnico a caminho do endereço.' },
  { status: 'Resolvido', meaning: 'Solução aplicada e validada.' },
  { status: 'Encerrado', meaning: 'Chamado finalizado.' },
  { status: 'Reaberto', meaning: 'Mesmo problema retornou dentro de 7 dias.' },
];

export const paymentMethods = [
  {
    id: 'pix',
    name: 'Pix',
    speed: 'Confirmação em minutos',
    best: 'Melhor opção para desbloquear rápido',
    steps: [
      'Abra o app NuvemNet ou o link da fatura.',
      'Toque em Faturas e selecione a fatura em aberto.',
      'Escolha Pagar com Pix.',
      'Escaneie o QR Code no app do banco ou copie o Pix Copia e Cola.',
      'Confira o recebedor e o valor antes de confirmar.',
    ],
  },
  {
    id: 'boleto',
    name: 'Boleto bancário',
    speed: 'Compensação em até 3 dias úteis',
    best: 'Para quem prefere pagar no banco ou lotérica',
    steps: [
      'Acesse Faturas → Em aberto → Boleto.',
      'Copie a linha digitável ou baixe o PDF.',
      'Pague pelo internet banking, app do banco, lotérica ou caixa eletrônico.',
      'Se a fatura já venceu, gere a segunda via atualizada antes de pagar.',
    ],
  },
  {
    id: 'cartao',
    name: 'Cartão de crédito',
    speed: 'Aprovação em minutos',
    best: 'Ideal para cobrança recorrente automática',
    steps: [
      'No app, vá em Pagamentos → Formas de pagamento.',
      'Toque em Adicionar cartão e preencha no ambiente seguro.',
      'Defina o cartão como forma principal.',
      'A cobrança passa a ser tentada automaticamente a cada ciclo.',
    ],
  },
  {
    id: 'debito',
    name: 'Débito automático',
    speed: 'Cobrado no vencimento ou dia útil seguinte',
    best: 'Para quem quer automação pelo banco',
    steps: [
      'Solicite no app ou com um atendente.',
      'Informe banco, agência e conta do titular do contrato.',
      'Assine o termo de autorização.',
      'A estabilização pode levar até 2 ciclos — acompanhe a fatura nesse período.',
    ],
  },
];

export const lateTimeline = [
  { when: 'No vencimento', what: 'A fatura vence. Pagando no dia, não há multa.' },
  { when: '1 a 3 dias', what: 'Lembretes por push, WhatsApp, e-mail e SMS.' },
  { when: '4 a 5 dias', what: 'Pode começar a navegação reduzida em parte dos casos.' },
  { when: '6 a 15 dias', what: 'Bloqueio parcial ou total progressivo.' },
  { when: 'Após 15 dias', what: 'Bloqueio total do acesso à internet.' },
  { when: '45 a 60 dias', what: 'Risco de cancelamento por inadimplência e cobrança do débito.' },
];
