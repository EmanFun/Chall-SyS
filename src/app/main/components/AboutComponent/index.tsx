import React from "react";
import styles from "./styles.module.css";

interface AboutProps {
  message?: string;
}

function AboutComponent({ message }: AboutProps) {
  return (
    <section className={styles.container}>
      <p className={styles.about_message}>Hi, my name is Carlos. I am a software engineer with a deep interest in artificial intelligence and machine learning. I enjoy solving complex problems and working on innovative projects. Outside of work, I love playing soccer and cooking.</p>
    </section>
  );
}

export default AboutComponent;
