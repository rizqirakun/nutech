import { IProduct, IProductFormResponse } from '@/interfaces/IProduct';
import connectDB from '@/lib/mongodb';
import Product from '@/models/product';
import mongoose from 'mongoose';
import { NextRequest, NextResponse } from 'next/server';

type getpaginateOptions = { page: number; limit: number; search?: string };

// GET BASE_URL/api/products
export async function GET() {
  // TODO search & pagination
  // const { search } = params;

  let options: getpaginateOptions = {
    page: 1,
    limit: 1000,
  };

  // if (!!search) {
  //   options.search = search;
  // }

  try {
    await connectDB();
    const result = await Product.paginate(options);
    return NextResponse.json(result);
  } catch (err) {
    return NextResponse.json([]);
  }
}

// POST BASE_URL/api/products
export async function POST(req: NextRequest) {
  const { name, buy_price, sell_price, image, stock }: IProduct =
    await req.json();

  let response: IProductFormResponse = {
    msg: [],
    success: false,
  };

  try {
    await connectDB();
    await Product.create({ name, buy_price, sell_price, image, stock });
    response.msg = ['Product successfully saved'];
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
      response.msg = ['Unable to save product.'];
    }
  } finally {
    return NextResponse.json(response);
  }
}

// PATCH BASE_URL/api/products
export async function PATCH(req: NextRequest) {
  return NextResponse.json(
    { error: 'Access not allowed' },
    {
      status: 400,
    },
  );
}

// PUT BASE_URL/api/products
export async function PUT(req: NextRequest) {
  return NextResponse.json(
    { error: 'Access not allowed' },
    {
      status: 400,
    },
  );
}

// DELETE BASE_URL/api/products
export async function DELETE(req: NextRequest) {
  return NextResponse.json(
    { error: 'Access not allowed' },
    {
      status: 400,
    },
  );
}
