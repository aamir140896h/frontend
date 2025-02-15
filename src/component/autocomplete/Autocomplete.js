import React, { useEffect, useState } from "react";
import "./index.css";

const Autocomplete = () => {
  const [resultData, setResultData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isShow, setIsShow] = useState(false);
  const [cachedData, setcachedData] = useState({});

  const fetchData = async () => {
    if (cachedData[searchText]) {
      setResultData(cachedData[searchText]);
      return;
    }
    const result = await fetch(
      `https://dummyjson.com/products/search?q=${searchText}`
    );
    console.log(result);
    const jsonData = await result.json();
    console.log(jsonData.products);
    setResultData(jsonData.products);
    setcachedData((prev) => ({
      ...prev,
      [searchText]: jsonData.products,
    }));
  };
  console.log(resultData);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData();
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "50px",
      }}
    >
      {/* Search Input */}
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        style={{
          width: "500px",
          padding: "10px",
          fontSize: "16px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          outline: "none",
          boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
        }}
        onFocus={() => setIsShow(true)}
        onBlur={() => setTimeout(() => setIsShow(false), 200)} // Delay to allow clicking items
        placeholder="Search for a product..."
      />

      {/* Results Dropdown */}
      {isShow && resultData.length > 0 && (
        <div
          style={{
            width: "500px",
            maxHeight: "300px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            overflowY: "auto",
            // marginTop: "10px",
            boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
            backgroundColor: "#fff",
            zIndex: 1000,
          }}
        >
          {resultData.map((items) => (
            <div
              key={items.id}
              style={{
                padding: "6px",
                cursor: "pointer",
                fontSize: "16px",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#f0f0f0")}
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = "transparent")
              }
            >
              {items.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Autocomplete;
