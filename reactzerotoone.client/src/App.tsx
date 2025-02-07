import './App.css';

import Tictactoe from './tictactoe/tictactoe';

interface Forecast {
    date: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}

function App() {
   
    return (
        <Tictactoe />
    );
}

export default App;