import { Link } from 'react-router-dom';

type CtaBannerProps = {
  title?: string;
  text?: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
};

export function CtaBanner({
  title = 'Pronto para trocar sua internet?',
  text = 'Consulte a cobertura no seu endereço e instale em 3 a 7 dias úteis, com roteador Wi-Fi 6 em comodato e suporte humano quando você precisar.',
  primaryLabel = 'Consultar cobertura',
  primaryTo = '/cobertura',
  secondaryLabel = 'Ver planos',
  secondaryTo = '/planos',
}: CtaBannerProps) {
  return (
    <div className="cta">
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="row">
        <Link to={primaryTo} className="btn btn--secondary btn--lg">
          {primaryLabel}
        </Link>
        <Link to={secondaryTo} className="btn btn--ghost btn--lg">
          {secondaryLabel}
        </Link>
      </div>
    </div>
  );
}
