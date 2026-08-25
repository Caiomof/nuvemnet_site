import { Link } from 'react-router-dom';
import { Section } from '../components/Section';

export function NaoEncontrado() {
  return (
    <Section>
      <div style={{ maxWidth: '620px' }}>
        <span className="eyebrow">Erro 404</span>
        <h1>Essa página não existe</h1>
        <p className="section__lead">
          O endereço pode ter mudado ou o link está incompleto. Use os atalhos abaixo para continuar
          navegando.
        </p>
        <div className="row">
          <Link to="/" className="btn btn--primary">
            Voltar para a home
          </Link>
          <Link to="/ajuda" className="btn btn--secondary">
            Central de ajuda
          </Link>
        </div>
      </div>
    </Section>
  );
}
