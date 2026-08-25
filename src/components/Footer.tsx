import { Link } from 'react-router-dom';
import { company } from '../data/company';
import { Icon } from './Icon';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <Link to="/" className="logo footer__logo">
              <span className="logo__mark">
                <Icon name="cloud" size={22} />
              </span>
              <span className="logo__text">
                NuvemNet
                <small>Fibra óptica</small>
              </span>
            </Link>
            <p>
              Provedor regional de fibra óptica na Grande São Paulo e no ABC Paulista desde{' '}
              {company.foundedIn}. Internet residencial e small business com preço transparente.
            </p>
            <p className="muted">{company.address}</p>
          </div>

          <div>
            <p className="footer__title">Produtos</p>
            <ul className="footer__list">
              <li>
                <Link to="/planos">Planos residenciais</Link>
              </li>
              <li>
                <Link to="/business">Planos Business</Link>
              </li>
              <li>
                <Link to="/planos#adicionais">Wi-Fi Mesh</Link>
              </li>
              <li>
                <Link to="/cobertura">Consultar cobertura</Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="footer__title">Ajuda</p>
            <ul className="footer__list">
              <li>
                <Link to="/suporte">Suporte técnico</Link>
              </li>
              <li>
                <Link to="/pagamentos">Faturas e pagamentos</Link>
              </li>
              <li>
                <Link to="/ajuda">Perguntas frequentes</Link>
              </li>
              <li>
                <Link to="/area-do-cliente">Área do cliente</Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="footer__title">Atendimento</p>
            <ul className="footer__list">
              <li>WhatsApp {company.phones.whatsapp}</li>
              <li>{company.phones.callCenter}</li>
              <li>
                <a href={`mailto:${company.emails.support}`}>{company.emails.support}</a>
              </li>
              <li>
                <a href={`mailto:${company.emails.ombudsman}`}>Ouvidoria</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            {company.legalName} · CNPJ {company.cnpj} · Site fictício para demonstração
          </span>
          <span>Conteúdo ilustrativo do piloto Amazon Connect</span>
        </div>
      </div>
    </footer>
  );
}
