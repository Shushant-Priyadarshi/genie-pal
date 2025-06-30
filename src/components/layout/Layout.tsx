
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ResizableNavbar from './ResizableNavbar';
import Footer from './Footer';
import { ProductionOptimizations } from '@/components/ui/production-optimizations';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-neutral-950">
      <ProductionOptimizations />
      <ResizableNavbar />
      <main className="flex-1 pt-16 sm:pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
