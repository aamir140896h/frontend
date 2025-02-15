import React, { useEffect, useMemo, useState } from "react";

const FetchApiUsingMemo = () => {
  const [fetchedData, setFetchedDAata] = useState([]);

  const sortedData = useMemo(() => {
    console.log("Meme Function");
    return fetchedData.sort((a, b) => a.userId - b.userId);
  }, [fetchedData]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch("https://jsonplaceholder.typicode.com/posts");
        const response = await data.json();
        setFetchedDAata(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h3>Fetched Data</h3>
      <ul>
        {sortedData.map((items) => (
          <li>
            ({items.id}){items.title}.
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchApiUsingMemo;
