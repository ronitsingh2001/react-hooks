import { useEffect, useState } from "react";

export default function List({ getItems }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        console.log("Updating items!");
        setItems(getItems());
    }, [getItems]);

    return items.map(item => <div key={item}>{item}</div>);
}