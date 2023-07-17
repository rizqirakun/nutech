import { IProductPaginate } from '@/interfaces/IProduct';
import { Schema, model, models } from 'mongoose';
import { mongoosePagination, Pagination } from 'mongoose-paginate-ts';

// init schema
const productSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required.'],
    trim: true,
    minLength: [2, 'Name must be larger than 2 characters'],
    maxLength: [100, 'Name must be lesser than 100 characters'],
    unique: true,
  },
  buy_price: {
    type: Number,
    required: [true, 'Buy price is required'],
    min: [1, 'Buy price must be larger than 0'],
  },
  sell_price: {
    type: Number,
    required: [true, 'Sell price is required'],
    min: [1, 'Sell price must be larger than 0'],
  },
  image: {
    type: String,
  },
  stock: {
    type: Number,
    min: [0, 'Minimum product stock is 0'],
  },
});

// extend mongoose paginate
productSchema.plugin(mongoosePagination);

// use existing schema before create one
// const Product: Pagination<IProductPaginate> =model<IProductPaginate, Pagination<IProductPaginate>>('Product', productSchema);
const Product: any =
  models.Product ||
  model<IProductPaginate, Pagination<IProductPaginate>>(
    'Product',
    productSchema,
  );

export default Product;
