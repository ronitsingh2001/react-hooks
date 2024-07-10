import { useEffect, useRef, useState } from "react";

export default function UseRef() {
    const [name, setName] = useState('');
    const renderCount = useRef(0);
    const inputRef = useRef();
    const prevName = useRef('');

    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    });

    useEffect(() => {
        prevName.current = name;
    }, [name]);

    function focus() {
        inputRef.current.focus();
    }

    return <>
        <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
        <div>My Name is {name} & it used to be {prevName.current}</div>
        <div>I rendered {renderCount.current} times</div>
        <button onClick={focus}>Focus</button>
    </>;
}