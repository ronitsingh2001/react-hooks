import { createContext, useState } from "react";
import Main from "./Main";

const ThemeContext = createContext();

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  return <>
    <ThemeContext.Provider value={darkTheme}>
      <button onClick={() => setDarkTheme(prevState => !prevState)}>Toggle Theme</button>
      <hr></hr>
      <Main />
    </ThemeContext.Provider>
  </>;
}

export default App;
