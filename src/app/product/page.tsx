// import Image from 'next/image'

import AddProduct from '@/app/product/add';
import { IProduct } from '@/interfaces/IProduct';
import { GET } from '../api/products/route';
import UpdateProduct from '@/app/product/update';
import DeleteProduct from '@/app/product/delete';

export const revalidate = 0; // revalidate this page every seconds
export const metadata = {
  title: 'Product Page',
};

async function getProducts() {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, {
  //   method: 'GET',
  //   headers: {
  //     'Content-type': 'application/json',
  //   },
  //   cache: 'no-store',
  //   // next: {
  //   //   revalidate: 10
  //   // }
  // });

  const res = await GET();
  return await res.json();
}

export default async function PageProduct() {
  const products: IProduct[] = await getProducts().then((products) => {
    return products.docs;
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <AddProduct />
      </div>
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Buy Price</th>
              <th>Sell Price</th>
              <th>Stock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product, index) => (
              <tr key={`product-${index}`}>
                <th></th>
                <td>{product.name}</td>
                <td>{product.buy_price}</td>
                <td>{product.sell_price}</td>
                <td>{product.stock}</td>
                <td>
                  <div className="flex gap-1">
                    <UpdateProduct {...product} />
                    <DeleteProduct {...product} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Buy Price</th>
              <th>Sell Price</th>
              <th>Stock</th>
              <th>Action</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </main>
  );
}
