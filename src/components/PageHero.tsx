import type { ReactNode } from 'react';

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  lead?: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, lead, children }: PageHeroProps) {
  return (
    <section className="hero" style={{ padding: 'var(--space-8) 0 var(--space-7)' }}>
      <div className="container" style={{ position: 'relative', maxWidth: '820px' }}>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        {lead && <p className="hero__lead">{lead}</p>}
        {children}
      </div>
    </section>
  );
}
