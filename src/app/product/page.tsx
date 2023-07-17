// import Image from 'next/image'

import AddProduct from '@/app/product/add';
import { IProduct } from '@/interfaces/IProduct';
import { GET } from '../api/products/route';
import SearchProduct from '@/app/product/search';
import UpdateProduct from '@/app/product/update';
import DeleteProduct from '@/app/product/delete';

export const revalidate = 0; // revalidate this page every seconds
export const metadata = {
  title: 'Product Page',
};

async function getProducts() {
  // const params = { search: '' };
  const res = await GET();
  return await res.json();
}

export default async function PageProduct() {
  const products: IProduct[] = await getProducts().then((products) => {
    return products.docs;
  });

  return (
    <main className="flex min-h-screen w-full sm:w-11/12 flex-col items-center p-6 sm:p-24 gap-y-8">
      <div className="flex w-full flex-row justify-between items-center">
        <SearchProduct />
        <AddProduct />
      </div>
      <div className="w-full overflow-x-auto ">
        <table className="table">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" disabled />
                </label>
              </th>
              <th>Name</th>
              <th className="text-right">Buy Price</th>
              <th className="text-right">Sell Price</th>
              <th className="text-right w-72"></th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product, index) => (
              <tr key={`product-${index}`}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" disabled />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        {!!product.image ? (
                          <img src={product.image} alt={product.image} />
                        ) : (
                          <div className="flex items-center justify-center bg-white/10 w-12 h-12">
                            {product.name.charAt(0)}
                          </div>
                        )}
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{product.name}</div>
                      <div className="text-sm opacity-50">
                        Qty: {product.stock}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-right">Rp. {product.buy_price}</td>
                <td className="text-right">Rp. {product.sell_price}</td>
                <td>
                  <div className="flex justify-end gap-2">
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
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </tfoot>
        </table>

        <div className="flex justify-end">
          <div className="join">
            <button className="join-item btn">1</button>
            <button className="join-item btn btn-active">2</button>
            <button className="join-item btn">3</button>
            <button className="join-item btn">4</button>
          </div>
        </div>
      </div>
    </main>
  );
}
