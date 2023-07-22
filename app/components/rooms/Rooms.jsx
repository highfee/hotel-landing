import styles from "@/app/components/rooms/rooms.module.css";
import { Courgette } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const ds = Courgette({
  subsets: ["latin"],
  weight: ["400"],
  // weight: ["400", "500", "600", "700"],
});

const Rooms = () => {
  return (
    <div className={styles.container}>
      <header>
        <h2>OUR CHOICE</h2>
        <section>
          <div className={ds.className}>
            The best room <br /> just for you!
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            sunt nulla doloremque, dolorum quae cum doloribus architecto
            repellat facere
          </div>
        </section>
      </header>
      <main>
        <div className={styles.card}>
          <div className={styles.card__image}>
            <Image src="/images/1.jpg" width="400" height="500" />
            <Link href="" className={ds.className}>
              <div className={styles.overlay}>Show Room</div>
            </Link>
          </div>
          <div className={styles.card__body}>
            <p className={styles.card__title}>Connecting Room</p>
            <p className={styles.card__subtitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
              reiciendis...
            </p>
            <Link href="">
              Learn More
              <span></span>
            </Link>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.card__image}>
            <Image src="/images/2.jpg" width="400" height="500" />
            <Link href="" className={ds.className}>
              <div className={styles.overlay}>Show Room</div>
            </Link>
          </div>
          <div className={styles.card__body}>
            <p className={styles.card__title}>Connecting Room</p>
            <p className={styles.card__subtitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
              reiciendis...
            </p>
            <Link href="">
              Learn More
              <span></span>
            </Link>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.card__image}>
            <Image src="/images/3.jpg" width="400" height="500" />
            <Link href="" className={ds.className}>
              <div className={styles.overlay}>Show Room</div>
            </Link>
          </div>
          <div className={styles.card__body}>
            <p className={styles.card__title}>Connecting Room</p>
            <p className={styles.card__subtitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
              reiciendis...
            </p>
            <Link href="">
              Learn More
              <span></span>
            </Link>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.card__image}>
            <Image src="/images/4.jpg" width="400" height="500" />
            <Link href="" className={ds.className}>
              <div className={styles.overlay}>Show Room</div>
            </Link>
          </div>
          <div className={styles.card__body}>
            <p className={styles.card__title}>Connecting Room</p>
            <p className={styles.card__subtitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
              reiciendis...
            </p>
            <Link href="">
              Learn More
              <span></span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Rooms;
