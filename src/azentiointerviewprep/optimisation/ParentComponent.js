import { useCallback, useState } from "react";
import ChildComponent from "./ChildComponent";
import ExpensiveCalulation from "./ChildComponent";
import Button from "./ChildComponent";

const ParentComponent = () => {
  //? useCase of React.memo
  //   const [count, setCount] = useState(0);
  //   const [otherState, setOtherState] = useState(0);

  //? useCase of useMemo
  const [num, setNum] = useState(2);
  const [random, setRandom] = useState(0);

  //? useCase of useCallBack()
  // const [count, setCount] = useState(0);
  // const [random, setRandom] = useState(0);

  // const increament = useCallback(() => {
  //   setCount((prev) => prev + 1);
  // }, []);

  return (
    //? useCase of React.memo
    // <div>
    //   <h1>Parent Component</h1>
    //   <button onClick={() => setCount(count + 1)}>Increamnet Count</button>
    //   <button onClick={() => setOtherState(otherState + 1)}>
    //     Change Other state {otherState}
    //   </button>
    //   <ChildComponent count={count} />
    // </div>

    //? useCase of useMemo
    <div>
      <h1>Parent Component</h1>
      <button onClick={() => setNum(num * 2)}>Increamnet Count</button>
      <button
        onClick={() => setRandom(((Math.random() + 1) * 1000).toFixed(2))}
      >
        Change Random{random}
      </button>
      {/* <ChildComponent count={count} /> */}
      <ExpensiveCalulation num={num} />
    </div>

    //? useCase of useCallback
    // <div>
    //   <h1>Parent Component</h1>
    //   <p>{count}</p>
    //   <Button handleClick={increament} />
    //   <button onClick={() => setRandom((prev) => prev + 2)}>
    //     Change Random{random}
    //   </button>
    // </div>
  );
};

export default ParentComponent;
