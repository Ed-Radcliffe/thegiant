import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="layout-container">
      <Navbar />
      <main className="layout-main">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
