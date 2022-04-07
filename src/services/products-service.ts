import {instance} from './api-instance';
import {ProductsResponse} from '../interfaces/main-page.intarfaces';

export const productsService = {
  getProducts(): any {
    return instance.get<ProductsResponse>(`products`);
  },
};
