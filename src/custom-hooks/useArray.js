import { useState } from "react";

export default function useArray(arr) {
    const [array, setArray] = useState(arr);
    const set = (newArr) => {
        setArray(newArr);
    };
    const push = (ele) => {
        setArray(prevState => [...prevState, ele]);
    };
    const remove = (index) => {
        setArray(prevState => [...prevState.slice(0, index), ...prevState.slice(index + 1, prevState.length)]);
    };
    const filter = (filter) => {
        setArray(prevState => prevState.filter(filter));
    };
    const update = (index, ele) => {
        setArray(prevState => [...prevState.slice(0, index), ele, ...prevState.slice(index + 1, prevState.length)]);
    };
    const clearArr = () => { setArray([]); };

    return { array, set, push, remove, filter, update, clearArr };
}