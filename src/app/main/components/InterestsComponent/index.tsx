import React from "react";
import styles from "./styles.module.css";
import { InterestCardComponent } from "@/components";
import internal from "stream";

const interests = [
    {
        "name": "Artificial Intelligence",
        "description": "I have a strong passion for AI and machine learning. I enjoy working on projects that involve natural language processing and computer vision."
    },
    {
        "name": "Soccer",
        "description": "Playing soccer is one of my favorite pastimes. I play in a local league and enjoy the teamwork and competition."
    },
    {
        "name": "Cooking",
        "description": "I love experimenting with new recipes and cooking techniques. Cooking helps me relax and is a creative outlet for me."
    },
    {
        "name": "Traveling",
        "description": "I enjoy traveling and exploring new cultures. It broadens my perspective and inspires me in my work and personal life."
    }
]
interface InterestsProps {
    data?: any[]
}
function InterestsComponent({data}: InterestsProps) {
     data = interests
    return (
    <section className={styles.container}>
        <div className={styles.wrapper_interests}>
            {
                data.map((e, i:number)=>{
                    return (
                       <InterestCardComponent key={i} name={e.name} description={e.description}/>
                    )
                })
            }
        </div>
    </section>
  );
}

export default InterestsComponent;
