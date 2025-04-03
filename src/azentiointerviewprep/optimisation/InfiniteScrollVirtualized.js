import React, { useCallback, useEffect, useRef, useState } from "react";
import { FixedSizeList as List } from "react-window";

const fetchedData = (start, limit) => {
  return Array.from(
    { length: limit },
    (_, index) => `Items${start + index + 1}`
  );
};

const InfiniteScrollVirtualized = () => {
  const [items, setItems] = useState(fetchedData(0, 50));
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const loader = useRef(null);

  const loadMoreItems = useCallback(() => {
    console.log("lkjhgfds");

    if (loading) return;
    setLoading(true);
    setTimeout(() => {
      setItems((prev) => [...prev, ...fetchedData(page * 50, 50)]);
      setPage((prev) => prev + 1);
      setLoading(false);
    }, 1000);
  }, [page, loading]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !loading) {
        loadMoreItems();
      }
    });
    if (loader.current) observer.observe(loader.current);

    return () => observer.disconnect();
  }, [loadMoreItems, loading]);

  const Row = ({ index }) => {
    return (
      <div ref={index === items.length - 1 ? loader : null}>{items[index]}</div>
    );
  };

  return (
    <div>
      <List height={400} width={"100%"} itemCount={items.length} itemSize={20}>
        {Row}
      </List>
      {loading && <p>Loading more items...</p>}
    </div>
  );
};

export default InfiniteScrollVirtualized;
