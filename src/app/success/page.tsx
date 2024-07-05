import React from "react";
import styles from './success.module.css'

function page() {
  return (
    <section className={styles.container}>
        <div className={styles.message}>
            <h1>Message sent</h1>
        </div>
    </section>
  );
}

export default page;
