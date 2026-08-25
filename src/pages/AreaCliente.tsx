import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Section, SectionHead } from '../components/Section';
import { Icon } from '../components/Icon';

const demoInvoices = [
  { period: 'Julho/2026', due: '10/07/2026', value: 'R$ 129,90', status: 'Em aberto', badge: 'badge--warning' },
  { period: 'Junho/2026', due: '10/06/2026', value: 'R$ 129,90', status: 'Pago', badge: 'badge--success' },
  { period: 'Maio/2026', due: '10/05/2026', value: 'R$ 149,80', status: 'Pago', badge: 'badge--success' },
];

export function AreaCliente() {
  const [logged, setLogged] = useState(false);
  const [taxId, setTaxId] = useState('');

  if (logged) {
    return (
      <Section>
        <SectionHead
          eyebrow="Área do cliente"
          title="Olá, Ana Beatriz"
          lead="Contrato ativo desde 12/03/2024 · Plano Nuvem 600 · Brooklin, São Paulo/SP"
        />

        <div className="grid grid--3" style={{ marginBottom: 'var(--space-6)' }}>
          <article className="card">
            <span className="card__icon">
              <Icon name="wifi" size={22} />
            </span>
            <p className="card__title">Conexão</p>
            <p className="card__text">
              Link óptico normal. Última medição por cabo: 612 Mbps de download e 305 Mbps de
              upload.
            </p>
          </article>
          <article className="card">
            <span className="card__icon">
              <Icon name="card" size={22} />
            </span>
            <p className="card__title">Próxima fatura</p>
            <p className="card__text">
              R$ 129,90 com vencimento em 10/07/2026. Meio preferencial: Pix.
            </p>
          </article>
          <article className="card">
            <span className="card__icon">
              <Icon name="tools" size={22} />
            </span>
            <p className="card__title">Chamados</p>
            <p className="card__text">
              Nenhum chamado aberto. Último atendimento: NN-2026-4471902, encerrado em 02/06/2026.
            </p>
          </article>
        </div>

        <h3>Minhas faturas</h3>
        <div className="stack">
          {demoInvoices.map((invoice) => (
            <div key={invoice.period} className="invoice">
              <div>
                <p style={{ margin: 0, fontWeight: 600 }}>{invoice.period}</p>
                <p className="muted" style={{ margin: 0 }}>
                  Vencimento em {invoice.due}
                </p>
              </div>
              <span className="invoice__value">{invoice.value}</span>
              <span className={`badge ${invoice.badge}`}>{invoice.status}</span>
              <button type="button" className="btn btn--secondary">
                Segunda via
              </button>
            </div>
          ))}
        </div>

        <div className="row" style={{ marginTop: 'var(--space-6)' }}>
          <Link to="/suporte" className="btn btn--primary">
            Abrir chamado técnico
          </Link>
          <button type="button" className="btn btn--secondary" onClick={() => setLogged(false)}>
            Sair da conta
          </button>
        </div>

        <p className="muted" style={{ marginTop: 'var(--space-6)' }}>
          Ambiente de demonstração com dados fictícios, criado para o piloto de atendimento digital.
        </p>
      </Section>
    );
  }

  return (
    <Section>
      <div className="login">
        <div>
          <span className="eyebrow">Área do cliente</span>
          <h1>Sua conta NuvemNet em um só lugar</h1>
          <p className="section__lead">
            Consulte faturas, emita segunda via, acompanhe chamados e troque a senha do Wi-Fi sem
            precisar falar com ninguém.
          </p>
          <ul className="list-check">
            <li>Segunda via com Pix, boleto e linha digitável atualizados.</li>
            <li>Histórico de pagamentos e comprovantes.</li>
            <li>Status do chamado técnico em tempo real.</li>
            <li>Troca de senha do Wi-Fi e nome da rede.</li>
            <li>Alteração do dia de vencimento, uma vez a cada 90 dias.</li>
          </ul>
        </div>

        <form
          className="login__card stack"
          onSubmit={(event) => {
            event.preventDefault();
            setLogged(true);
          }}
        >
          <div>
            <h3 style={{ marginBottom: 'var(--space-2)' }}>Entrar</h3>
            <p className="muted" style={{ margin: 0 }}>
              Demonstração: qualquer valor preenchido abre o painel de exemplo.
            </p>
          </div>

          <div className="field">
            <label className="field__label" htmlFor="documento">
              CPF ou CNPJ
            </label>
            <input
              id="documento"
              className="input"
              placeholder="000.000.000-00"
              value={taxId}
              onChange={(event) => setTaxId(event.target.value)}
              required
            />
          </div>

          <div className="field">
            <label className="field__label" htmlFor="senha">
              Senha
            </label>
            <input id="senha" type="password" className="input" placeholder="••••••••" required />
          </div>

          <button type="submit" className="btn btn--primary btn--lg btn--block">
            Acessar minha conta
          </button>

          <p className="field__hint" style={{ margin: 0 }}>
            Esqueceu a senha? Recupere pelo app NuvemNet ou fale com o atendimento pelo chat.
          </p>
        </form>
      </div>
    </Section>
  );
}
