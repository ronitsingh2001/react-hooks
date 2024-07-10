import { useState } from "react";
import List_Deferred from "./List_Deferred";

export default function UseDeferredValue() {
    const [input, setInput] = useState('');
    return <>
        <input type="text" onChange={e => setInput(e.target.value)} />
        <List_Deferred input={input} />
    </>;
}