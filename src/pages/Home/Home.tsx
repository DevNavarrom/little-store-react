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

  const handleFetchProducts = () => {
    if (products.length === 0) dispatch(fetchProducts());
  }

  useEffect(() => {
    handleFetchProducts();
  }, []);

  const handleCart = () => {
    setShowCart(!showCart);
  }

  return (
    <div className="w-full flex column justify-center items-center">
      <ProductList products={products} handleCart={handleCart} />
      <div className={`${showCart ? '' : 'none'} fixed right-4 bottom-16 h-max-80 w-90-sm h-max-sm`}>
        <Cart />
      </div>
    </div>
  )
}

export default Home;