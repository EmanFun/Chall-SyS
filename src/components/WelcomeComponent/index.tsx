import React from "react";
import Link from "next/link";
import styles from './styles.module.css';


function WelcomeComponent() {
  return (
    <section className={styles.container}>
        <h1 className={styles.welcome_message}>Welcome User</h1>
        <Link href={"/main"}>Continue</Link>
    </section>
  );
}

export default WelcomeComponent;
