import { ItemCart } from '../@types/ItemCard';
import regularIcon from '../assets/apple-whole-solid.svg'
import InputCounter from './InputCounter';

interface Props {
    product: ItemCart;
    handleIncrement: (item: ItemCart) => void;
    handleDecrement: (item: ItemCart) => void;
    onChangeQuantity: (id: string, qty: number) => void;
}

const CartItem: React.FC<Props> = ({ product, handleIncrement, handleDecrement, onChangeQuantity }) => {

  const incrementQty = () => {
    handleIncrement(product);
  }

  const decrementQty = () => {
    handleDecrement(product);
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeQuantity(product.id, Number(e.target.value));
  }

  return (
    <div className='flex row shadow-2 rounded-xl my-2 p-2'>
        <div className='w-15 flex'>
          <img src={product.image ?? regularIcon} className='w-8' />
        </div>
        <div className='flex column w-60 mx-2 mb-2'>
            <p className='color-primary text-base font-600'>{product.name}</p>
            <InputCounter value={product.quantity} onChange={handleOnChange} handleIncrement={incrementQty} handleDecrement={decrementQty} />
        </div>
        <div className="w-25">
          <h4 className='color-primary'>{product.price}</h4>
        </div>
    </div>
  )
}

export default CartItem;