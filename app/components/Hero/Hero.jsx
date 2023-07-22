import styles from "@/app/components/Hero/hero.module.css";
import Image from "next/image";
import Link from "next/link";
import { Dancing_Script } from "next/font/google";

const ds = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const Hero = () => {
  return (
    <main className={styles.container}>
      <section className={styles.side}>
        <div>
          <Image alt="" src="/images/1.jpg" width="200" height="200" />
        </div>
        <div>
          <Image alt="" src="/images/15.jpg" width="200" height="200" />
        </div>
        <div>
          <Image alt="" src="/images/12.jpg" width="200" height="200" />
        </div>
        <div>
          <Image alt="" src="/images/4.jpg" width="200" height="200" />
        </div>
      </section>
      <section>
        <div>
          <h1 className={ds.className}>
            DENO HOTELS <br /> AND <br /> APARTMENT
          </h1>
          <h2>Lorem ipsum dolor sit amet.</h2>
        </div>
        <div className={styles.link}>
          <Link href="">Contact Us</Link>
        </div>
      </section>
    </main>
  );
};

export default Hero;
