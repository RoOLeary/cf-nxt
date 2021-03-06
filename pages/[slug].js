import Head from 'next/head'

import styles from '../styles/Home.module.css'
import Link from 'next/link';
import PageBlocks  from '../components/PageBlocks';
import Stats  from '../components/Stats';
import Nav  from '../components/Nav';
import { getAllPostsForHome, getPostAndMorePosts } from './../lib/api'

export default function Page({ entry }) {
    

    return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Nav />
        {entry ? <PageBlocks content={entry['pageBlocks']} /> : 'Loading'}
        <Stats />
      </main>
     
    </div>
  )
}

export async function getStaticPaths() {
  const res = await getAllPostsForHome();
  const pageList = await res;
  return {
    paths: Array.from(pageList).map((page) => {
      return {
        params: {
          slug: `${page.slug}`,
        },
      }
    }),
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  // console.log(params.slug)
  const data = await getPostAndMorePosts(params.slug);

  return {
      props: { 
        entry: data.entry,
      }
  };
}

