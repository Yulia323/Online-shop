export interface ProductsResponse {
  products: ProductsData []
}

export interface ProductsData {
  product_id: number,
  name: string,
  description: string,
  avatar: { original: string },
  type: string,
  latest_price: string,
  quantity: string,
}