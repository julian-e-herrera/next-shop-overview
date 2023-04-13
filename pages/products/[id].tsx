import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getProducts, getProduct, Product } from '@/lib/products'
import { ParsedUrlQuery } from 'querystring'
import { ApiError } from '@/lib/api'
import Image from 'next/image';
import Page from '@/components/Page'
import { useUser } from '@/hooks/user'
import AddToCartWidget from '@/components/AddToCartWidget'



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
  const user = useUser()
  return (
    <Page title={product.title}>
      <div className=' flex flex-col lg:flex-row'>
        <Image src={product.pictureUrl} alt={product.title} width={640} height={480} />
        <div className=' py-4 lg:px-6'>
          <p className='text-sm'>{product.description}</p>
          <p className='text-lg font-bold mt-2'>{product.price}</p>
          {user && <AddToCartWidget productId={product.id} />}
        </div>
      </div>
    </Page>
  )
}

export default ProductPage