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
import UseMemoMain from "./component/memoization/UseMemoMain";
import UseCallBackExample from "./component/usecallbackexamples/UseCallBackExample";
import TodoList from "./component/usecallbackexamples/UCTodoList";
import ToggleComponent from "./component/customhooks/toggle/ToggleComponent";
import Post from "./component/customhooks/fetchedData/Post";
import Searche from "./component/customhooks/debounce/Searche";
import Maincomonent from "./component/redux/Maincomonent";
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
      {/* <UseMemoMain /> */}
      {/* <UseCallBackExample /> */}
      {/* <TodoList /> */}
      {/* <ToggleComponent /> */}
      {/* <Post /> */}
      {/* <Searche /> */}
      {/* <Maincomonent /> */}
    </div>
  );
}

export default App;
