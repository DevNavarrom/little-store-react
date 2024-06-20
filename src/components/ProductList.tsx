import { Product } from "../@types/Product";
import { useAppDispatch } from "../store/hooks";
import { addToCart } from "../store/features/cart/cart.slice";
import ProductListItem from "./ProductListItem";
import InputBox from "./InputBox";
import { useState } from "react";
import cartIcon from "../assets/cart-shopping-solid.svg";

interface PropsProductList {
    products: Product[];
    handleCart: () => void;
}

const ProductList: React.FC<PropsProductList> = ({ products, handleCart }) => {
    
    const [ term, setTerm ] = useState<string>("");
    const dispatch = useAppDispatch();

    const handleAddToCart = (product: Product, quantity: number) => {
        dispatch(addToCart({...product, quantity}));
    }

    const handleNavigate = (id: string) => {
        console.log(id);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTerm(e.target.value);
    }

    return (
        <>
            <div className="px-4 w-50 w-sm">
                <InputBox name="name" type="search" placeholder="Search" value={term} onChange={handleChange} />
            </div>
            <div className="flex row w-80 justify-center gap-10 px-4 mt-8 mb-4 wrap">
                {Array.isArray(products) ? products.map((product) => (
                    <ProductListItem
                        key={product.id}
                        product={product}
                        handleAddToCart={() => handleAddToCart(product, 1)}
                        handleNavigate={handleNavigate} />
                )) : <p>No products available.</p>}
            </div>
            <button onClick={handleCart} className="p-0 w-12 h-12 bg-primary bottom-4 right-4 rounded-full no-border shadow-lg-active pointer shadow transition-ease transform-scale outline-none-focus fixed flex justify-center items-center">
                <img src={cartIcon} className="w-6 h-6" alt="Icon Cart" />
            </button>
        </>
    )
}

export default ProductList;