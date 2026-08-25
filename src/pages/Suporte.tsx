import { Link } from 'react-router-dom';
import { Section, SectionHead } from '../components/Section';
import { PageHero } from '../components/PageHero';
import { Icon, type IconName } from '../components/Icon';
import { diagnostics, ticketStatuses } from '../data/support';
import { channels } from '../data/company';

const installSteps = [
  'Você recebe por WhatsApp ou SMS a janela de agendamento, das 8h às 12h ou das 13h às 18h.',
  'É necessário alguém maior de 18 anos no local durante a visita.',
  'Libere uma tomada próxima ao ponto escolhido, em local arejado, longe de banheiro e área molhada.',
  'Em apartamento, confirme com a administração a autorização para passagem do cabo.',
  'O técnico se identifica com crachá e protocolo, instala o drop óptico, a ONT e o roteador.',
  'Ele mede a potência óptica, faz teste de velocidade por cabo e configura o Wi-Fi com você.',
  'Você confirma o aceite digital do termo de conclusão e o serviço é ativado.',
];

export function Suporte() {
  return (
    <>
      <PageHero
        eyebrow="Suporte técnico"
        title="Resolva agora ou fale com um especialista"
        lead="Os diagnósticos abaixo são os mesmos que nosso assistente virtual usa no WhatsApp. Na maioria dos casos eles resolvem sem precisar de visita técnica."
      />

      <Section tight>
        <SectionHead
          eyebrow="Diagnósticos guiados"
          title="Escolha o que está acontecendo"
          lead="Siga os passos na ordem. Se o problema continuar, indicamos exatamente quando abrir chamado."
        />
        <div className="grid grid--2">
          {diagnostics.map((item) => (
            <article key={item.id} className="card">
              <p className="card__title">{item.title}</p>
              <p className="card__text" style={{ marginBottom: 'var(--space-4)' }}>
                {item.summary}
              </p>
              <ol className="steps">
                {item.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              <p
                className="muted"
                style={{
                  marginTop: 'var(--space-4)',
                  marginBottom: 0,
                  paddingTop: 'var(--space-4)',
                  borderTop: '1px dashed var(--ink-200)',
                }}
              >
                <strong style={{ color: 'var(--brand-900)' }}>Quando escalar: </strong>
                {item.escalation}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section variant="muted">
        <div className="grid grid--2" style={{ gap: 'var(--space-7)', alignItems: 'start' }}>
          <div>
            <SectionHead
              eyebrow="Instalação"
              title="O que acontece no dia da instalação"
              lead="Com viabilidade e cadastro aprovados, o prazo padrão é de 3 a 7 dias úteis. Em condomínios sem estrutura NuvemNet, de 7 a 20 dias úteis."
            />
            <p className="muted">
              Visita frustrada por impedimento do cliente sem aviso de 2 horas de antecedência tem
              custo de R$ 80,00.
            </p>
          </div>
          <ol className="steps">
            {installSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </Section>

      <Section>
        <SectionHead
          eyebrow="Acompanhamento"
          title="Status do seu protocolo"
          lead="Todo atendimento gera um protocolo no formato NN-2026-0000000. A primeira resposta humana no WhatsApp sai em até 30 minutos, das 8h às 22h."
        />
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Status</th>
                <th>O que significa</th>
              </tr>
            </thead>
            <tbody>
              {ticketStatuses.map((row) => (
                <tr key={row.status}>
                  <td>
                    <strong>{row.status}</strong>
                  </td>
                  <td className="muted">{row.meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section variant="muted">
        <SectionHead center eyebrow="Canais" title="Onde falar com a NuvemNet" />
        <div className="grid grid--4">
          {channels.map((channel) => (
            <article key={channel.id} className="card card--hover">
              <span className="card__icon">
                <Icon name={channel.icon as IconName} size={22} />
              </span>
              <p className="card__title">{channel.title}</p>
              <p style={{ margin: '0 0 var(--space-2)', fontWeight: 600 }}>{channel.value}</p>
              <p className="card__text">{channel.description}</p>
              <p className="muted" style={{ marginTop: 'var(--space-3)', marginBottom: 0 }}>
                {channel.hours}
              </p>
            </article>
          ))}
        </div>
        <p className="text-center" style={{ marginTop: 'var(--space-6)' }}>
          <Link to="/contato" className="btn btn--primary">
            Abrir um atendimento
          </Link>
        </p>
      </Section>
    </>
  );
}
