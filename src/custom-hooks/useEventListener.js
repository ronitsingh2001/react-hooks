import { useEffect, useRef } from "react";

export default function useEventListener(eventType, callback, element) {
    const callbackRef = useRef(callback);
    useEffect(() => {
        if (element == null) return;
        const handler = e => callbackRef.current(e);
        console.log(element)
        element.addEventListener(eventType, handler);

        return () => element.removeEventListener(eventType, handler);
    }, [eventType, element]);
}
