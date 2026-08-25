import { useState } from 'react';
import { Icon } from './Icon';

export type AccordionEntry = {
  id: string;
  topic?: string;
  question: string;
  answer: string;
};

type AccordionProps = {
  items: AccordionEntry[];
  defaultOpenId?: string;
};

export function Accordion({ items, defaultOpenId }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? null);

  return (
    <div className="accordion">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className={`accordion__item${isOpen ? ' accordion__item--open' : ''}`}>
            <button
              type="button"
              className="accordion__trigger"
              aria-expanded={isOpen}
              aria-controls={`panel-${item.id}`}
              onClick={() => setOpenId(isOpen ? null : item.id)}
            >
              <span>{item.question}</span>
              <span className="accordion__icon">
                <Icon name="chevron" size={20} />
              </span>
            </button>
            {isOpen && (
              <div className="accordion__panel" id={`panel-${item.id}`}>
                {item.topic && <span className="accordion__topic">{item.topic}</span>}
                <p style={{ margin: 0 }}>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
