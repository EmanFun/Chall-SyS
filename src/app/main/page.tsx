import React from "react";
import styles from "./main.module.css";
import HeaderComponent from "@/components/HeaderComponent";
import ContactForm from "@/components/ContactForm";
import { ContactComponent } from "./components";
import InterestsComponent from "./components/InterestsComponent";

const MainPage = () => {
  return (
    <section className={styles.layout}>
        <header className={styles.header}>
            <HeaderComponent name="emanuel" photo="./next.svg"/>
        </header>
        <aside>

        </aside>
        <main className={styles.main}>
          <InterestsComponent />
        </main>
        <footer className={styles.footer}>
          <ContactComponent />
        </footer>
    </section>
  );
};

export default MainPage;
