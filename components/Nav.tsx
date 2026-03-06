import Link from "next/link";

export const Nav = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-noir-100 bg-bone-50/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <img
            src="/assets/vault-noir-logo.png"
            alt="Vault Noir"
            className="h-20 w-auto md:h-24"
          />
          <span className="font-display text-base tracking-[0.24em] text-noir-900 md:text-lg">
            VAULT NOIR
          </span>
        </Link>
        <nav className="flex items-center gap-6 text-xs uppercase tracking-[0.24em] text-noir-600">
          <Link href="/catalog" className="hover:text-noir-900">
            Showroom
          </Link>
          <Link href="/footwear" className="hover:text-noir-900">
            Footwear
          </Link>
          <Link href="/about" className="hover:text-noir-900">
            Atelier
          </Link>
          <Link href="/contact" className="hover:text-noir-900">
            Concierge
          </Link>
        </nav>
      </div>
    </header>
  );
};
