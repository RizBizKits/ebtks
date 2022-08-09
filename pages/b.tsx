import * as React from "react";
import styles from "../styles/Home.module.css";

export default function PageB() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>
          Woah! This page was geo-blocked for all visitors outside the US.
        </h1>
        <p>You had access.</p>
      </main>
    </div>
  );
}
