import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Luis Valdovinos</title>
        <meta name="description" content="Luis Valdovinos personal site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Luis Valdovinos</h1>

        <p className={styles.description}>
          Hello! I&apos;m a senior software engineer who loves solve problems through building
          simple and well maintained software. I&apos;ve got over 8 years of experience in the
          enterprise area, I just recently started working on a start-up and so far so good!
          I&apos;ve been working on health care projects for most of the time, but I can adjust to
          any other area. I like to be with my family in my spare time, and enjoy life with my close
          ones.
        </p>

        <p className={styles.description}>
          You can see all the companies I&apos;ve worked with <Link href="/cv">here</Link>
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
