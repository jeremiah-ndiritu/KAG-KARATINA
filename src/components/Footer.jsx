import SocialLinks from "./SocialLinks";
export default function Footer() {
  return (
    <footer className="footer">
      <SocialLinks />
      <p>
        &copy; {new Date().getFullYear()} KAG Karatina. All rights reserved.
      </p>
    </footer>
  );
}
