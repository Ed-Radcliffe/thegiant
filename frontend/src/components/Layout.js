import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main style={{ padding: "2rem", minHeight: "70vh" }}>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
