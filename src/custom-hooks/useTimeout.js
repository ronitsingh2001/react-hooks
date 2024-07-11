import { useCallback, useEffect, useRef } from "react";

export default function useTimeout(callback, delay) {
    const callbackRef = useRef(callback);
    const timeout = useRef();

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    const set = useCallback(() => {
        timeout.current = setTimeout(() => callbackRef.current(), delay);
    });

    const clear = useCallback(() => {
        timeout.current && clearTimeout(timeout.current);
    }, []);


    useEffect(() => {
        set();
        return clear;
    }, [delay, set, clear]);

    const reset = useCallback(() => {
        clear();
        set();
    }, [clear, set]);

    return { reset, clear };
}