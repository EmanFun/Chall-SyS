"use client";
import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";
import userPhoto from "../../../public/person.png";
interface UserProps {
  name: string;
  photo?: string;
}

function UserComponent({ name, photo }: UserProps) {
  return (
    <section className={styles.container}>
      <h1 className={styles.title_name}>{name}</h1>
      <div className={styles.photo_wrapper}>
        <Image className={styles.photo} src={userPhoto} alt={`${name} photo`} />
      </div>
    </section>
  );
}

export default UserComponent;
