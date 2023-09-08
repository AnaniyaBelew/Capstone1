import { createContext, useState } from "react"
import PRODUCTS from "../Shop-data.json"
export const ProductsContext= createContext(
    {
        products:[]
    })
export const ProductsProvider= ({children})=>
{
    const [products,setProducts]= useState(PRODUCTS);
    const value={products}
    return(
    <ProductsProvider value={value}></ProductsProvider>
    )
}