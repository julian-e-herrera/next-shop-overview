import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Title from '@/components/Title'

const products = [
  { id: 1, title: 'title 1' },
  { id: 2, title: 'title 2' },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Shop</title>
        <meta name="description" content="Next Shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-6 py-4">
        <Title>Next Shop</Title>
        <p>[Todo:display elements]</p>
      </main>
    </>
  )
}
