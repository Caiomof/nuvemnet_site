import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Planos } from './pages/Planos';
import { Business } from './pages/Business';
import { Cobertura } from './pages/Cobertura';
import { Suporte } from './pages/Suporte';
import { Pagamentos } from './pages/Pagamentos';
import { Ajuda } from './pages/Ajuda';
import { Contato } from './pages/Contato';
import { AreaCliente } from './pages/AreaCliente';
import { NaoEncontrado } from './pages/NaoEncontrado';

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/planos" element={<Planos />} />
        <Route path="/business" element={<Business />} />
        <Route path="/cobertura" element={<Cobertura />} />
        <Route path="/suporte" element={<Suporte />} />
        <Route path="/pagamentos" element={<Pagamentos />} />
        <Route path="/ajuda" element={<Ajuda />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/area-do-cliente" element={<AreaCliente />} />
        <Route path="*" element={<NaoEncontrado />} />
      </Route>
    </Routes>
  );
}
