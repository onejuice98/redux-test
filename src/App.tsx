import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Counter from "./components/Counter";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Login from "./pages/login/intex";

function App() {
  return (
    // Provider를 통해서 store 저장
    // store는 저장소이며 여러 slice로 이루어져 있다.
    <Provider store={store}>
      <BrowserRouter>
        <Link to={"/"}>Main</Link>
        <Link to={"/login"}>Login</Link>
        <Routes>
          <Route path={"/"} element={<Counter />} />
          <Route path={"/login"} element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
