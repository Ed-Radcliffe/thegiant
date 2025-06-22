import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc", display: "flex", justifyContent: "space-between" }}>
      <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
        The Giant
      </div>
      <div>
        <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
        <Link to="/about" style={{ marginRight: "1rem" }}>About</Link>
        <Link to="/media">Media</Link>
      </div>
    </nav>
  );
}

export default Navbar;
