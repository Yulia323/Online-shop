import './style.scss'
import React, {useEffect, useMemo, useState} from 'react';
import {productsService} from '../../services/products-service';
import {ProductsData, ProductsResponse} from '../../interfaces/main-page.intarfaces';
import {Product} from '../product';
import {Toolbar} from '../../ui/toolbar';

export const ProductList = () => {
  const [products, setProducts] = useState<ProductsData[]>([]);
  const [search, setSearch] = useState('')
  const [isAmount, setisAmount] = useState(true)
  const [isFetching, setIsFetching] = useState(true)

  const productFilter = (product: ProductsData) =>
    product.name.toLowerCase().includes(search.toLowerCase())
    && (isAmount ? Number(product.quantity) > 0 : true);

  const productsList = useMemo(() => products
    .filter(productFilter)
    .map((product, index) => <Product product={product} key={index}/>), [products, isAmount, search]);

  useEffect(() => {
      productsService.getProducts().then(
        (data: ProductsResponse) => {
          setProducts(data.products)
          setIsFetching(false)
        }
      );
    }, [],
  );

  useEffect(() => {
    console.log(products
    .filter(productFilter))

    }, [search],
  );

  return (
    <>
      <Toolbar search={search} setSearch={setSearch} isAmount={isAmount} setisAmount={setisAmount}/>
      <div className='products-list'>
        {
          !isFetching
            ? productsList
            : <div className='loading'>loading</div>
        }
      </div>
    </>
  )
}