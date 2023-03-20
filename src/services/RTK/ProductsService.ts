import { createApi } from '@reduxjs/toolkit/query/react'
import { IProduct } from "../../models/IProduct"
import { baseQueryWithReauth } from "./service"
interface FechAllProducts {
    limit: number
    page: number
    categoryId?: number
}
export interface RessFechAllProducts {
    products: IProduct[]
    totalItems: number
}
export const productAPI = createApi({
    reducerPath: 'productAPI',
    baseQuery: baseQueryWithReauth,
    tagTypes: ['Product'],
    endpoints: (build) => ({
        fechAllProducts: build.query<RessFechAllProducts, FechAllProducts>({
            query: ({ limit, page, categoryId = 0 }) => ({
                url: '/products',
                method: 'GET',
                params: {
                    limit,
                    page,
                    categoryId
                }
            }),
            providesTags: resul => ['Product'],
        }),
        createProduct: build.mutation<IProduct, FormData>({
            query: (body) => ({
                url: '/products',
                method: 'POST',
                body
            }),
            invalidatesTags: ['Product']
        })
    }),
})

export const { useFechAllProductsQuery, useCreateProductMutation } = productAPI

