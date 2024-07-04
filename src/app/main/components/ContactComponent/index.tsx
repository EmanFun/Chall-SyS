import React from "react";
import ContactForm from "@/components/ContactForm";
import styles from "./styles.module.css";

type Props = {};

function ContactComponent({}: Props) {
  return (
    <section className={styles.container}>
        <h1 className={styles.title}>Contact Form</h1>
        <ContactForm />
    </section>
  );
}

export default ContactComponent;
