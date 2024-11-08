import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Counter from '../components/Counter.js';
import Github from '../components/Github.js';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <h1 className={styles.title}>
          Cody Matz welcomes <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <Counter name={"Counter1"} mult={1}/>
        <Counter name={"Counter2"} mult={2}/>

        <Github/>

        <p>Check Out My</p>
        <Link href="/store">Fake Store</Link>
    </div>
  );
}
