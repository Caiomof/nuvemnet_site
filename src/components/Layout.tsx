import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import { ConnectChat } from './ConnectChat';
import { WhatsAppFab } from './WhatsAppFab';

export function Layout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main id="conteudo">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFab />
      <ConnectChat />
    </>
  );
}
