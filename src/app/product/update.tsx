'use client';
import { IProduct, IProductFormResponse } from '@/interfaces/IProduct';
import { useRouter } from 'next/navigation';
import { SyntheticEvent, useState } from 'react';

export default function UpdateProduct(product: IProduct) {
  const [name, setName] = useState(product.name);
  const [buyPrice, setBuyPrice] = useState(product.buy_price);
  const [sellPrice, setSellPrice] = useState(product.sell_price);
  const [image, setImage] = useState(product.image);
  const [stock, setStock] = useState(product.stock);

  const [messages, setMessages] = useState<string[]>([]);
  const [success, setSuccess] = useState(false);
  const [isMutating, setIsMutating] = useState(false);

  const router = useRouter();

  const handleUpdate = async (e: SyntheticEvent) => {
    e.preventDefault();

    setIsMutating(true);

    const productData: IProduct = {
      name,
      buy_price: buyPrice,
      sell_price: sellPrice,
      image,
      stock,
    };

    const res = await fetch(`/api/products/${product.name}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(productData),
    });

    const { msg, success }: IProductFormResponse = await res.json();
    console.log(msg, success);
    setMessages(msg);
    setSuccess(success);

    formRefresh();
  };

  const formReset = async () => {
    setMessages([]);
    setSuccess(false);
  };

  const formRefresh = async () => {
    router.refresh();
    setIsMutating(false);
  };

  const modalSelector = `modal-update-product-${product.name}`;
  const toggleModal = (toggle: boolean = false) => {
    if (!document) {
      return;
    }

    let modal = document.getElementById(modalSelector) as HTMLFormElement;
    if (toggle) {
      modal.showModal();
    } else {
      modal.close();
      formReset();
    }
  };

  return (
    <>
      <button
        className="btn btn-sm btn-success"
        onClick={() => toggleModal(true)}
      >
        Edit
      </button>

      <dialog id={modalSelector} className="modal modal-bottom sm:modal-middle">
        <form
          method="dialog"
          className="modal-box w-11/12 max-w-5xl"
          onSubmit={handleUpdate}
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
              <label htmlFor="name" className="label">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Product..."
                className="input input-bordered w-full"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div>
              <label htmlFor="buy-price" className="label">
                Buy Price
              </label>
              <input
                type="number"
                id="buy-price"
                placeholder="Rp 0"
                className="input input-bordered w-full"
                onChange={(e) => setBuyPrice(+e.target.value)}
                value={buyPrice}
              />
            </div>
            <div>
              <label htmlFor="sell-price" className="label">
                Sell Price
              </label>
              <input
                type="number"
                id="sell-price"
                placeholder="Rp 0"
                className="input input-bordered w-full"
                onChange={(e) => setSellPrice(+e.target.value)}
                value={sellPrice}
              />
            </div>
            <div>
              <label htmlFor="image" className="label">
                Image
              </label>
              <input
                type="text"
                id="image"
                placeholder="Link..."
                className="input input-bordered w-full"
                onChange={(e) => setImage(e.target.value)}
                value={image}
              />
            </div>
            <div>
              <label htmlFor="stock" className="label">
                Stock
              </label>
              <input
                type="number"
                id="stock"
                placeholder="Qty 0"
                className="input input-bordered w-full"
                onChange={(e) => setStock(+e.target.value)}
                value={stock}
              />
            </div>

            <div className="mt-8">
              {!isMutating ? (
                <button type="submit" className="btn btn-success btn-block">
                  Save
                </button>
              ) : (
                <button type="button" className="btn loading">
                  Saving...
                </button>
              )}
            </div>
          </div>

          <div className="rounded-lg mt-4">
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
