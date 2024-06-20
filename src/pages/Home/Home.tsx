import { useEffect, useState } from "react";
import Cart from "../../components/Cart";
import ProductList from "../../components/ProductList";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchProducts } from "../../store/features/products/products.thunk";
import { RootState } from "../../store/store";
import { Product } from "../../@types/Product";

const Home: React.FC = () => {
  const [ showCart, setShowCart ] = useState<boolean>(false);
  const products: Product[] = useAppSelector((state: RootState) => state.products.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleCart = () => {
    setShowCart(!showCart);
  }

  return (
    <div className="w-full flex column justify-center items-center">
      <ProductList products={products as Product[]} handleCart={handleCart} />
      <div className={`${showCart ? '' : 'none'} fixed right-4 bottom-16 h-80`}>
        <Cart />
      </div>
    </div>
  )
}

export default Home;