import { useState } from "react";
import {v4 as uuidv4} from 'uuid';
import { Product } from "../../@types/Product";
import { addProducts } from "../../store/features/products/products.slice";
import { useAppDispatch } from "../../store/hooks";
import InputBox from "../../components/InputBox";
import Button from "../../components/Button";
import addIcon from "../../assets/plus-solid.svg";

const ProductAdmin: React.FC = () => {
    const [ product, setProduct ] = useState<Product>({id: '', name: '', price: 0, amount: 0});

    const dispatch = useAppDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    }

    const handleAddProduct = () => {
        const uuid = uuidv4();
        const newProduct = { ...product, id: uuid };

        if (newProduct.price > 0 && newProduct.amount > 0 && newProduct.name && newProduct.id) {
            dispatch(addProducts(newProduct));
            
            setProduct({ id: '', name: '', price: 0, amount: 0 });
        }
    };

    return (
        <div className="px-4">
            <div className="px-4 py-3 mx-1 bg-light rounded-xl shadow glass">
                <h1 className="color-primary mb-4">Create Product</h1>
                <InputBox name="name" type="text" placeholder="Name" value={product.name} onChange={handleChange} />
                <div className="flex row w-full gap-4">
                    <InputBox name="price" type="number" placeholder="Price" value={String(product.price)} onChange={handleChange} />
                    <InputBox name="amount" type="number" placeholder="Stock" value={String(product.amount)} onChange={handleChange} />
                </div>
                <Button text="Add Product" srcIcon={addIcon} onClick={handleAddProduct} />
            </div>
        </div>
    )
}

export default ProductAdmin;