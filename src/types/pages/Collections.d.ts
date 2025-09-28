export interface SinglePhone{
    brand:string,
    images:string[],
    id:string,
    desc:string,
    price:number,
    normalPrice:number,
}

export interface ProductCollectionProps{
    phone:SinglePhone
}