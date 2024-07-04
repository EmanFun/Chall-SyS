import { SpinLoader } from "@/components";
import React from "react";
import styles from './page.module.css';


function Loading() {
  return (
    <main className={styles.main} >
        <SpinLoader/>
    </main>
  )
}

export default Loading;
