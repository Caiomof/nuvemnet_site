import { Link } from 'react-router-dom';
import type { Plan } from '../data/plans';

const currency = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

type PlanCardProps = {
  plan: Plan;
  ctaLabel?: string;
  ctaTo?: string;
};

export function PlanCard({ plan, ctaLabel = 'Quero este plano', ctaTo = '/contato' }: PlanCardProps) {
  const isGiga = plan.download >= 1000;
  const speedValue = isGiga ? '1' : String(plan.download);
  const speedUnit = isGiga ? 'Giga' : 'Mega';

  return (
    <article className={`plan${plan.highlight ? ' plan--highlight' : ''}`}>
      {plan.badge && <span className="plan__badge">{plan.badge}</span>}

      <p className="plan__name">{plan.name}</p>

      <div className="plan__speed">
        <strong>{speedValue}</strong>
        <span>{speedUnit} de download</span>
      </div>

      <div className="plan__price">
        <em>Mensalidade</em>
        <strong>{currency.format(plan.price)}</strong>
        <small> /mês</small>
      </div>

      <ul className="list-check plan__features">
        {plan.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>

      <Link
        to={ctaTo}
        className={`btn btn--block ${plan.highlight ? 'btn--primary' : 'btn--secondary'}`}
      >
        {ctaLabel}
      </Link>
    </article>
  );
}
