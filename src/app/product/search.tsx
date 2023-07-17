'use client';
import { useState } from 'react';

export default function SearchProduct() {
  const [search, setSearch] = useState('');

  return (
    <>
      <div className="join">
        <div>
          <div>
            <input
              className="input input-bordered join-item"
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </div>
        </div>
        <div className="indicator">
          <button className="btn join-item">Search</button>
        </div>
      </div>
    </>
  );
}
