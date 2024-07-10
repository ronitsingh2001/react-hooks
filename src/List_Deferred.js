import { useDeferredValue, useMemo } from "react";

export default function List_Deferred({ input }) {
    const LIST_SIZE = 20000;
    const deferredInput = useDeferredValue(input);
    const list = useMemo(() => {
        {
            const l = [];
            for (let i = 0; i < LIST_SIZE; i++) {
                l.push(<div key={i}>{deferredInput}</div>);
            }
            return l;
        };
    }, [deferredInput]);
    return list;
}