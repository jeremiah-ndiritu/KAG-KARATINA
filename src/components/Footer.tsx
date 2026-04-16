import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface/95 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center sm:px-6">
        <SocialLinks />
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} KAG Karatina. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
