import { useEffect, useState } from 'react';
import './App.css';
import { MyButton } from './fundamentals';
import Board from './tictactoe/dashboard';

interface Forecast {
    date: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}

function App() {
   
    return (
        <Board/>
    );
}

export default App;