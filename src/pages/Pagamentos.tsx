import { Link } from 'react-router-dom';
import { Section, SectionHead } from '../components/Section';
import { PageHero } from '../components/PageHero';
import { CtaBanner } from '../components/CtaBanner';
import { lateTimeline, paymentMethods } from '../data/support';

const dueDates = ['Dia 5', 'Dia 10', 'Dia 15', 'Dia 20'];

const invoiceItems = [
  { item: 'Mensalidade do plano', note: 'Ex.: Nuvem 600 por R$ 129,90' },
  { item: 'Add-on Wi-Fi Mesh', note: 'R$ 19,90 por nó, por mês' },
  { item: 'IP fixo (Business 600)', note: 'R$ 39,90 por mês quando contratado' },
  { item: 'Visita técnica onerosa', note: 'R$ 120,00 quando o problema é no ambiente do cliente' },
  { item: 'Visita frustrada', note: 'R$ 80,00 quando aplicável' },
  { item: 'Taxa de mudança de endereço', note: 'R$ 99,90 residencial' },
  { item: 'Multa e juros por atraso', note: '2% de multa e 1% de juros ao mês, pro rata die' },
  { item: 'Descontos promocionais', note: 'Aparecem como item negativo enquanto vigentes' },
];

export function Pagamentos() {
  return (
    <>
      <PageHero
        eyebrow="Faturas e pagamentos"
        title="Como pagar, quando vence e o que fazer se atrasar"
        lead="Aceitamos Pix, boleto, cartão de crédito e débito automático em conta. O Pix é o meio mais rápido para regularizar e liberar o acesso."
      />

      <Section tight>
        <SectionHead
          eyebrow="Formas de pagamento"
          title="Escolha o meio e siga o passo a passo"
        />
        <div className="grid grid--2">
          {paymentMethods.map((method) => (
            <article key={method.id} className="card">
              <div
                className="row"
                style={{ justifyContent: 'space-between', marginBottom: 'var(--space-3)' }}
              >
                <p className="card__title" style={{ margin: 0 }}>
                  {method.name}
                </p>
                <span className="badge badge--brand">{method.speed}</span>
              </div>
              <p className="card__text" style={{ marginBottom: 'var(--space-4)' }}>
                {method.best}
              </p>
              <ol className="steps">
                {method.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </article>
          ))}
        </div>
        <p className="muted" style={{ marginTop: 'var(--space-5)' }}>
          A NuvemNet nunca pede CVV, senha do banco ou foto do cartão por WhatsApp. Links oficiais
          sempre contêm nuvemnet.com.br ou vêm do app.
        </p>
      </Section>

      <Section variant="muted">
        <div className="grid grid--2" style={{ gap: 'var(--space-7)', alignItems: 'start' }}>
          <div>
            <SectionHead
              eyebrow="Ciclo de faturamento"
              title="Vencimento e emissão da fatura"
              lead="No ato da contratação você escolhe o dia de vencimento. A fatura é gerada cerca de 5 dias antes e enviada por e-mail e app."
            />
            <div className="tags" style={{ marginBottom: 'var(--space-5)' }}>
              {dueDates.map((date) => (
                <span key={date} className="badge badge--brand">
                  {date}
                </span>
              ))}
            </div>
            <ul className="list-check">
              <li>A troca de vencimento é gratuita, limitada a uma alteração a cada 90 dias.</li>
              <li>
                A primeira fatura pode vir com pró-rata dos dias desde a ativação até o vencimento.
              </li>
              <li>
                A segunda via não tem custo e sai no app em Faturas → Segunda via, ou na área do
                cliente.
              </li>
              <li>Fatura vencida: use sempre a segunda via atualizada, com multa e juros do dia.</li>
            </ul>
          </div>

          <div>
            <SectionHead eyebrow="Composição" title="O que aparece na fatura" />
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Observação</th>
                  </tr>
                </thead>
                <tbody>
                  {invoiceItems.map((row) => (
                    <tr key={row.item}>
                      <td>
                        <strong>{row.item}</strong>
                      </td>
                      <td className="muted">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHead
          eyebrow="Atraso e bloqueio"
          title="A linha do tempo da cobrança"
          lead="Os prazos podem variar conforme a análise de crédito. Esta é a referência que usamos para explicar o processo."
        />
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Tempo após o vencimento</th>
                <th>O que acontece</th>
              </tr>
            </thead>
            <tbody>
              {lateTimeline.map((row) => (
                <tr key={row.when}>
                  <td>
                    <strong>{row.when}</strong>
                  </td>
                  <td className="muted">{row.what}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid grid--2" style={{ marginTop: 'var(--space-6)' }}>
          <article className="card">
            <p className="card__title">Como voltar a navegar depois de pagar</p>
            <ol className="steps">
              <li>Pague a fatura em atraso — o Pix tem a baixa mais rápida.</li>
              <li>Pix libera em minutos; cartão aprovado é rápido; boleto leva até 3 dias úteis.</li>
              <li>
                Se o Pix foi pago há mais de 2 horas e você segue bloqueado, envie o comprovante ao
                atendimento e peça o desbloqueio.
              </li>
              <li>Depois do desbloqueio, reinicie o roteador.</li>
            </ol>
          </article>
          <article className="card">
            <p className="card__title">Acordo, parcelamento e contestação</p>
            <ul className="list-check">
              <li>Acordo de débitos é feito por atendente humano, não pelo assistente virtual.</li>
              <li>Débitos acumulados podem ser divididos em até 3x no cartão, sujeito à análise.</li>
              <li>Contestação de valor é analisada em até 5 dias úteis.</li>
              <li>
                Se procedente, o estorno vira crédito em fatura futura ou devolução via Pix ao
                titular.
              </li>
            </ul>
            <Link to="/contato" className="btn btn--secondary" style={{ marginTop: 'var(--space-4)' }}>
              Falar com o financeiro
            </Link>
          </article>
        </div>
      </Section>

      <Section tight>
        <CtaBanner
          title="Precisa da segunda via agora?"
          text="O assistente virtual do site e do WhatsApp explica o caminho no app e, se necessário, transfere para a fila financeira com um atendente humano."
          primaryLabel="Abrir atendimento"
          primaryTo="/contato"
          secondaryLabel="Ir para a área do cliente"
          secondaryTo="/area-do-cliente"
        />
      </Section>
    </>
  );
}
