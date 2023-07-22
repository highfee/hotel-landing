import styles from "@/app/components/footer/footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <main className={styles.container}>
      <section>
        <div>
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
        </div>
      </section>
    </main>
  );
};

export default Footer;
