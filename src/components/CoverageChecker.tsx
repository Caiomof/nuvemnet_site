import { useState } from 'react';
import { checkViability, statusLabel, type CoverageStatus } from '../data/coverage';
import { Icon } from './Icon';

function formatCep(value: string) {
  const digits = value.replace(/\D/g, '').slice(0, 8);
  if (digits.length <= 5) return digits;
  return `${digits.slice(0, 5)}-${digits.slice(5)}`;
}

type Result = { status: CoverageStatus; message: string };

export function CoverageChecker() {
  const [cep, setCep] = useState('');
  const [number, setNumber] = useState('');
  const [result, setResult] = useState<Result | null>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setResult(checkViability(cep));
  }

  return (
    <div className="coverage-box">
      <span className="eyebrow">Consulta de viabilidade</span>
      <h3>A fibra NuvemNet já chegou na sua rua?</h3>
      <p className="muted">
        Informe o CEP e o número do endereço. A consulta verifica se existe caixa óptica (CTO)
        disponível na região.
      </p>

      <form className="coverage-box__form" onSubmit={handleSubmit}>
        <div className="grid grid--2" style={{ gap: 'var(--space-4)' }}>
          <div className="field">
            <label className="field__label" htmlFor="cep">
              CEP
            </label>
            <input
              id="cep"
              className="input"
              inputMode="numeric"
              placeholder="04571-010"
              value={cep}
              onChange={(event) => setCep(formatCep(event.target.value))}
              required
            />
          </div>
          <div className="field">
            <label className="field__label" htmlFor="numero">
              Número
            </label>
            <input
              id="numero"
              className="input"
              inputMode="numeric"
              placeholder="105"
              value={number}
              onChange={(event) => setNumber(event.target.value)}
              required
            />
          </div>
        </div>

        <button type="submit" className="btn btn--primary btn--lg btn--block">
          Consultar cobertura
          <Icon name="arrow" size={18} />
        </button>

        <p className="field__hint">
          Demonstração local: CEPs iniciados em 0457, 0413, 0902 e 0955 retornam cobertura
          disponível.
        </p>
      </form>

      {result && (
        <div
          className={`coverage-result coverage-result--${result.status}`}
          role="status"
          style={{ marginTop: 'var(--space-4)' }}
        >
          <Icon name={result.status === 'disponivel' ? 'check' : 'pin'} size={20} />
          <span>
            <strong>{statusLabel[result.status]}</strong>
            {result.message}
          </span>
        </div>
      )}
    </div>
  );
}
