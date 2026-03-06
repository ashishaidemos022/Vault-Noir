export const Footer = () => {
  return (
    <footer className="border-t border-noir-100 bg-bone-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-xs uppercase tracking-[0.26em] text-noir-500">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <img
              src="/assets/vault-noir-logo.png"
              alt="Vault Noir"
              className="h-[4.5rem] w-auto md:h-20"
            />
            <span className="font-display text-sm tracking-[0.24em] text-noir-700 md:text-base">
              VAULT NOIR
            </span>
          </div>
          <span>Tailored for the nocturne.</span>
        </div>
        <div className="luxe-rule" />
        <div className="flex flex-wrap items-center justify-between gap-3 text-[10px] tracking-[0.3em]">
          <span>New York · Paris · Tokyo</span>
          <span>© 2026 Vault Noir</span>
        </div>
      </div>
    </footer>
  );
};
