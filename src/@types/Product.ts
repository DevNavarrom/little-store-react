export interface Product {
    id: string;
    name: string;
    amount: number;
    price: number;
    image?: string;
    quantity?: number;
}

export interface ProductState {
    products: Product[];
    loading: boolean;
    error: string | null;
}

export interface Products {
    products: Product[];
}