import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { down, init, up } from "../store/counterSlice";

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => {
    return state.counter.value;
  });
  const addNumber = () => {
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
