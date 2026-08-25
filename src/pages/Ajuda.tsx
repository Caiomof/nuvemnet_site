import { useMemo, useState } from 'react';
import { Section, SectionHead } from '../components/Section';
import { PageHero } from '../components/PageHero';
import { Accordion } from '../components/Accordion';
import { CtaBanner } from '../components/CtaBanner';
import { faq, type FaqItem } from '../data/faq';

const topics = ['Todos', 'Planos', 'Cobertura', 'Suporte', 'Pagamentos', 'Contrato'] as const;

export function Ajuda() {
  const [topic, setTopic] = useState<(typeof topics)[number]>('Todos');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();

    return faq
      .filter((item: FaqItem) => topic === 'Todos' || item.topic === topic)
      .filter(
        (item) =>
          term.length === 0 ||
          item.question.toLowerCase().includes(term) ||
          item.answer.toLowerCase().includes(term),
      )
      .map((item, index) => ({
        id: `faq-${item.topic}-${index}`,
        topic: item.topic,
        question: item.question,
        answer: item.answer,
      }));
  }, [topic, search]);

  return (
    <>
      <PageHero
        eyebrow="Central de ajuda"
        title="Respostas rápidas para as dúvidas mais comuns"
        lead="Estas são as mesmas informações que o assistente virtual da NuvemNet consulta ao responder no chat do site e no WhatsApp."
      />

      <Section tight>
        <div className="field" style={{ maxWidth: '520px', marginBottom: 'var(--space-5)' }}>
          <label className="field__label" htmlFor="busca">
            Buscar na central de ajuda
          </label>
          <input
            id="busca"
            className="input"
            type="search"
            placeholder="Ex.: segunda via, Wi-Fi lento, fidelidade"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>

        <div className="chips">
          {topics.map((item) => (
            <button
              key={item}
              type="button"
              className={`chip${topic === item ? ' chip--active' : ''}`}
              onClick={() => setTopic(item)}
            >
              {item}
            </button>
          ))}
        </div>

        {filtered.length > 0 ? (
          <Accordion items={filtered} defaultOpenId={filtered[0]?.id} />
        ) : (
          <article className="card">
            <p className="card__title">Nada encontrado para essa busca</p>
            <p className="card__text">
              Tente outras palavras ou fale com o assistente virtual pelo chat do site. Se ele não
              souber responder, um atendente humano assume a conversa.
            </p>
          </article>
        )}
      </Section>

      <Section variant="muted" tight>
        <SectionHead
          center
          eyebrow="Segurança"
          title="O que a NuvemNet nunca pede em nenhum canal"
        />
        <div className="grid grid--3">
          <article className="card">
            <p className="card__title">Dados bancários completos</p>
            <p className="card__text">
              Nunca pedimos senha do banco, CVV, senha do cartão ou print de tela com dados
              bancários. A atualização de cartão acontece só no ambiente seguro do app.
            </p>
          </article>
          <article className="card">
            <p className="card__title">Pix para CPF de pessoa física</p>
            <p className="card__text">
              O recebedor do Pix é sempre a NuvemNet ou a instituição parceira exibida no QR Code da
              fatura oficial.
            </p>
          </article>
          <article className="card">
            <p className="card__title">Pagamento em dinheiro ao técnico</p>
            <p className="card__text">
              Técnicos de campo não recebem mensalidade. Qualquer cobrança presencial é golpe —
              confirme com a gente antes de pagar.
            </p>
          </article>
        </div>
      </Section>

      <Section tight>
        <CtaBanner
          title="Não achou sua resposta?"
          text="Abra o chat no canto da tela e converse com o assistente virtual da NuvemNet. Ele responde 24 horas e transfere para um humano quando o caso exige."
          primaryLabel="Ver canais de atendimento"
          primaryTo="/contato"
          secondaryLabel="Ir para o suporte técnico"
          secondaryTo="/suporte"
        />
      </Section>
    </>
  );
}
