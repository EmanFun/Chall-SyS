'use client';
import { describe } from "node:test";
import React from "react";
import styles from "./styles.module.css";

interface InterestCardProps {
    name: string;
    img: string;
    description?: string;
};

function InterestCardComponent({name, img, description}: InterestCardProps) {
    const [image, setImage] = useState<string>(img)



  return (
    <div className={styles.container}>
        <h2 className={styles.title}>{name}</h2>
        <p className={styles.description}>{description}</p>
    </div>
);
}

export default InterestCardComponent;
