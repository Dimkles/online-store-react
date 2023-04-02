import { createApi } from '@reduxjs/toolkit/dist/query/react'
import { UserState } from '../../store/slices/userSlice'
import { baseQuery, baseQueryWithReauth } from './service'
interface loginBody {
    email: string,
    password: string
}
interface registrationBody {
    email: string
    password: string
    name: string
    address: string
}
export const userAPI = createApi({
    reducerPath: 'userAPI',
    baseQuery: baseQueryWithReauth,
    endpoints: (build) => ({
        login: build.mutation<UserState, loginBody>({
            query: (body) => ({
                url: '/auth/login',
                method: 'POST',
                body,
            }),
        }),
        registration: build.mutation<UserState, registrationBody>({
            query: (body) => ({
                url: '/auth/registration',
                method: 'POST',
                body,
            }),
        }),
        logout: build.mutation({
            query: () => ({
                url: '/auth/logout',
                method: 'GET'
            })
        }),
    }),
})

export const checkAuthAPI = createApi({
    reducerPath: 'checkAuthAPI',
    baseQuery,
    endpoints: (build) => ({
        checkAuth: build.query({
            query: () => ({
                url: '/auth/refresh',
                method: 'GET',
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            }),

        }),
    })
})

export const { useCheckAuthQuery } = checkAuthAPI

export const { useLoginMutation, useLogoutMutation, useRegistrationMutation } = userAPI