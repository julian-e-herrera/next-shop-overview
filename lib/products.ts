

import { fetchJson } from "./api";

const { CMS_URL } = process.env;

export interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  pictureUrl:string;
}

// export async function getProduct(id: string): Promise<Product> {
//   const product = await fetchJson(`${CMS_URL}/products/${id}`);
//   return stripProduct(product);
// }



export async function getProducts(): Promise<Product[]> {

    const products = await fetchJson(`${CMS_URL}/products`,{method:'GET'});
//   const products = await fetchJson(`${CMS_URL}/products`);
  return products.map(stripProduct);
}

export function stripProduct(product: any) {
  
  return {
    id: product.id,
    title: product.title,
    description: product.description,
    price: '$' + product.price,
    pictureUrl: `${CMS_URL}${product.picture.url}`,
  };
}

export async function getProduct(id:string): Promise<any> {
  // const response = await fetch(`http://localhost:1337/products/`);
  const product = await fetchJson(`${CMS_URL}/products/${id}`,{method:'GET'});
//   const products = await fetchJson(`${CMS_URL}/products`);
  console.log(stripProduct(product))
return stripProduct(product)
}