"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  
  return (
    <nav className="flex items-center justify-center space-x-6 py-2 px-6 bg-black/30 backdrop-blur-sm rounded-full">
      {[
        { href: "/", label: "Home" },
        { href: "/why-me", label: "Why me?" },
        { href: "/work", label: "Work" },
        { href: "/reviews", label: "Reviews" },
        { href: "/pricing", label: "Pricing" },
        { href: "/faqs", label: "FAQs" },
      ].map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "text-white/70 text-sm hover:text-white transition-colors py-2",
            pathname === link.href && "text-white"
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
