import logo from './logo.svg';
import './App.css';
import Board from '../src/components/board/Board'

function App() {
  return (
    <div className="App">
      <header >
        Tic-Tac-Toe Game
      </header>
      <Board />
    </div>
  );
}

export default App;
