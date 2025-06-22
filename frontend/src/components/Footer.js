import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faBandcamp,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer
      style={{
        padding: "1rem",
        borderTop: "1px solid #ccc",
        textAlign: "center",
        marginTop: "2rem",
      }}
    >
      <a
        href="https://facebook.com/thegiantdoomband"
        target="_blank"
        rel="noreferrer"
        style={{ marginRight: "1rem" }}
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a
        href="https://instagram.com/thegiantdoomband"
        target="_blank"
        rel="noreferrer"
        style={{ marginRight: "1rem" }}
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a
        href="https://thegiant1.bandcamp.com/album/seasons"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faBandcamp} size="2x" />
      </a>
    </footer>
  );
}

export default Footer;

