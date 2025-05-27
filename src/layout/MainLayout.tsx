import type { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header />
      <main style={{ padding: '1rem' }}>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;