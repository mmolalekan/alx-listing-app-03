import Header from "./Header";
import Footer from "./Footer";
import { LayoutProps } from "../../interfaces";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="pt-56 min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
