"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/" && (
        <div className="pb-10">
          <div className="relative h-[500px] w-[500px] rounded-full overflow-hidden object-cover">
            <Image
              src="/assets/engagement.jpg"
              fill
              alt="Kaitlyn & David"
              className="grayscale"
            />
          </div>
        </div>
      )}
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
    </>
  );
}
