import { createApi } from '@reduxjs/toolkit/query/react'
import { IProduct } from "../../models/Product"
import { baseQueryWithReauth } from "./service"

export const productAPI = createApi({
    reducerPath: 'productAPI',
    baseQuery: baseQueryWithReauth,
    tagTypes: ['Product'],
    endpoints: (build) => ({
        fechAllProducts: build.query<IProduct[], any>({
            query: () => ({
                url: '/products',
                method: 'GET'
            }),
            providesTags: resul => ['Product'],
        }),
    }),
})

export const { useFechAllProductsQuery } = productAPI

