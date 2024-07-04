import React from "react";
import styles from "./styles.module.css";

interface InterestsProps {
    data?: any[]
}

function InterestsComponent({}: InterestsProps) {
  const testData = new Array(5).fill('');
    return (
    <section className={styles.container}>
        <div className={styles.wrapper_interests}>
            {
                testData.map((e, i:number)=>{
                    return (
                        <p key={i}>hello</p>
                    )
                })
            }
        </div>
    </section>
  );
}

export default InterestsComponent;
