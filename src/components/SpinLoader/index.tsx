"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import JetIcon from "@/assets/img/jets.svg";
import CodingIcon from "@/assets/img/Coding.svg";
import mouseIcon from "@/assets/img/mouseGamer.svg";
import Image from "next/image";
import { useInterval } from "usehooks-ts";

const Icons = [JetIcon, CodingIcon, mouseIcon];

function SpinLoader() {
    const [index, setIndex] = useState<number>(Math.floor(Math.random() * 2));

    useInterval(
        ()=>{
            const newIndex = Math.floor(Math.random() * 3)
            if(newIndex !== index){
                setIndex(newIndex)
            }
        }, 500
    )

  return (
    <section className={styles.container}>
      <div>
        <Image className={styles.loader_spin} src={Icons[index]} alt="svg image" />;
      </div>
    </section>
  );
}

export default SpinLoader;
