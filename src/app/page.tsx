import styles from "./page.module.css";
import { WelcomeComponent } from "@/components";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <WelcomeComponent />
      </div>
    </main>
  );
}
