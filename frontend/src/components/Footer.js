import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faBandcamp,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <a
        href="https://facebook.com/thegiantdoomband"
        target="_blank"
        rel="noreferrer"
        className="footer-link"
        aria-label="Facebook"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a
        href="https://instagram.com/thegiantdoomband"
        target="_blank"
        rel="noreferrer"
        className="footer-link"
        aria-label="Instagram"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a
        href="https://thegiant1.bandcamp.com/album/seasons"
        target="_blank"
        rel="noreferrer"
        className="footer-link"
        aria-label="Bandcamp"
      >
        <FontAwesomeIcon icon={faBandcamp} size="2x" />
      </a>
    </footer>
  );
}

export default Footer;
