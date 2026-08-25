import { useState } from 'react';
import { Section, SectionHead } from '../components/Section';
import { PageHero } from '../components/PageHero';
import { Icon, type IconName } from '../components/Icon';
import { channels, company } from '../data/company';

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const emptyForm: FormState = {
  name: '',
  email: '',
  phone: '',
  subject: 'Quero contratar um plano',
  message: '',
};

const subjects = [
  'Quero contratar um plano',
  'Consulta de viabilidade',
  'Suporte técnico',
  'Faturas e pagamentos',
  'Proposta Business (CNPJ)',
  'Outro assunto',
];

export function Contato() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [sent, setSent] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((previous) => ({ ...previous, [key]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Site de demonstração: não há backend. O protocolo abaixo é apenas ilustrativo.
    setSent(true);
    setForm(emptyForm);
  }

  const protocol = `NN-2026-${String(Math.floor(Math.random() * 9_000_000) + 1_000_000)}`;

  return (
    <>
      <PageHero
        eyebrow="Fale com a NuvemNet"
        title="Atendimento por chat, WhatsApp, telefone e e-mail"
        lead="O assistente virtual responde 24 horas. Atendentes humanos ficam disponíveis das 8h às 22h, todos os dias."
      />

      <Section tight>
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
      </Section>

      <Section variant="muted">
        <div className="grid grid--2" style={{ gap: 'var(--space-7)', alignItems: 'start' }}>
          <div>
            <SectionHead
              eyebrow="Formulário"
              title="Prefere que a gente entre em contato?"
              lead="Conte o que você precisa que retornamos pelo canal da sua preferência. Para urgências, o chat e o WhatsApp são mais rápidos."
            />

            <div className="stack">
              <div>
                <p className="field__label">Sede administrativa</p>
                <p className="muted" style={{ margin: 0 }}>
                  {company.address}
                </p>
              </div>
              <div>
                <p className="field__label">E-mails por assunto</p>
                <ul className="list-check">
                  <li>Comercial: {company.emails.contact}</li>
                  <li>Suporte técnico: {company.emails.support}</li>
                  <li>Financeiro: {company.emails.finance}</li>
                  <li>Ouvidoria: {company.emails.ombudsman}</li>
                </ul>
              </div>
            </div>
          </div>

          <form className="login__card stack" onSubmit={handleSubmit}>
            {sent && (
              <div className="coverage-result coverage-result--disponivel" role="status">
                <Icon name="check" size={20} />
                <span>
                  <strong>Recebemos seu contato</strong>
                  Protocolo {protocol}. Este site é uma demonstração, então nenhum dado foi enviado
                  de verdade.
                </span>
              </div>
            )}

            <div className="field">
              <label className="field__label" htmlFor="nome">
                Nome completo
              </label>
              <input
                id="nome"
                className="input"
                value={form.name}
                onChange={(event) => update('name', event.target.value)}
                required
              />
            </div>

            <div className="grid grid--2" style={{ gap: 'var(--space-4)' }}>
              <div className="field">
                <label className="field__label" htmlFor="email">
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  className="input"
                  value={form.email}
                  onChange={(event) => update('email', event.target.value)}
                  required
                />
              </div>
              <div className="field">
                <label className="field__label" htmlFor="telefone">
                  Celular com WhatsApp
                </label>
                <input
                  id="telefone"
                  className="input"
                  placeholder="(11) 90000-0000"
                  value={form.phone}
                  onChange={(event) => update('phone', event.target.value)}
                  required
                />
              </div>
            </div>

            <div className="field">
              <label className="field__label" htmlFor="assunto">
                Assunto
              </label>
              <select
                id="assunto"
                className="select"
                value={form.subject}
                onChange={(event) => update('subject', event.target.value)}
              >
                {subjects.map((subject) => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
            </div>

            <div className="field">
              <label className="field__label" htmlFor="mensagem">
                Mensagem
              </label>
              <textarea
                id="mensagem"
                className="textarea"
                placeholder="Descreva sua necessidade. Se for viabilidade, informe CEP e número."
                value={form.message}
                onChange={(event) => update('message', event.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn--primary btn--lg btn--block">
              Enviar mensagem
            </button>

            <p className="field__hint" style={{ margin: 0 }}>
              Não envie senha de banco, número completo de cartão ou CVV. Tratamos dados pessoais
              conforme a LGPD.
            </p>
          </form>
        </div>
      </Section>
    </>
  );
}
