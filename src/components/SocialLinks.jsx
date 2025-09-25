import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaTiktok,
} from "react-icons/fa";
import "../styles/SocialLinks.css";
export default function SocialLinks() {
  return (
    <div className="social-links">
      <a
        href="https://www.facebook.com/K.A.G.Karatina"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebookF title="facebook" />
      </a>
      <a
        href="https://www.tiktok.com/@kingdom.embassy.karatina?refer=creator_embed"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTiktok />
      </a>
    </div>
  );
}
