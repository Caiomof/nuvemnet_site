import { Section, SectionHead } from '../components/Section';
import { PageHero } from '../components/PageHero';
import { PlanCard } from '../components/PlanCard';
import { CtaBanner } from '../components/CtaBanner';
import { Icon, type IconName } from '../components/Icon';
import { businessPlans } from '../data/plans';

const differentials: { icon: IconName; title: string; text: string }[] = [
  {
    icon: 'building',
    title: 'Fila de atendimento separada',
    text: 'Após a identificação do CPF ou CNPJ, o contato entra na fila Business, com prioridade sobre o residencial.',
  },
  {
    icon: 'shield',
    title: 'IP fixo para acesso remoto',
    text: 'Incluso no Business 1 Giga e opcional no Business 600 por R$ 39,90/mês. Necessário para VPN, servidores e câmeras acessadas de fora.',
  },
  {
    icon: 'headset',
    title: 'Horário estendido',
    text: 'Suporte prioritário de segunda a sexta das 8h às 20h e sábado das 8h às 14h, pelo mesmo WhatsApp.',
  },
  {
    icon: 'card',
    title: 'Documentação para CNPJ',
    text: 'Boleto PJ, emissão de documentos fiscais e contrato no nome da empresa.',
  },
];

const useCases = [
  'Escritórios com videoconferência simultânea e telefonia em nuvem.',
  'Consultórios e clínicas que enviam exames e imagens pesadas.',
  'Lojas com PDV, maquininhas e Wi-Fi para clientes em redes separadas.',
  'MEIs e profissionais em home office que precisam de upload alto e IP fixo.',
  'Câmeras IP com acesso remoto e gravação em nuvem.',
];

export function Business() {
  return (
    <>
      <PageHero
        eyebrow="NuvemNet Business"
        title="Fibra para quem não pode parar de trabalhar"
        lead="Planos para MEI, escritórios e pequenos comércios, com fila de suporte dedicada, SLA comercial diferenciado e opção de IP fixo."
      />

      <Section tight>
        <div className="grid grid--2">
          {businessPlans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} ctaLabel="Falar com consultor" />
          ))}
        </div>
        <p className="muted" style={{ marginTop: 'var(--space-5)' }}>
          Valores mensais do piloto. A contratação PJ exige CNPJ, contrato social ou documento do
          responsável, CPF do responsável legal e comprovante de endereço comercial.
        </p>
      </Section>

      <Section variant="muted">
        <SectionHead
          center
          eyebrow="Diferenciais"
          title="O que muda em relação ao plano residencial"
        />
        <div className="grid grid--4">
          {differentials.map((item) => (
            <article key={item.title} className="card card--hover">
              <span className="card__icon">
                <Icon name={item.icon} size={22} />
              </span>
              <p className="card__title">{item.title}</p>
              <p className="card__text">{item.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid grid--2" style={{ gap: 'var(--space-7)', alignItems: 'start' }}>
          <div>
            <SectionHead
              eyebrow="Casos de uso"
              title="Feito para operações pequenas e exigentes"
              lead="Se o seu negócio depende de upload alto ou de acesso remoto, o plano Business evita as limitações do CGNAT usado em parte da rede residencial."
            />
          </div>
          <ul className="list-check">
            {useCases.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tight>
        <CtaBanner
          title="Quer uma proposta para o seu CNPJ?"
          text="Conte quantos pontos de rede, câmeras e usuários simultâneos você tem. Nosso time monta o desenho e informa a viabilidade no endereço comercial."
          primaryLabel="Solicitar proposta"
          primaryTo="/contato"
          secondaryLabel="Ver cobertura"
          secondaryTo="/cobertura"
        />
      </Section>
    </>
  );
}
