"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type HeaderNavLinkProps = {
  href: string;
  children: ReactNode;
  /** このプレフィックスで始まるパスでアクティブ表示（例: `/works`） */
  activePathPrefix?: string;
  className?: string;
};

const HeaderNavLink = ({
  href,
  children,
  activePathPrefix,
  className = "",
}: HeaderNavLinkProps) => {
  const pathname = usePathname();
  const isActive =
    activePathPrefix !== undefined &&
    (pathname === activePathPrefix ||
      pathname.startsWith(`${activePathPrefix}/`));

  return (
    <Link
      href={href}
      className={`relative flex flex-col items-center pt-1.5 text-white hover:text-white/80 ${
        isActive ? "font-bold" : ""
      } ${className}`}
    >
      {children}
      {isActive ? (
        <span
          className="mt-1.5 h-0.5 w-5 bg-white"
          aria-hidden
        />
      ) : (
        <span className="mt-1.5 h-0.5 w-5 bg-transparent" aria-hidden />
      )}
    </Link>
  );
};

export default HeaderNavLink;
