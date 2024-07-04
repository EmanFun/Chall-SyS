'use client';
import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";

interface HeaderProps{
    name: string;
    photo?: string;
}


function HeaderComponent({name, photo}: HeaderProps){
  return (
    <section className={styles.container}>
        <h1 className={styles.title}>{name}</h1>
        {/* <Image src={photo} alt={`${name} photo`} /> */}
    </section>
  );
}



export default HeaderComponent;
