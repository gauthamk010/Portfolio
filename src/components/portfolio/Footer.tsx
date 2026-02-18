export default function Footer() {
  return (
    <footer className="border-t border-portfolio-border py-7 px-8 text-center relative z-10">
      <p className="text-portfolio-muted text-[13px]">
        Designed & Built by{" "}
        <span className="text-portfolio-gold font-serif font-semibold">
          Gautham Keshav
        </span>{" "}
        · {new Date().getFullYear()}
      </p>
    </footer>
  );
}
