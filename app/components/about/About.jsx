import Image from "next/image";
import styles from "./about.module.css";
import { Dancing_Script } from "next/font/google";
import Link from "next/link";

const ds = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const About = () => {
  return (
    <div className={styles.container}>
      <section className={styles.about__image}>
        <Image src="/images/outside.jpg " alt="" width="500" height="500" />
      </section>
      <section>
        <h2 className={ds.className}>About</h2>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam maxime
          debitis vero, voluptate omnis aliquam suscipit est eaque unde, dolores
          iste repellat odit fugit nostrum accusamus porro. In labore quis
          maxime delectus, debitis quos dolor natus eos explicabo ab quaerat
          iste blanditiis cumque minima dolores recusandae quas libero deserunt
          sed!
        </div>
        <Link href="">Read More</Link>
      </section>
    </div>
  );
};

export default About;
