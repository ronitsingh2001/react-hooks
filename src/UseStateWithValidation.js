import useStateWithValidation from "./custom-hooks/useStateWithValidation";

export default function UseStateWithValidation() {
    const [userName, setUserName, isValid] = useStateWithValidation(name => name.length > 5, "");
    return (
        <>
            <div>Valid - {isValid.toString()}</div>
            <input value={userName} onChange={e => setUserName(e.target.value)} />
        </>
    );
}
