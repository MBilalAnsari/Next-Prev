import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(1);

  function next() {
    setCount(count + 1);
  }

  function prev() {
    setCount(count - 1);
  }

  return (
    <div className="app-container">
      <h1>Next & Prev Counter</h1>
      <div className="count-display">
        <p className={`count-item ${count === 1 ? 'active' : ''}`}>1</p>
        <p className={`count-item ${count === 2 ? 'active' : ''}`}>2</p>
        <p className={`count-item ${count === 3 ? 'active' : ''}`}>3</p>
      </div>
      <div className="button-container">
        <button className="nav-button" onClick={prev} disabled={count === 1}>
          Prev
        </button>
        <button className="nav-button" onClick={next} disabled={count === 3}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
