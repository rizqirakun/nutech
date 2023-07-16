import connectDB from '@/lib/mongodb';
import Product from '@/models/product';
import mongoose from 'mongoose';
import { NextRequest, NextResponse } from 'next/server';

// Notice the funciton definiton:
export async function GET(req: NextRequest) {
  return NextResponse.json(
    { error: 'Method not allowed' },
    {
      status: 400,
    },
  );
}

export async function POST(req: NextRequest) {
  const { name, buy_price, sell_price, image, stock } = await req.json();

  console.log(name, buy_price, sell_price, image, stock);

  try {
    await connectDB();
    await Product.create({ name, buy_price, sell_price, image, stock });
    return NextResponse.json({
      msg: ['Message sent successfully'],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }

      return NextResponse.json({ msg: errorList, success: false });
    } else {
      console.log(error);
      return NextResponse.json({
        msg: ['Unable to send message.'],
        success: false,
      });
    }
  }
}
