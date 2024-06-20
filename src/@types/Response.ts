
/* export type Response<T> = {
    data: ResponseProducts<T>,
} */

export type Response<T> = {
    data: {
        products: T[]
    }
}

export class ResponseProducts<T> {
    products!: T[];
}