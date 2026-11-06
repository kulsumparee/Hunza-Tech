import { Link } from "react-router-dom";

export default function Logo({ compact = false, onClick }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className="group flex items-center gap-3 no-underline"
      aria-label="Hunza Technologies home"
    >
      <img
        src="/logo.png"
        alt=""
        width={512}
        height={512}
        className="h-10 w-10 shrink-0 rounded-full object-cover sm:h-11 sm:w-11"
      />
      <span className={compact ? "sr-only" : "leading-tight"}>
        <span className="block font-display text-[0.95rem] font-semibold tracking-[-0.03em] text-ht-paper group-hover:text-ht-orange">
          Hunza Technologies
        </span>
        <span className="mt-0.5 hidden text-[0.68rem] tracking-[0.14em] text-ht-mute uppercase sm:block">
          Empower Ideas Through Technology
        </span>
      </span>
    </Link>
  );
}
