'use client';
import { IProduct } from '@/interfaces/IProduct';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function DeleteProduct(product: IProduct) {
  const [isMutating, setIsMutating] = useState(false);

  const router = useRouter();

  const handleDelete = async (productName: string) => {
    setIsMutating(true);

    const res = await fetch(`/api/products/${productName}`, {
      method: 'DELETE',
    });

    formRefresh();
  };

  const formRefresh = async () => {
    toggleModal(false);
    router.refresh();
    setIsMutating(false);
  };

  const modalSelector = `modal-delete-product-${product.name}`;
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
      <button
        className="btn btn-error btn-sm"
        onClick={() => toggleModal(true)}
      >
        Delete
      </button>

      <dialog id={modalSelector} className="modal modal-bottom sm:modal-middle">
        <form method="dialog" className="modal-box w-11/12 max-w-5xl">
          {/* <button type="button" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>✕</button> */}

          <h3>Are you sure to delete {product.name}</h3>
          <div className="modal-action">
            <button
              type="button"
              className="btn"
              onClick={() => toggleModal(false)}
            >
              Close
            </button>
            {!isMutating ? (
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => handleDelete(product.name)}
              >
                Delete Product
              </button>
            ) : (
              <button type="button" className="btn loading">
                Deleting...
              </button>
            )}
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
