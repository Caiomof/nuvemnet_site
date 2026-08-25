import { Section, SectionHead } from '../components/Section';
import { PageHero } from '../components/PageHero';
import { CoverageChecker } from '../components/CoverageChecker';
import { CtaBanner } from '../components/CtaBanner';
import { coverage, statusLabel } from '../data/coverage';

const viabilitySteps = [
  'Você informa o CEP e o número do endereço, com complemento quando for apartamento.',
  'Consultamos o mapa de postes e caixas ópticas (CTO) que atendem aquela rua.',
  'O resultado sai como Disponível, Em expansão com previsão, ou Indisponível.',
  'Em condomínio vertical sem estrutura NuvemNet, pedimos autorização do síndico ou da administração para passar o cabo e instalar a CTO.',
  'Com a viabilidade positiva e o cadastro aprovado, agendamos a instalação em 3 a 7 dias úteis.',
];

const results = [
  {
    status: 'Disponível',
    badge: 'badge--success',
    text: 'Há estrutura pronta na rua ou no prédio. A instalação segue o prazo padrão de 3 a 7 dias úteis.',
  },
  {
    status: 'Em expansão',
    badge: 'badge--warning',
    text: 'A obra de rede está em andamento. Informamos a previsão em dias ou semanas e avisamos quando liberar.',
  },
  {
    status: 'Indisponível',
    badge: 'badge--danger',
    text: 'Ainda não temos rede na região e não garantimos data de chegada. Você pode entrar na lista de interesse.',
  },
];

export function Cobertura() {
  return (
    <>
      <PageHero
        eyebrow="Cobertura e viabilidade"
        title="Confira se a fibra NuvemNet atende seu endereço"
        lead="Atuamos na zona sul e leste de São Paulo capital e em cinco municípios do ABC Paulista. A confirmação final é sempre por CEP e número."
      />

      <Section tight>
        <div className="grid grid--2" style={{ gap: 'var(--space-7)', alignItems: 'start' }}>
          <CoverageChecker />
          <div>
            <SectionHead
              eyebrow="Como funciona"
              title="Os cinco passos da consulta de viabilidade"
            />
            <ol className="steps">
              {viabilitySteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <Section variant="muted">
        <SectionHead
          eyebrow="Mapa de atendimento"
          title="Cidades e bairros atendidos"
          lead="Bairros marcados como parciais têm cobertura em parte das ruas. Consulte sempre pelo CEP."
        />
        <div className="grid grid--2">
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
                {city.neighborhoods.map((neighborhood) => (
                  <span key={neighborhood} className="tag">
                    {neighborhood}
                  </span>
                ))}
              </div>
              {city.note && (
                <p className="muted" style={{ margin: 'var(--space-4) 0 0' }}>
                  {city.note}
                </p>
              )}
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead
          center
          eyebrow="Resultados possíveis"
          title="O que cada resposta da consulta significa"
        />
        <div className="grid grid--3">
          {results.map((result) => (
            <article key={result.status} className="card">
              <span className={`badge ${result.badge}`}>{result.status}</span>
              <p className="card__text" style={{ marginTop: 'var(--space-4)' }}>
                {result.text}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section tight>
        <CtaBanner
          title="Seu endereço ficou como indisponível?"
          text="Deixe seu contato com a gente. Registramos o interesse por rua e priorizamos as regiões com mais demanda nas próximas obras de rede."
          primaryLabel="Entrar na lista de interesse"
          primaryTo="/contato"
          secondaryLabel="Ver planos"
          secondaryTo="/planos"
        />
      </Section>
    </>
  );
}
