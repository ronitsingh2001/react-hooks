import { useState } from "react";

export default function useToggle(value) {
    const [state, setValue] = useState(typeof value === 'boolean' ? value : false);

    function toggleValue(value) {
        setValue(prevState => typeof value === 'boolean' ? value : !prevState);
    }
    return [state, toggleValue];
}