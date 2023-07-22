import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src="/./icon.png" width={110} height={80} alt="logo" />
      </div>
      <nav className={styles.nav}>
        <div className={styles.item}>
          <Link href="/">HOME</Link>
        </div>
        <div className={styles.item}>
          <Link href="/">ROOMS</Link>
        </div>
        <div className={styles.item}>
          <Link href="/">SERVICES</Link>
        </div>
        <div className={styles.item}>
          <Link href="/">ABOUT US</Link>
        </div>
        <div className={styles.item}>
          <Link href="/">CONTACT</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
