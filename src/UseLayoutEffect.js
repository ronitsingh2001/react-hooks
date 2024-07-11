import { useEffect, useState } from "react";

export default function UseLayoutEffect() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(count);
    }, [count]);

    return <>
        <button onClick={() => setCount(c => c + 1)}>increment</button>
        <div>{count}</div>
    </>;
}