import { createApi } from '@reduxjs/toolkit/query/react'
import { IProduct } from "../../models/IProduct"
import { baseQueryWithReauth } from "./service"
interface FechAllProducts {
    limit: number
    page: number
}
export const productAPI = createApi({
    reducerPath: 'productAPI',
    baseQuery: baseQueryWithReauth,
    tagTypes: ['Product'],
    endpoints: (build) => ({
        fechAllProducts: build.query<IProduct[], FechAllProducts>({
            query: ({ limit, page }) => ({
                url: '/products',
                method: 'GET',
                params: {
                    limit,
                    page
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

