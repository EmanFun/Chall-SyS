import React from "react";
import styles from "./styles.module.css";

interface AboutProps {
  message: string;
}

function AboutComponent({ message }: AboutProps) {
  return (
    <section>
      <p>{message}</p>
    </section>
  );
}

export default AboutComponent;
