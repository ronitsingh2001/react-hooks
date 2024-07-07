import React, { useEffect, useState } from 'react';

function UseEffect() {
    const [resourseType, setResourseType] = useState('posts');
    const [items, setItems] = useState([]);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/' + resourseType)
            .then(response => response.json())
            .then(json => setItems(json));
    }, [resourseType]);

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            console.log('cleanup')
        };
    }, []);

    return (
        <>
            <div>
                window width - {windowWidth}
            </div>
            <br />
            <div>
                <button onClick={() => setResourseType('posts')}>Posts</button>
                <button onClick={() => setResourseType('users')}>Users</button>
                <button onClick={() => setResourseType('comments')}>Comments</button>
            </div>
            <h1>{resourseType}</h1>
            {
                items.map(item => {
                    return <pre key={item.id}>
                        {JSON.stringify(item)}
                    </pre>;
                })
            }
        </>
    );
}

export default UseEffect;