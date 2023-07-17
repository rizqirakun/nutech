import { IProduct, IProductFormResponse } from '@/interfaces/IProduct';
import connectDB from '@/lib/mongodb';
import Product from '@/models/product';
import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';

// TODO redux search

// GET BASE_URL/api/products/<productName>
export async function GET(
  req: NextRequest,
  { params }: { params: { productName: string } },
) {
  const { productName } = params;

  const options = {
    name: productName,
  };

  await connectDB();
  const result = await Product.findOne(options);
  return NextResponse.json(result);
}

// DELETE BASE_URL/api/products/<productName>
export async function DELETE(
  req: NextRequest,
  { params }: { params: { productName: string } },
) {
  const { productName } = params;

  const options = {
    name: productName,
  };

  await connectDB();
  const result = await Product.deleteOne(options);
  return NextResponse.json(result);
}

// PATCH BASE_URL/api/products/<productName>
export async function PATCH(
  req: NextRequest,
  { params }: { params: { productName: string } },
) {
  const { productName } = params;
  const { name, buy_price, sell_price, image, stock }: IProduct =
    await req.json();
  const productData = { name, buy_price, sell_price, image, stock };

  let response: IProductFormResponse = {
    msg: [],
    success: false,
  };

  try {
    await connectDB();
    await Product.updateOne({ name: productName }, productData, {
      runValidators: true,
    });
    response.msg = ['Product successfully updated'];
    response.success = true;
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList: string[] = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }

      response.msg = errorList;
    } else {
      console.log(error);
      response.msg = ['Unable to update product.'];
    }
  } finally {
    return NextResponse.json(response);
  }
}
