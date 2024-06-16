import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Product } from "../@types/Product";
import { addToCart } from "../store/slices/cartSlice";

const ProductList: React.FC = () => {
    const products = useSelector((state: RootState) => state.products);
    const dispatch = useDispatch();

    const handleAddToCart = (product: Product, quantity: number) => {
        dispatch(addToCart({...product, quantity}));
    }

    return (
        <div>
            <h1>Product List</h1>

            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name}
                        <button onClick={() => handleAddToCart(product, 1)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductList;