import { RootState } from "../store/store";
import { clearCart, decrement, increment, updateQuantity } from "../store/features/cart/cart.slice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import Button from "./Button";
import CartItem from "./CartItem";
import { ItemCart } from "../@types/ItemCard";
import { updateProductStock } from "../store/features/products";

const Cart: React.FC = () => {

    const cart = useAppSelector((state: RootState) => state.cart);
    const dispatch = useAppDispatch();

    const handlerClearCart = () => {
        dispatch(clearCart());
    }

    const handleDecrement = (item: ItemCart) => {
        dispatch(decrement(item));
    }

    const handleIncrement = (item: ItemCart) => {
        dispatch(increment(item));
    }

    const handleOnChangeQty = (id: string, qty: number) => {
        dispatch(updateQuantity({id, qty}));
    }

    const handleUpdateStock = () => {
        cart.items.map((item) => {
            dispatch(updateProductStock({id: item.id, quantity: item.quantity}));
        });
        dispatch(clearCart());
    }

    return (
        <div className="px-4 py-3 bg-light rounded-xl shadow h-full">
            {cart.items.length === 0 ?
            <p className="color-primary font-600">No products selected</p>
            :
            (<div>
                <h3 className="color-primary mb-4">Shopping Cart</h3>
                <div className="flex justify-end mb-2">
                    <Button label="Clear Cart" onClick={handlerClearCart} />
                </div>
                <div className="flex column scroll-y h-65vh p-1">
                    {cart.items.map((item) => (
                        <CartItem
                            key={item.id}
                            product={item}
                            handleIncrement={handleIncrement}
                            handleDecrement={handleDecrement}
                            onChangeQuantity={handleOnChangeQty}
                        />
                    ))}
                </div>
                <div className="flex row justify-center mt-4 bottom-1">
                    <Button onClick={handleUpdateStock} label={`Charge $${cart.total}`} />
                </div>
            </div>)}
        </div>
    )
}

export default Cart;