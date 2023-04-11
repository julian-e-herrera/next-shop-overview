//Option 1b:using in this case of uses

import Head from 'next/head'

import Title from '@/components/Title'
import { ReactNode } from 'react'
import { GetStaticProps } from 'next'
import { getProducts, Product } from '@/lib/products'
import Link from 'next/link'
import ProductCard from '@/components/ProductCard'

// const products = [
//   { id: 1, title: 'title 1' },
//   { id: 2, title: 'title 2' },
// ]

// export interface Product {
//   id: number, title: string
// }
interface HomePageProps {
  products: Product[];
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {

  // const response = await fetch('http://localhost:1337/products');
  const products = await getProducts()
  return {
    props: { products },
    revalidate: 30,
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
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {products.map((product: Product): ReactNode => {
            return (<li key={product.id}>
              {/* <Link href={`/products/${product.id}`}>{product.title}</Link> */}
              <ProductCard {...product} />
            </li>)

          })}
        </ul>
      </main>
    </>
  )
}