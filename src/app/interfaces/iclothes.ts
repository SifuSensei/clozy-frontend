export interface Iclothes {
    id: number
    category_id: number
    gender: string
    name: string
    picture: string
    price: number
    quantity: number
    
}

export interface Icreview {
    id: number
    category_id: number
    gender: string
    name: string
    picture: string
    price: number
    quantity: number
    reviews: Ireviews[]
}

export interface Icategory {
    id: number
    type: string
}

export interface Ireviews {
    id: number 
    username: string
    clothes_id: number 
    comment: string
    star: number
}
export interface IreviewsDesc {
    id: number 
    username: string
    clothes_id: number 
    comment: string
    star: number
    clothe: Iclothes
}

export interface Iorders {
    id: number
    date: string
    firstname: string
    lastname: string
    address: string
    payment: number
    clothes: string
    total: number
    status: string
}
