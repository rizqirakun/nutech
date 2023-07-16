'use client';
import { IProduct, IProductFormResponse } from '@/interfaces/IProduct';
import { useRouter } from 'next/navigation';
import { SyntheticEvent, useState } from 'react';

export default function AddProduct() {
  const [name, setName] = useState('');
  const [buyPrice, setBuyPrice] = useState(0);
  const [sellPrice, setSellPrice] = useState(0);
  const [image, setImage] = useState('');
  const [stock, setStock] = useState(0);

  const [messages, setMessages] = useState<string[]>([]);
  const [success, setSuccess] = useState(false);
  const [isMutating, setIsMutating] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    setIsMutating(true);

    const productData: IProduct = {
      name,
      buy_price: buyPrice,
      sell_price: sellPrice,
      image,
      stock,
    };
    console.log(productData);

    const res = await fetch(`/api/products`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(productData),
    });

    const { msg, success }: IProductFormResponse = await res.json();
    console.log(msg, success);
    setMessages(msg);
    setSuccess(success);

    if (success) {
      formReset();
    }
  };

  const formReset = async () => {
    setName('');
    setBuyPrice(0);
    setSellPrice(0);
    setImage('');
    setStock(0);

    toggleModal(false);
    router.refresh();
    setIsMutating(false);
  };

  const modalSelector = 'modal-add-product';
  const toggleModal = (toggle: boolean = false) => {
    if (!document) {
      return;
    }

    let modal = document.getElementById(modalSelector) as HTMLFormElement;
    if (toggle) {
      modal.showModal();
    } else {
      modal.close();
    }
  };

  return (
    <>
      <button className="btn" onClick={() => toggleModal(true)}>
        Add New Product
      </button>

      <dialog id={modalSelector} className="modal modal-bottom sm:modal-middle">
        <form
          method="dialog"
          className="modal-box w-11/12 max-w-5xl"
          onSubmit={handleSubmit}
        >
          <button
            type="button"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => toggleModal(false)}
          >
            ✕
          </button>

          <div>
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

            {!isMutating ? (
              <button type="submit" className="btn btn-primary">
                Save Product
              </button>
            ) : (
              <button type="button" className="btn loading">
                Saving...
              </button>
            )}
          </div>

          <div className="bg-slate-100">
            {messages &&
              messages.map((message, index) => {
                return (
                  <div
                    key={`msg-${index}`}
                    className={`${success ? 'text-green-600' : 'text-red-600'}`}
                  >
                    {message}
                  </div>
                );
              })}
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
