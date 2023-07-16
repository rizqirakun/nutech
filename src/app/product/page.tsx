// import Image from 'next/image'

import ProductForm from '@/components/ProductForm';

export default function ProductList() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        test product
        <button className="btn">Start</button>
      </div>

      <div>
        <ProductForm />
      </div>
    </main>
  );
}
