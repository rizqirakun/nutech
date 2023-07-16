import { IProduct } from '@/interfaces/IProduct';
import { Schema, model, models } from 'mongoose';

const productSchema = new Schema<IProduct>({
  name: {
    type: String,
    required: [true, 'Name is required.'],
    trim: true,
    minLength: [2, 'Name must be larger than 2 characters'],
    maxLength: [100, 'Name must be lesser than 100 characters'],
  },
  buy_price: {
    type: Number,
    required: [true, 'Buy price is required'],
  },
  sell_price: {
    type: Number,
    required: [true, 'Sell price is required'],
  },
  image: {
    type: String,
  },
  stock: {
    type: Number,
  },
});

// use existing schema before create one
const Product =
  models.Product<IProduct> || model<IProduct>('Product', productSchema);
export default Product;
