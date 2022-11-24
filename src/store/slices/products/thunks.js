import { productsApi } from '../../../api/ProductsApi'
import {startLoadingProducts, setProducts} from './productsSlice'


export const getProducts = (page = 0, limit = 12) => {
  return async( dispatch ) => {
    dispatch( startLoadingProducts() )

    const {data} = await productsApi.get(`categories/1/products?offset=${page  * 10}&limit=${limit}`)

    dispatch( setProducts({
      products: data,
      page: page + 1
    }) )
  }
}