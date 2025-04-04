/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

const Pagination = () => {
  const [data, setData] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [cachedData, setCachedData] = useState({});
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const getDataList = () => {
    if (cachedData[page]) {
      console.log(cachedData[page], "lkjhgfdsa");

      setData(cachedData[page]);
      return;
    }

    // http://localhost:5000/products/${page}
    fetch(
      `https://dummyjson.com/products?limit=${pageSize}&skip=${
        (page - 1) * pageSize
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data.products); // Store only products
        setTotalItems(data.total);
        setCachedData((prevCache) => ({
          ...prevCache,
          [page]: data.products,
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const totalPages = Math.ceil(totalItems / pageSize);

  useEffect(() => {
    getDataList();
  }, [page]);

  return (
    <div>
      <h2>Paginated Products</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <strong>{item.title}</strong> - ${item.price}
          </li>
        ))}
      </ul>
      <div>
        <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))}>
          prev
        </button>
        <span>
          page{page} totalpageSize {pageSize}
        </span>
        <button
          onClick={() => {
            setPage((prev) => Math.min(prev + 1, totalPages));
          }}
          disabled={page === totalPages}
        >
          prev
        </button>
      </div>
    </div>
  );
};

export default Pagination;
