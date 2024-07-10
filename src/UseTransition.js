import { useState, useTransition } from "react";

export default function UseTransition() {
    const [input, setInput] = useState('');
    const [list, setList] = useState([]);

    const [isPending, startTransition] = useTransition();

    const LIST_SIZE = 2000;

    function handleChange(e) {
        setInput(e.target.value);
        startTransition(() => {
            const l = [];
            for (let i = 0; i < LIST_SIZE; i++) {
                l.push(e.target.value);
            }
            setList(l);
        });
    }

    return <>
        <input type="text" onChange={handleChange} value={input} />
        {isPending ? 'loading...' : list.map((l, index) => (
            <div key={index}>{l}</div>
        ))}
    </>;
}