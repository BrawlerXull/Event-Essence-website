
import  { ReactNode, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div >
      <Header />
      <div className="container font-mont">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
