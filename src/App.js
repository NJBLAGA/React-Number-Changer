import React, { useReducer } from "react";
import "./App.css";

function App() {
  const ACTIONS = {
    INCREMENT: "increment",
    DECREMENT: "decrement",
  };

  function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.INCREMENT:
        return { count: state.count + 1 };
      case ACTIONS.DECREMENT:
        return { count: state.count - 1 };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, { count: 0 });
  // const [count, setCount] = useState(0);

  function increment() {
    // setCount((prevCount) => prevCount + 1);
    dispatch({ type: ACTIONS.INCREMENT });
  }

  function decrement() {
    // setCount((prevCount) => prevCount - 1);
    dispatch({ type: ACTIONS.DECREMENT });
  }

  return (
    <>
      <div className="Changer">
        <h1 className="Title">Number Changer</h1>
        <button className="Button" onClick={decrement}>
          -
        </button>
        <span className="Number">{state.count}</span>
        <button className="Button" onClick={increment}>
          +
        </button>
      </div>
    </>
  );
}

export default App;
