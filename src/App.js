import Autocomplete from "./component/autocomplete/Autocomplete";
import Pagination from "./component/Pagination";
import "./App.css";
import User from "./component/hoc/User";
import HOC from "./component/hoc/HOC";
import ContextAPI from "./component/contextapi/ContextAPI";
import LazyLoadingComp from "./component/lazyloading/LazyLoadingComp";
import Main from "./component/memoization/ChildComponent";
import Example2 from "./component/memoization/Example2";
import FetchApiUsingMemo from "./component/memoization/FetchApiUsingMemo";
import Example1Parent from "./component/usecallbackexamples/Example1Parent";
function App() {
  const UdatedComp = HOC(User);
  return (
    <div className="./App.css">
      {/* <Pagination /> */}
      {/* <Autocomplete /> */}
      {/* <UdatedComp name="Aamir Hussain" /> */}
      {/* <ContextAPI /> */}
      {/* <LazyLoadingComp /> */}
      {/* <Main /> */}
      {/* <Example2 /> */}
      {/* <FetchApiUsingMemo /> */}
      <Example1Parent />
    </div>
  );
}

export default App;
