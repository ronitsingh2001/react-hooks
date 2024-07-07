import { useState } from "react";
import UseEffect from "./UseEffect";
import UseState from "./UseState";
import UseContext from "./UseContext";


function Main() {
    const [hook, setHook] = useState('useState');

    return (
        <>
            <nav>
                <button onClick={() => setHook('useState')}>useState</button>
                <button onClick={() => setHook('useEffect')}>useEffect</button>
                <button onClick={() => setHook('useContext')}>useContext</button>
            </nav>
            {
                hook === 'useState' && <>
                    <h1>useState</h1>
                    <hr></hr>
                    <UseState />
                </>
            }
            {
                hook === 'useEffect' && <>
                    <h1>useEffect</h1>
                    <hr></hr>
                    <UseEffect />
                </>
            }{
                hook === 'useContext' && <>
                    <h1>useContext</h1>
                    <hr></hr>
                    <UseContext />
                </>
            }
        </>
    );
}

export default Main;
