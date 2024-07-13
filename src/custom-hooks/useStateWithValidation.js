import { useCallback, useState } from "react";

export default function useStateWithValidation(validation, initialValue) {
    const [state, setState] = useState(initialValue);
    const [isValid, setIsValid] = useState(() => validation(state));

    const onChange = useCallback(
        nextState => {
            console.log(nextState)
            const value = typeof nextState === 'function' ? nextState(state) : nextState;
            setState(value);
            setIsValid(validation(value));
        },
        [validation]
    );
    return [state, onChange, isValid]
}