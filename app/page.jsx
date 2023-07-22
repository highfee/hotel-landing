import styles from "./page.module.css";
import Header from "./components/header/Header";
import Hero from "./components/Hero/Hero";
import "@/public/styles.css";
import Rooms from "./components/rooms/Rooms";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.wrapper}>
        <Header />
        <Hero />
      </div>
      <Rooms />
      <About />
      <Footer />
    </main>
  );
}
