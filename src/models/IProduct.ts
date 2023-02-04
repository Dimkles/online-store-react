import { ICategory } from "./ICategory"

export interface IProduct {
    id: number
    name: string
    description: string
    price: number
    quantity: number
    imagejpg: string
    imagewebp?: string
    categories: ICategory[]
}