import { Product } from '../@types/Product';
import '../styles/components/ProductListItem.scss';
import imageRegular from '../assets/apple-whole-solid.svg';
import plusIcon from '../assets/plus-solid.svg';

interface Props {
    product: Product;
    handleAddToCart: (id: string) => void;
    handleNavigate: (id: string) => void;
}

const ProductListItem: React.FC<Props> = ({ product, handleAddToCart, handleNavigate }) => {
  return (
    <div className="container glass">
        <img src={product.image ?? imageRegular} height="64px" alt="Image product" className="width-full drop-shadow -mt-2" />
        <div className="container--content">
          <h3>
            <a
              onClick={() => handleNavigate(product.id)}
              className="container--content--title"
            >
              {product.name}
            </a>
          </h3>
          <h5 className='color-teal'>Stock: {product.amount}</h5>

            <div className="container--content--bottom">
                <p className='font-600'>{`$${product.price}`}</p>
                <button
                  className="btn-rounded-full no-border pointer"
                  onClick={() => handleAddToCart(product.id)}
                >
                    <img src={plusIcon} width={22} height={22} />
                </button>
            </div>
        </div>
    </div>
  )
}

export default ProductListItem;