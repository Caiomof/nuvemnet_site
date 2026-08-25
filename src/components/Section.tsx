import type { ReactNode } from 'react';

type SectionProps = {
  children: ReactNode;
  id?: string;
  variant?: 'default' | 'muted' | 'deep';
  tight?: boolean;
};

export function Section({ children, id, variant = 'default', tight = false }: SectionProps) {
  const variantClass =
    variant === 'muted' ? ' section--muted' : variant === 'deep' ? ' section--deep' : '';

  return (
    <section id={id} className={`section${tight ? ' section--tight' : ''}${variantClass}`}>
      <div className="container">{children}</div>
    </section>
  );
}

type SectionHeadProps = {
  eyebrow?: string;
  title: string;
  lead?: string;
  center?: boolean;
};

export function SectionHead({ eyebrow, title, lead, center = false }: SectionHeadProps) {
  return (
    <div className={`section__head${center ? ' section__head--center' : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {lead && <p className="section__lead">{lead}</p>}
    </div>
  );
}
