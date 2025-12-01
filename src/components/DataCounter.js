import { useReducer } from "react";
const initialState = { count: 0, step: 1 };
function reducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case "dec":
      return { ...state, count: state.count - state.step };
    case "inc":
      return { ...state, count: state.count + state.step };
    case "setCount":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, step: action.payload };
    case "reset":
      return initialState;
    default:
      throw new Error("unknown action");
  }
}
function DataCounter() {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;

  const date = new Date("january 22 2025");
  date.setDate(date.getDate() + count);

  function dec() {
    //setCount((count) => count - step);
    dispatch({ type: "dec" });
  }
  function inc() {
    //setCount((count) => count + step);
    dispatch({ type: "inc" });
  }

  function defineCount(e) {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
    // setCount(Number(e.target.value));
  }
  function defineStep(e) {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  }
  function reset() {
    dispatch({ type: "reset" });
    // setCount(0);
    //setStep(1);
  }
  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>
      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>
      <p>{date.toDateString()}</p>
      <div>
        <button onClick={reset}>reset</button>
      </div>
    </div>
  );
}
export default DataCounter;
