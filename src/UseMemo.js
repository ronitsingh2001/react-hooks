import { useEffect, useMemo, useState } from "react";

export default function UseMemo() {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);
    const doubleNumber = useMemo(() => {
        return slowFunction(number);
    }, [number]);
    const themeStyle = useMemo(() => {

        return {
            backgroundColor: dark ? 'black' : 'white',
            color: dark ? 'white' : 'black',
        };
    }, [dark]);

    useEffect(() => {
        console.log("Theme Changed");
    }, [themeStyle]);

    return <>
        <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
        <br></br>
        <button onClick={() => setDark(prevState => !prevState)}>Change Theme</button>
        <div style={themeStyle}>{doubleNumber}</div>
    </>;
}

function slowFunction(num) {
    console.log('calling slow function');
    for (let i = 0; i < 1000000000; i++) { }
    return num * 2;
}