import Head from "next/head";
import Image from "next/image"; // For optimized images
import styles from "../styles/Home.module.css"; // Import your CSS
import Face from "../assest/images/face.jpeg";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="My personal portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image src={Face} alt="My Face" width={100} height={100}/>
        <h1 className={styles.title}>Welcome to My Portfolio</h1>

        <p className={styles.description}>Showcasing my work and skills.</p>

        {/* Example: Project Section */}
        <div className={styles.grid}>
          <a href="https://example.com" className={styles.card}>
            <h2>Project 1 &rarr;</h2>
            <p>Description of Project 1.</p>
          </a>

          {/* Add more project cards */}
        </div>
      </main>

      <footer className={styles.footer}>{/* Footer content */}</footer>
    </div>
  );
}
