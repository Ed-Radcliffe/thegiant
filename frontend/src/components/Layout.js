import Navbar from "./Navbar";


function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main style={{ padding: "2rem", minHeight: "70vh" }}>{children}</main>
      
    </>
  );
}

export default Layout;
