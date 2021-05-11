import Image from "next/image";
import Link from "next/link";
import styles from "assets/header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <Image
        src="https://bold.co/assets/img/logo-white-fc9a0f140b.svg"
        alt="logo"
        width={100}
        height={80}
      />
      <nav className={styles.nav}>
        <Link href="#">
          <a>Mi negocio</a>
        </Link>
        <Link href="https://ayuda.bold.co/">
          <a>Ayuda</a>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
