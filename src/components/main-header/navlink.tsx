"use client";
import Link from "next/link";
import React from "react";
import classes from "./Mainheader.module.css";
import { usePathname } from "next/navigation";

function NaVlink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={
        path.startsWith(href)
          ? `${classes.link} ${classes.active}`
          : classes.link
      }
    >
      {children}
    </Link>
  );
}

export default NaVlink;
