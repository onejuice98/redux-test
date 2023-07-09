import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Counter from "./components/Counter";

function App() {
  return (
    // Provider를 통해서 store 저장
    // store는 저장소이며 여러 slice로 이루어져 있다.
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
