import { productsApi } from "../../../api/ProductsApi"
import {startLoadingProducts, setSingleProduct} from './singleProductSlice'


export const getSingleProduct = (id) => {
  return async( dispatch ) => {
    dispatch( startLoadingProducts() );

    const {data} = await productsApi.get(`products/${id}`)

    dispatch( setSingleProduct({ singleProduct: data }) )
  }
}
