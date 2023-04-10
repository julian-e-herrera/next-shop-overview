
//Option 1 :fetch products on the server side (in getStaticProps)
import Head from 'next/head'

import Title from '@/components/Title'
import { ReactNode } from 'react'
import { GetStaticProps } from 'next'
import { getProducts } from '@/lib/products'

// const products = [
//   { id: 1, title: 'title 1' },
//   { id: 2, title: 'title 2' },
// ]

export interface Product {
  id: number, title: string
}
interface HomePageProps {
  products: Product[];
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {

  // const response = await fetch('http://localhost:1337/products');
  const products = await getProducts()
  return {
    props: { products }
  }
}

export default function Home(props: HomePageProps) {
  const { products } = props

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
        <ul>
          {products.map((product: Product): ReactNode => {
            return (<li key={product.id}>{product.title}</li>)

          })}
        </ul>
      </main>
    </>
  )
}