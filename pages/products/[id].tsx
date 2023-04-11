import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getProducts, getProduct, Product } from '@/lib/products'
import Head from 'next/head'
import Title from '@/components/Title'
import { ParsedUrlQuery } from 'querystring'
import { ApiError } from '@/lib/api'




interface ProductPageParams extends ParsedUrlQuery {
  id: string;
}

interface ProductPageProps {
  product: Product;
}





export const getStaticPaths: GetStaticPaths<ProductPageParams> = async () => {
  const products = await getProducts()
  return {
    paths: products.map((product) => ({
      params: { id: product.id.toString() }
    })),
    fallback: 'blocking'
  }
}



export const getStaticProps: GetStaticProps<ProductPageProps, ProductPageParams> = async ({ params }) => {
  const productId: string = params?.id || '';
  // const { params } = props
  // let fallbackProd: Product = {
  //   id: 0,
  //   title: '',
  //   description: '',
  //   price: '',
  //   pictureUrl: '',
  // }

  try {
    const product = await getProduct(productId) // params ? await getProduct(params.id) : fallbackProd;

    return {
      props: { product },
    };
  } catch (error) {
    if (error instanceof ApiError && error.status === 404) {
      return { notFound: true };
    }
    throw error;

  }
}

const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
  return (
    <>
      <Head>
        <title>Next Shop</title>
        <meta name="description" content="Next Shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-6 py-4">
        <Title>{product.title}</Title>
        <p>{product.description}</p>
      </main>
    </>
  )
}

export default ProductPage