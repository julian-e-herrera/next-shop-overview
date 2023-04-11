// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getProducts } from '@/lib/products'
import type { NextApiRequest, NextApiResponse } from 'next'
import { Product } from '../../lib/products'

// type Data = {
//   products:Product[]
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  const products = await getProducts();
  return res.status(200).json(products)
}
