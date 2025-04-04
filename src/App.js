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
import CodeReviewFeedback from "./component/Feedback";
import ParentComponent from "./azentiointerviewprep/optimisation/ParentComponent";
import withAuth from "./component/hoc/withAuth";
import Dashboard from "./component/hoc/Dashboard";
import Optimzation from "./azentiointerviewprep/optimisation/Optimzation";
import LargeList from "./azentiointerviewprep/optimisation/Virtualization";
import VirtualizedList from "./azentiointerviewprep/optimisation/Virtualization";
import InfiniteScrolling from "./azentiointerviewprep/optimisation/InfiniteScrolling";
import InfiniteScrollVirtualized from "./azentiointerviewprep/optimisation/InfiniteScrollVirtualized";
import SecureComentBox from "./azentiointerviewprep/security/SecureComentBox";
import { Provider } from "react-redux";
import Counter from "./redux/Counter";
import store from "./redux/store";
import Multiplication from "./redux/Multiplication";
import PostList from "./redux/PostList";
function App() {
  // const UdatedComp = HOC(User);
  const ProtactedDashBoard = withAuth(Dashboard);
  return (
    <div className="./App.css">
      <Pagination />
      {/* <Autocomplete /> */}
      {/* <UdatedComp name="Aamir Hussain" /> */}
      {/* <ContextAPI /> */}
      {/* <LazyLoadingComp /> */}
      {/* <Main /> */}
      {/* <Example2 /> */}
      {/* <FetchApiUsingMemo /> */}
      {/* <Example1Parent /> */}
      {/* <UseMemoMain /> */}
      {/* <UseCallBackExample /> */}
      {/* <TodoList /> */}
      {/* <ToggleComponent /> */}
      {/* <Post /> */}
      {/* <Searche /> */}
      {/* <Maincomonent /> */}
      {/* <CodeReviewFeedback /> */}
      {/* <ParentComponent /> */}
      {/* <User /> */}
      {/* <ProtactedDashBoard /> */}
      {/* <Optimzation /> */}
      {/* <LargeList /> */}
      {/* <VirtualizedList /> */}
      {/* <InfiniteScrolling /> */}
      {/* <InfiniteScrollVirtualized /> */}
      {/* <SecureComentBox /> */}

      {/* <Provider store={store}>
        <Counter />
        <Multiplication />
        <PostList />
      </Provider> */}
    </div>
  );
}

export default App;
