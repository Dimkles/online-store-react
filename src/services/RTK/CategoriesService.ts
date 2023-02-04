import { createApi } from '@reduxjs/toolkit/query/react'
import { ICategory } from '../../models/ICategory'
import { baseQueryWithReauth } from "./service"

export const categoryAPI = createApi({
    reducerPath: 'categoryAPI',
    baseQuery: baseQueryWithReauth,
    tagTypes: ['Category'],
    endpoints: (build) => ({
        fechAllCategories: build.query<ICategory[], any>({
            query: () => ({
                url: '/products',
                method: 'GET'
            }),
            providesTags: resul => ['Category'],
        }),
        createCategory: build.mutation<ICategory, FormData>({
            query: (body) => ({
                url: '/categories',
                method: 'POST',
                body
            }),
            invalidatesTags: ['Category']
        })
    }),
})

export const { useFechAllCategoriesQuery, useCreateCategoryMutation } = categoryAPI

