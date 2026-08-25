import { Link } from 'react-router-dom';
import { Section, SectionHead } from '../components/Section';
import { CoverageChecker } from '../components/CoverageChecker';
import { PlanCard } from '../components/PlanCard';
import { Accordion } from '../components/Accordion';
import { CtaBanner } from '../components/CtaBanner';
import { Icon, type IconName } from '../components/Icon';
import { residentialPlans } from '../data/plans';
import { coverage, statusLabel } from '../data/coverage';
import { faq } from '../data/faq';
import { stats } from '../data/company';

const benefits: { icon: IconName; title: string; text: string }[] = [
  {
    icon: 'bolt',
    title: 'Fibra até dentro de casa',
    text: 'Rede FTTH própria de última milha, com upload alto e latência baixa para chamadas e jogos.',
  },
  {
    icon: 'wifi',
    title: 'Roteador Wi-Fi 6 incluso',
    text: 'Equipamento em comodato, configurado pelo técnico na instalação e com firmware atualizado remotamente.',
  },
  {
    icon: 'headset',
    title: 'Suporte que resolve',
    text: 'Assistente virtual 24h no WhatsApp e atendentes humanos das 8h às 22h, todos os dias.',
  },
  {
    icon: 'shield',
    title: 'Preço sem pegadinha',
    text: 'Sem franquia de dados, impostos já embutidos na tabela e regras de fidelidade explicadas antes da assinatura.',
  },
];

const journey = [
  {
    title: 'Consulte a viabilidade',
    text: 'Informe CEP e número. Verificamos se já existe caixa óptica NuvemNet na sua rua ou no seu prédio.',
  },
  {
    title: 'Escolha o plano',
    text: 'De 300 Mega a 1 Giga, com ou sem fidelidade. Envie CPF, documento com foto e comprovante de endereço.',
  },
  {
    title: 'Agende a instalação',
    text: 'Janelas de 8h às 12h ou 13h às 18h, normalmente em 3 a 7 dias úteis após a aprovação cadastral.',
  },
  {
    title: 'Ative e teste',
    text: 'O técnico instala a ONT e o roteador, mede a potência óptica e faz o teste de velocidade por cabo com você.',
  },
];

export function Home() {
  const featuredFaq = faq.slice(0, 5).map((item, index) => ({
    id: `home-faq-${index}`,
    topic: item.topic,
    question: item.question,
    answer: item.answer,
  }));

  return (
    <>
      <section className="hero">
        <div className="container hero__inner">
          <div>
            <span className="hero__pill">
              <span>Novo</span> Wi-Fi 6 em comodato em todos os planos
            </span>
            <h1>Internet de fibra óptica estável na Grande São Paulo e no ABC</h1>
            <p className="hero__lead">
              Planos de 300 Mega a 1 Giga, instalação em poucos dias úteis e atendimento humano
              quando o assistente virtual não resolve. Sem franquia de dados, sem letra miúda.
            </p>
            <div className="row">
              <Link to="/planos" className="btn btn--primary btn--lg">
                Ver planos e preços
                <Icon name="arrow" size={18} />
              </Link>
              <Link to="/cobertura" className="btn btn--ghost btn--lg">
                Onde temos cobertura
              </Link>
            </div>

            <div className="hero__stats">
              {stats.map((stat) => (
                <div key={stat.label} className="hero__stat">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <CoverageChecker />
        </div>
      </section>

      <Section>
        <SectionHead
          center
          eyebrow="Por que NuvemNet"
          title="Uma operadora regional com cara de gente"
          lead="Nascemos em 2016 para levar fibra a bairros onde as grandes operadoras demoravam a chegar. Hoje operamos rede própria em seis municípios."
        />
        <div className="grid grid--4">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="card card--hover">
              <span className="card__icon">
                <Icon name={benefit.icon} size={22} />
              </span>
              <p className="card__title">{benefit.title}</p>
              <p className="card__text">{benefit.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section variant="muted" id="planos">
        <SectionHead
          center
          eyebrow="Planos residenciais"
          title="Escolha a velocidade da sua casa"
          lead="Todos os planos incluem roteador Wi-Fi 6 em comodato, instalação gratuita na promoção padrão e fidelidade de 12 meses."
        />
        <div className="grid grid--3">
          {residentialPlans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
        <p className="text-center" style={{ marginTop: 'var(--space-6)' }}>
          <Link to="/planos" className="btn btn--secondary">
            Comparar planos, taxas e adicionais
          </Link>
        </p>
      </Section>

      <Section>
        <div className="grid grid--2" style={{ alignItems: 'start', gap: 'var(--space-7)' }}>
          <div>
            <SectionHead
              eyebrow="Como funciona"
              title="Da consulta de CEP até o primeiro teste de velocidade"
              lead="Um processo curto, com prazos que a gente cumpre e comunica pelo WhatsApp em cada etapa."
            />
            <Link to="/contato" className="btn btn--primary">
              Quero contratar
              <Icon name="arrow" size={18} />
            </Link>
          </div>
          <ol className="steps">
            {journey.map((step) => (
              <li key={step.title}>
                <strong style={{ color: 'var(--brand-900)' }}>{step.title}</strong>
                <br />
                {step.text}
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section variant="muted">
        <SectionHead
          eyebrow="Cobertura"
          title="Seis municípios atendidos, bairro por bairro"
          lead="A disponibilidade depende da estrutura na rua e, em prédios, da autorização do condomínio."
        />
        <div className="grid grid--3">
          {coverage.map((city) => (
            <article key={city.city} className="city-card">
              <div className="city-card__head">
                <h3>{city.city}</h3>
                <span
                  className={`badge ${
                    city.status === 'disponivel' ? 'badge--success' : 'badge--warning'
                  }`}
                >
                  {statusLabel[city.status]}
                </span>
              </div>
              <div className="tags">
                {city.neighborhoods.slice(0, 5).map((neighborhood) => (
                  <span key={neighborhood} className="tag">
                    {neighborhood}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <p className="text-center" style={{ marginTop: 'var(--space-6)' }}>
          <Link to="/cobertura" className="btn btn--secondary">
            Ver mapa completo de cobertura
          </Link>
        </p>
      </Section>

      <Section>
        <div className="grid grid--2" style={{ gap: 'var(--space-7)', alignItems: 'start' }}>
          <div>
            <SectionHead
              eyebrow="Dúvidas frequentes"
              title="As perguntas que mais chegam no nosso atendimento"
              lead="Se a sua dúvida não estiver aqui, o assistente virtual responde no chat ou no WhatsApp em segundos."
            />
            <Link to="/ajuda" className="btn btn--secondary">
              Central de ajuda completa
            </Link>
          </div>
          <Accordion items={featuredFaq} defaultOpenId="home-faq-0" />
        </div>
      </Section>

      <Section tight>
        <CtaBanner />
      </Section>
    </>
  );
}
