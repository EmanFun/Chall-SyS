import React from "react";
import styles from "./main.module.css";
import { UserComponent } from "@/components";
import {
  InterestsComponent,
  ContactComponent,
  AboutComponent,
} from "./components";

const MainPage = () => {
  return (
    <section className={styles.layout}>
      <header className={styles.header}>
        <UserComponent
          name="Carlos Alberto Martínez López"
          photo="./next.svg"
        />
      </header>
      <main className={styles.main}>
        <AboutComponent />
        <InterestsComponent />
      </main>
      <footer className={styles.footer}>
        <ContactComponent />
      </footer>
    </section>
  );
};

export default MainPage;
