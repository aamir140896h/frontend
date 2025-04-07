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
import RenderPropPattern from "./component/RenderPropPattern";
import Debouncing from "./component/Debouncing";
import Throttling from "./component/Throttling";
import BreadCrumb from "./component/breadcrumbs/BreadCrumb";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BreadCrumbs from "./component/breadcrumbs/dynamicbreadcrumb/BreadCrumbs";
import Checkboxes from "./component/checkbox/Checkboxes";
import { useState } from "react";
import OTPInputs from "./component/otp/OTPInputs";
function App() {
  // const UdatedComp = HOC(User);
  const ProtactedDashBoard = withAuth(Dashboard);

  // Breadcrumbs
  // const path = [
  //   { label: "Home", href: "/" },
  //   { label: "Products", href: "/products" },
  //   { label: "Electronics", href: "/products/electronics" },
  //   { label: "Mobile Phone", href: "/products/electronics/mobiles" },
  // ];

  // checkboxesdata

  // const checkBoxItems = [
  //   {
  //     id: 1,
  //     label: "Fruits",
  //     children: [
  //       {
  //         id: 2,
  //         label: "Citrus",
  //         children: [
  //           { id: 3, label: "Orange" },
  //           { id: 4, label: "Lemon" },
  //         ],
  //       },
  //       {
  //         id: 5,
  //         label: "Berries",
  //         children: [
  //           { id: 6, label: "Strawberry" },
  //           { id: 7, label: "Blueberry" },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     id: 8,
  //     label: "Vegetables",
  //     children: [
  //       {
  //         id: 9,
  //         label: "Leafy",
  //         children: [
  //           { id: 10, label: "Spinach" },
  //           { id: 11, label: "Lettuce" },
  //         ],
  //       },
  //       {
  //         id: 12,
  //         label: "Root",
  //         children: [
  //           { id: 13, label: "Carrot" },
  //           { id: 14, label: "Beetroot" },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     id: 15,
  //     label: "Dairy",
  //   },
  // ];
  // const [checked, setChecked] = useState({});

  // OTP

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

      {/* example 1 */}
      {/* <RenderPropPattern
        render={(pos) => (
          <h2>
            Mouse Position : X - {pos.x}, Y-{pos.y}{" "}
          </h2>
        )}
      /> */}
      {/* example 2 */}
      {/* <RenderPropPattern
        render={(user) =>
          user.isLogedIn ? (
            <h1>Welcome {user.name}</h1>
          ) : (
            <h1> Please LogedIn</h1>
          )
        }
      /> */}
      {/* <RenderPropPattern
        render={(hover) => (
          <h1>{hover ? "You're hovering 🐭" : "Hover over me!"}</h1>
        )}
      /> */}
      {/* <Debouncing /> */}
      {/* <Throttling /> */}

      {/* Breadcrumbs */}
      {/* <BreadCrumb paths={path} /> */}
      {/* <BrowserRouter>
        <BreadCrumbs />
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/products" element={<div>Products page</div>} />
          <Route
            path="/products/electronics"
            element={<div>Electronics items</div>}
          />
          <Route
            path="/products/electronics/mobiles"
            element={<div>Mobiles</div>}
          />
        </Routes>
      </BrowserRouter> */}

      {/* <Checkboxes
        data={checkBoxItems}
        checked={checked}
        setChecked={setChecked}
      /> */}

      {/* OTP */}
      <OTPInputs />
    </div>
  );
}

export default App;
