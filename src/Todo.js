import { ACTIONS } from "./UseReducer";

export default function Todo({ todos, dispatch }) {
    return <>
        {
            todos.map(todo => {
                return <div style={{ margin: '0.3rem', padding: '0.3rem' }} key={todo.id}>
                    <span style={{ color: todo.complete ? '#AAA' : '#000' }}>{todo.name}</span>
                    <button onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: {id:todo.id} })}>Toggle</button>
                    <button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: {id:todo.id} })}>Delete</button>
                </div>;
            })
        }
    </>;
}