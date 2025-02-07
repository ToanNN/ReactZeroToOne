import { useEffect, useState } from 'react';
import './App.css';
import { MyButton } from './fundamentals';

interface Forecast {
    date: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}

function App() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }
    return (
        <div>
            <h1>Cu ti updates separately</h1>
            <MyButton count={count} onClick={handleClick} />
            <MyButton count={count} onClick={handleClick} />

        </div>
    );
}

export default App;