//Option 2 :fetch products on the client side (in useEffect)

import Head from 'next/head'

import Title from '@/components/Title'
import { ReactNode, useEffect, useState } from 'react'
import { GetStaticProps } from 'next'
import { getProducts, Product } from '@/lib/products'




export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {

    getProducts().then(setProducts);
  }, [])



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
