import styles from "./page.module.css";
import Header from "./components/header/Header";
import Hero from "./components/Hero/Hero";
import "@/public/styles.css";
import Rooms from "./components/rooms/Rooms";
import About from "./components/about/About";

export default function Home() {
  return (
    <main className={styles.container}>
      <Header />
      <Hero />
      <Rooms />
      <About />
      <div style={{ height: "100vh" }}></div>
    </main>
  );
}
