import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { categoryAPI } from "../services/RTK/CategoriesService"
import { productAPI } from "../services/RTK/ProductsService"
import { checkAuthAPI, userAPI } from "../services/RTK/UserService"
import userReducer from './slices/userSlice'
export const rootReducer = combineReducers({
    [userAPI.reducerPath]: userAPI.reducer,
    [checkAuthAPI.reducerPath]: checkAuthAPI.reducer,
    user: userReducer,
    [productAPI.reducerPath]: productAPI.reducer,
    [categoryAPI.reducerPath]: categoryAPI.reducer
})


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
                .concat(userAPI.middleware)
                .concat(productAPI.middleware)
                .concat(categoryAPI.middleware)
    })
}



export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']