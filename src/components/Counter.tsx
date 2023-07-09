import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { down, init, up } from "../store/counterSlice";

function Counter() {
  // dispatch를 통해서 counterSlice의 내부 메소드에 접근할 수 있다.
  const dispatch = useDispatch();
  // store의 state를 받아 counterSlice를 가져옴.
  // state의 type은 RootState이다. RootState는 자동으로 counterSlice의 initialState 타입으로 설정
  const count = useSelector((state: RootState) => {
    return state.counter.value;
  });
  const addNumber = () => {
    // 구조분해 할당으로 up, down, init를 사용할 수 있다.
    dispatch(up(2));
  };
  const minusNumber = () => {
    dispatch(down(2));
  };
  const initNumber = () => {
    dispatch(init(" "));
  };
  return (
    <div>
      <div> {count}</div>
      <button onClick={addNumber}> + </button>
      <button onClick={minusNumber}> - </button>
      <button onClick={initNumber}> 초기화 </button>
    </div>
  );
}
export default Counter;
