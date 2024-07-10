import { useCallback, useState } from "react";
import List from "./List";

export default function UseCallback() {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    const getItems = useCallback(() => {
        return [number, number + 1, number + 2];
    }, [number]);
    const themeStyle = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black',
    };
    return <div style={themeStyle}>
        <input type="number" value={number} onChange={e => setNumber(e.target.value)} />
        <button onClick={() => setDark(prevState => !prevState)}>Toggle Theme</button>
        <List getItems={getItems} />
    </div>;
}