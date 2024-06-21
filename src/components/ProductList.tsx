import { Product } from "../@types/Product";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { addToCart } from "../store/features/cart/cart.slice";
import ProductListItem from "./ProductListItem";
import InputBox from "./InputBox";
import { useState } from "react";
import cartIcon from "../assets/cart-shopping-solid.svg";
import Badge from "./Badge";
import { RootState } from "../store/store";

interface PropsProductList {
    products: Product[];
    handleCart: () => void;
}

const ProductList: React.FC<PropsProductList> = ({ products, handleCart }) => {
    
    const [ term, setTerm ] = useState<string>("");
    const qtyItems = useAppSelector((state: RootState) => state.cart.items.length);
    const dispatch = useAppDispatch();

    const handleAddToCart = (product: Product) => {
        dispatch(addToCart({...product, quantity: 1}));
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
                        handleAddToCart={() => handleAddToCart(product)}
                        handleNavigate={handleNavigate} />
                )) : <p>No products available.</p>}
            </div>
            <button onClick={handleCart} className="p-0 w-12 h-12 bg-primary bottom-4 right-4 rounded-full no-border shadow-lg-active pointer shadow transition-ease transform-scale outline-none-focus fixed flex justify-center items-center">
                <img src={cartIcon} className="w-6 h-6" alt="Icon Cart" />
                {qtyItems > 0 && <Badge label={String(qtyItems)}/>}
            </button>
        </>
    )
}

export default ProductList;