import { useState } from "react";
import useLocalStorage from "./useLocalStorage";
import useTimeout from "./custom-hooks/useTimeout";
import useToggle from "./custom-hooks/useToggle";
import useUpdateLogger from "./custom-hooks/useUpdateLogger";
import useDebounce from "./custom-hooks/useDebounce";
import useUpdateTime from "./custom-hooks/useUpdateEffect";
import useUpdateEffect from "./custom-hooks/useUpdateEffect";
import useArray from "./custom-hooks/useArray";
import usePrevious from "./custom-hooks/usePrevious";
import useMediaQuery from "./custom-hooks/useMediaQuery";

export default function CustomHook() {
    const [name, setName] = useLocalStorage('name', '');
    const [value, toggleValue] = useToggle(false);
    const [count, setCount] = useState(0);
    const [name1, setName1] = useState('John');
    const prevCount = usePrevious(count);
    const { clear, reset } = useTimeout(() => { }, 1000);
    const { array, set, push, remove, filter, update, clearArr } = useArray([1, 2, 3, 4, 5, 6]);
    const isLarge = useMediaQuery("(min-width:800px)");
    // useDebounce(() => alert(count), 1000, [count, name]);
    // useUpdateEffect(() => alert(count), [count]);
    // useUpdateLogger(name);
    return <>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
        <hr />
        <div>{value.toString()}</div>
        <button onClick={toggleValue}>Toggle</button>
        <button onClick={() => toggleValue(true)}>Make true</button>
        <button onClick={() => toggleValue(false)}>Make false</button>
        <hr />
        <div>{count}</div>
        <button onClick={() => setCount(c => c + 1)}>Increment</button>
        <button onClick={clear}>Clear Timeout</button>
        <button onClick={reset}>Reset Timeout</button>
        <hr />
        <div>{array.join(',')}</div>
        <button onClick={() => push(7)}>Add 7</button>
        <button onClick={() => update(1, 9)}>Change second ele to 9</button>
        <button onClick={() => remove(1)}>Remove second ele</button>
        <button onClick={() => filter(n => n < 3)}>Keep number less than 3</button>
        <button onClick={() => set([1, 2])}>Set to 1,2</button>
        <button onClick={clearArr}>Clear</button>
        <hr />
        <div>{count} - {prevCount}</div>
        <div>{name1}</div>
        <button onClick={() => setCount(prevState => prevState + 1)}>Increment</button>
        <button onClick={() => setName1('Kyle')}>Change Name</button>
        <hr />
        <div>Large - {isLarge.toString()}</div>
    </>;
}