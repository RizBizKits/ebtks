import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>EBTKS</title>
        <meta
          name="description"
          content="Everything But The Kitchen Sink v1.3"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <span className={styles.sink}>
          <Image src="/sink.svg" alt="Sink logo" width={40} height={40} />
        </span>
        <h1 className={styles.title}>
          <span className={styles.bling}>E</span>verything{" "}
          <span className={styles.bling}>B</span>ut{" "}
          <span className={styles.bling}>T</span>he{" "}
          <span className={styles.bling}>K</span>itchen{" "}
          <span className={styles.bling}>S</span>ink
        </h1>

        <p className={styles.description}>
          demos+examples+experiments+tutorials+vibes
        </p>

        <div className={styles.grid}>
          <Link href="/b">
            <a className={styles.card}>Edge Middleware</a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
        <a
          href="https://rizwanakhan.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Maintained by{" "}
          <span className={styles.logo}>
            <Image src="/riz.png" alt="Riz Logo" width={20} height={20} />
          </span>
        </a>
      </footer>
    </div>
  );
}
