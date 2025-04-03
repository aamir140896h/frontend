import React from "react";
import { FixedSizeList as List } from "react-window";

const items = Array.from({ length: 10000 }, (_, index) => `Item ${index + 1}`);

const Row = ({ index, styles }) => {
  return <div>{items[index]}</div>;
};

// function LargeList() {
//   return (
//     <ul>
//       {items.map((item, index) => (
//         <li key={index}>{item}</li>
//       ))}
//     </ul>
//   );
// }

// export default LargeList;

const VirtualizedList = () => {
  return (
    <List height={400} itemCount={items.length} itemSize={25} width={"100%"}>
      {Row}
    </List>
  );
};

export default VirtualizedList;
