import { Link } from "@tanstack/react-router";
import logoSrc from "@/assets/brand/logo.png";
import { site } from "@/config/site";

export function Logo({
  withWordmark = true,
  className = "",
}: {
  withWordmark?: boolean;
  className?: string;
}) {
  return (
    <Link
      to="/"
      aria-label={site.name}
      className={`group flex items-center gap-2.5 ${className}`}
    >
      <img
        src={logoSrc}
        alt={`${site.name} logo`}
        width={40}
        height={40}
        className="h-10 w-10 rounded-full bg-white object-contain p-0.5 ring-1 ring-hairline"
      />
      {withWordmark && (
        <div className="flex flex-col leading-tight">
          <span className="text-[13px] font-semibold tracking-tight text-foreground">
            DopCellar Merit
          </span>
          <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Global Limited
          </span>
        </div>
      )}
    </Link>
  );
}
