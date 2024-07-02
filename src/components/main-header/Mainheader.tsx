import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.png";
import classes from "./Mainheader.module.css";
import MainHeaderBackground from "./main-header-background";
import NaVlink from "./navlink";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NaVlink href="/meals">Browse Meals</NaVlink>
            </li>
            <li>
              <NaVlink href="/community">Foodies Community</NaVlink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
