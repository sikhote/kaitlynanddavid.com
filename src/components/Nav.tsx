"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex gap-10">
        {[
          {
            slug: "/",
            label: "Home",
          },
          {
            slug: "/schedule",
            label: "Schedule",
          },
          {
            slug: "/rsvp",
            label: "RSVP",
          },
          {
            slug: "/faq",
            label: "FAQ",
          },
          {
            slug: "/registry",
            label: "Registry",
          },
        ].map(({ slug, label }) => (
          <li key={slug}>
            <Link
              href={slug}
              className={`${pathname === slug ? "underline" : ""} text-1xl underline-offset-8`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
