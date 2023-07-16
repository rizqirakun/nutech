'use client';
import { IProduct } from '@/interfaces/IProduct';
import { useState } from 'react';

export default function ProductForm() {
  const [name, setName] = useState('');
  const [buyPrice, setBuyPrice] = useState(0);
  const [sellPrice, setSellPrice] = useState(0);
  const [image, setImage] = useState('');
  const [stock, setStock] = useState(0);
  const [message, setMessage] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const productData: IProduct = {
      name,
      buy_price: buyPrice,
      sell_price: sellPrice,
      image,
      stock,
    };
    console.log(productData);

    const res = await fetch('api/products', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(productData),
    });

    const { msg, success } = await res.json();
    console.log(msg, success);
    setMessage(msg);
    setSuccess(success);

    if (success) {
      setName('');
      setBuyPrice(0);
      setSellPrice(0);
      setImage('');
      setStock(0);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Product Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div>
          <label htmlFor="buy-price">Buy Price</label>
          <input
            type="number"
            id="buy-price"
            placeholder="Rp 0"
            onChange={(e) => setBuyPrice(+e.target.value)}
            value={buyPrice}
          />
        </div>
        <div>
          <label htmlFor="sell-price">Sell Price</label>
          <input
            type="number"
            id="sell-price"
            placeholder="Rp 0"
            onChange={(e) => setSellPrice(+e.target.value)}
            value={sellPrice}
          />
        </div>
        <div>
          <label htmlFor="image">Image</label>
          <input
            type="text"
            id="image"
            placeholder="Image Link"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </div>
        <div>
          <label htmlFor="stock">Stock</label>
          <input
            type="number"
            id="stock"
            placeholder="Qty 0"
            onChange={(e) => setStock(+e.target.value)}
            value={stock}
          />
        </div>

        <button className="btn bg-green-700" type="submit">
          Send Request
        </button>
      </form>

      <div className="bg-slate-100">
        {message &&
          message.map((e: any, i) => {
            return (
              <div
                key={i}
                className={`${success ? 'text-green-600' : 'text-red-600'}`}
              >
                {e}
              </div>
            );
          })}
      </div>
    </>
  );
}
