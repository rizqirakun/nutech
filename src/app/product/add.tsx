'use client';
import Uploader from '@/components/Uploader';
import { IProduct, IProductFormResponse } from '@/interfaces/IProduct';
import { useRouter } from 'next/navigation';
import { SyntheticEvent, useState } from 'react';

import { changeUrl, reset } from '@/redux/features/productImageSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

export default function AddProduct() {
  const image = useAppSelector((state) => state.productImageReducer.value);
  const dispatch = useAppDispatch();

  const [name, setName] = useState('');
  const [buyPrice, setBuyPrice] = useState(0);
  const [sellPrice, setSellPrice] = useState(0);
  // const [image, setImage] = useState('');
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
      formRefresh();
    }

    setIsMutating(false);
  };

  const formReset = async () => {
    setName('');
    setBuyPrice(0);
    setSellPrice(0);
    // setImage('');
    dispatch(reset());
    setStock(0);

    setMessages([]);
    setSuccess(false);
  };

  const formRefresh = async () => {
    toggleModal(false);
    router.refresh();
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
      formReset();
    }
  };

  return (
    <>
      <button className="btn btn-info" onClick={() => toggleModal(true)}>
        Add Product
      </button>

      <dialog id={modalSelector} className="modal modal-bottom sm:modal-middle">
        <form method="dialog" className="modal-box w-11/12 max-w-5xl">
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
              <Uploader />
              <input
                type="text"
                id="image"
                placeholder="<image>"
                readOnly
                className="input input-sm text-center w-full mt-2"
                // onChange={(e) => setImage(e.target.value)}
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
                <button
                  type="button"
                  className="btn btn-info btn-block"
                  onClick={handleSubmit}
                >
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
