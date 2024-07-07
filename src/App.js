import { useState } from "react";

function getno() {
  console.log('ji');
  return 4;
}

function App() {
  const [state, setState] = useState(() => {
    return { count: 4, theme: 'black' };
  });

  function decrementCount() {
    setState(prevState => {
      // return { count: prevCount.count - 1 }; // incorrect 
      return { ...prevState, count: prevState.count - 1 }; // correct 
    });
  }

  function incrementCount() {
    setState(prevState => {
      return { ...prevState, count: prevState.count + 1 };
    });
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{state.count}</span>
      <span>{state.theme}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;
