import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { MobileNav } from './MobileNav';
import { Navbar } from './Navbar';
import { SimulationNotice } from './SimulationNotice';

/** Mise en page commune à toutes les pages connectées. <Outlet /> affiche la page courante. */
export function AppLayout() {
  return (
    <>
      <Navbar />
      <SimulationNotice />
      <main>
        <Outlet />
      </main>
      <Footer />
      <MobileNav />
    </>
  );
}
