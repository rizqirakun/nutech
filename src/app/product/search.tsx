'use client';
import { useState } from 'react';

import { changeSearch, reset } from '@/redux/features/productSearchSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
export default function SearchProduct() {
  const [searchText, setSearchText] = useState('');

  const globalSearch = useAppSelector(
    (state) => state.productSearchReducer.value,
  );
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="join">
        <div>
          <div>
            <input
              className="input input-bordered join-item"
              placeholder="Search..."
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
            />
          </div>
        </div>
        <div className="indicator">
          <button
            className="btn join-item"
            onClick={() => dispatch(changeSearch(searchText))}
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
}
