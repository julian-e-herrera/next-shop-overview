//Option 1b:using in this case of uses


import { ReactNode } from 'react'
import { GetStaticProps } from 'next'
import { getProducts, Product } from '@/lib/products'
import ProductCard from '@/components/ProductCard'
import Page from '@/components/Page'

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

    <Page title={'Indoor Plants'}>
      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {products.map((product: Product): ReactNode => {
          return (<li key={product.id}>
            <ProductCard {...product} />
          </li>)
        })}
      </ul>
    </Page>

  )
}