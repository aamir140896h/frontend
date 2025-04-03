import React, { useState, useEffect, useMemo, useCallback } from "react";

// Memoized ProductList component (only re-renders when products change)
const ProductList = React.memo(({ products, addToCart }) => {
  console.log("ProductList re-rendered!");

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} - ${product.price}
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </li>
      ))}
    </ul>
  );
});

const Optimzation = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  // Fetch products (simulated API call)
  useEffect(() => {
    setTimeout(() => {
      setProducts([
        { id: 1, name: "Laptop", price: 1000 },
        { id: 2, name: "Phone", price: 500 },
        { id: 3, name: "Tablet", price: 300 },
      ]);
    }, 1000);
  }, []);

  // Memoize filtered products (avoids unnecessary filtering)
  const filteredProducts = useMemo(() => {
    console.log("Filtering products...");
    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

  // Memoize addToCart function to prevent unnecessary re-creations
  const addToCart = useCallback((product) => {
    setCart((prevCart) => [...prevCart, product]);
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ProductList products={filteredProducts} addToCart={addToCart} />
      <h3>Cart: {cart.length} items</h3>
    </div>
  );
};

export default Optimzation;
