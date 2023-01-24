export interface IRoles {
    id: number
    value: string
    description: string
}


export interface IUser {
    email: string
    name: string
    address: string
    id: number
    roles: IRoles[]
    banned: boolean,
    banReason: string | null
}
