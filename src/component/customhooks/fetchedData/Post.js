import React, { useState } from "react";
import useFetch from "./useFetch";

const Post = () => {
  const [query, setQuery] = useState("");
  const { data, error, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/comments"
  );

  if (loading) return <p>....LOding</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <>
      <ul>
        {data.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Post;
