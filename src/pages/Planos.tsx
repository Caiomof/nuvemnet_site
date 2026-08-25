import { Link } from 'react-router-dom';
import { Section, SectionHead } from '../components/Section';
import { PlanCard } from '../components/PlanCard';
import { CtaBanner } from '../components/CtaBanner';
import { PageHero } from '../components/PageHero';
import { addOns, contractRules, residentialPlans, serviceFees } from '../data/plans';

export function Planos() {
  return (
    <>
      <PageHero
        eyebrow="Planos residenciais"
        title="Velocidade de fibra com preço publicado"
        lead="Tabela vigente do piloto. Impostos já embutidos, sem franquia de dados e com roteador Wi-Fi 6 em comodato em todos os planos."
      />

      <Section tight>
        <div className="grid grid--3">
          {residentialPlans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </Section>

      <Section variant="muted" id="adicionais">
        <SectionHead
          eyebrow="Adicionais"
          title="Wi-Fi Mesh e IP fixo"
          lead="Os nós mesh ampliam a cobertura do Wi-Fi em casas maiores e estão disponíveis para os planos Nuvem 600 e 1 Giga."
        />
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Adicional</th>
                <th>Valor</th>
                <th>Observação</th>
              </tr>
            </thead>
            <tbody>
              {addOns.map((row) => (
                <tr key={row.item}>
                  <td>
                    <strong>{row.item}</strong>
                  </td>
                  <td>{row.price}</td>
                  <td className="muted">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <SectionHead
          eyebrow="Taxas e serviços"
          title="O que pode aparecer na sua fatura além da mensalidade"
          lead="Cobramos apenas o que está nesta tabela. Visita técnica por falha comprovada da nossa rede é sempre gratuita."
        />
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Serviço</th>
                <th>Valor</th>
                <th>Prazo</th>
              </tr>
            </thead>
            <tbody>
              {serviceFees.map((row) => (
                <tr key={row.item}>
                  <td>
                    <strong>{row.item}</strong>
                  </td>
                  <td>{row.price}</td>
                  <td className="muted">{row.term}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section variant="muted">
        <div className="grid grid--2" style={{ gap: 'var(--space-7)', alignItems: 'start' }}>
          <div>
            <SectionHead
              eyebrow="Contrato"
              title="Fidelidade, upgrade e cancelamento sem surpresa"
              lead="Regras que valem para todos os planos residenciais do piloto."
            />
            <Link to="/pagamentos" className="btn btn--secondary">
              Ver regras de cobrança
            </Link>
          </div>
          <ul className="list-check">
            {contractRules.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tight>
        <CtaBanner
          title="Ainda em dúvida sobre qual velocidade escolher?"
          text="Nosso assistente virtual ajuda a dimensionar o plano pelo número de pessoas e dispositivos na casa. Se preferir, um atendente humano assume a conversa."
          primaryLabel="Falar com a NuvemNet"
          primaryTo="/contato"
          secondaryLabel="Consultar cobertura"
          secondaryTo="/cobertura"
        />
      </Section>
    </>
  );
}
