import Head from 'next/head'
import styles from '@/styles/Home.module.css'

// Components
import Listas from "@/subpages/Listas";
import Topo from "@/subpages/Topo";
import Sobre from "@/subpages/Sobre";
import Footer from "@/subpages/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Curriculo LM</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/linkedin.png" />
      </Head>

      <main className={styles.main}>
          <Topo/>
          <Sobre/>
          <Listas/>
          <Footer/>
      </main>
    </>
  )
}
