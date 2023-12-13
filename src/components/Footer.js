import { FaInstagram, FaGithub, FaFacebook, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-row">
        <span className="footer-row-icon">
          <FaInstagram />
        </span>
        <span className="footer-row-icon">
          <FaFacebook />
        </span>
        <span className="footer-row-icon">
          <FaGithub />
        </span>
        <span className="footer-row-icon">
          <FaYoutube />
        </span>
      </div>
      <div className="footer-row">
        <span className="footer-text">Contact us</span>
        <span className="footer-text">Our Services</span>
        <span className="footer-text">Privacy Policy</span>
        <span className="footer-text">Terms & Conditions</span>
        <span className="footer-text">Career</span>
      </div>
    </footer>
  );
}
