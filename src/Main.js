import React, { useState, lazy, Suspense } from "react";
import { hooks } from "./hooks";

// Create a map for dynamically imported components
const componentMap = {};

hooks.forEach(hook => {
    componentMap[hook] = lazy(() => import(`./${hook}`));
});

function Main() {
    const [hook, setHook] = useState(hooks[hooks.length - 1]);
    const HookComponent = componentMap[hook];
    console.log(HookComponent);

    return (
        <>
            <nav>
                {hooks.map((hookName) => (
                    <button key={hookName} onClick={() => setHook(hookName)} style={{ borderColor: hookName === hook ? 'blue' : '' }}>
                        {hookName}
                    </button>
                ))}
            </nav>
            <Suspense fallback={<div>Loading...</div>}>
                {HookComponent && (
                    <>
                        <h1>{hook}</h1>
                        <hr />
                        <HookComponent />
                    </>
                )}
            </Suspense>
        </>
    );
}

export default Main;
