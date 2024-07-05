'use client';
import React from "react";
import styles from "./styles.module.css";

interface InterestCardProps {
    name: string;
    description?: string;
};

function InterestCardComponent({name, description}: InterestCardProps) {

  return (
    <div className={styles.container}>
        <h2 className={styles.title}>{name}</h2>
        <p className={styles.description}>{description}</p>
    </div>
);
}

export default InterestCardComponent;
