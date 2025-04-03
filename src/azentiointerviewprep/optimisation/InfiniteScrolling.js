import React, { useEffect, useRef, useState } from "react";

const fetchedData = (start, limit) => {
  return Array.from(
    { length: limit },
    (_, index) => `item${start + index + 1}`
  );
};
const InfiniteScrolling = () => {
  const [items, setItems] = useState(fetchedData(0, 50));
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  //   const loader = useRef(null);

  const loadMoreData = () => {
    console.log("data fetched");

    if (isLoading) return;
    setIsLoading(true);
    setTimeout(() => {
      setItems((prev) => [...prev, ...fetchedData(page * 50, 50)]);
      setPage((prev) => prev + 1);
      setIsLoading(false);
    }, 1000);
  };

  //?   using IntersectionObserver
  //   useEffect(() => {
  //     const observer = new IntersectionObserver(
  //       (entries) => {
  //         if (entries[0].isIntersecting) {
  //           loadMoreData();
  //         }
  //       }
  //       //   { threshold: 1.0 }
  //     );
  //     if (loader.current) {
  //       observer.observe(loader.current);
  //     }
  //     return () => observer.disconnect();
  //   }, [items]);

  //?   using onscroll

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 10 &&
        !isLoading
      ) {
        loadMoreData();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);
  return (
    // <div>
    //   <ul>
    //     {items.map((item, index) => (
    //       <li key={index} ref={index === items.length - 1 ? loader : null}>
    //         {item}
    //       </li>
    //     ))}
    //   </ul>
    //   <p>Loading more items...</p>
    // </div>
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {isLoading && <p>Loading more items...</p>}
    </div>
  );
};

export default InfiniteScrolling;
