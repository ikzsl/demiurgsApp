import React, { useState } from 'react';
import './App.css';
import Item from './components/Item';

const getRandomCell = () => {
  return Math.random() < 0.5 ? 'live' : 'dead';
};

const cellsInARowToAction = {
  live: 2,
  dead: 3,
};

const sizeOfWorld = 10;

const App = () => {
  const [itemsArray, addItem] = useState([]);
  const [liveCellsInARow, liveCellsInARowCount] = useState(0);
  const [deadCellsInARow, deadCellsInARowCount] = useState(0);

  const items = itemsArray.map((item) => <Item type={item} />);

  const handleClick = () => {
    const cell = getRandomCell();

    if (cell === 'dead') {
      deadCellsInARowCount(deadCellsInARow + 1);
      liveCellsInARowCount(0);
    }
    if (cell === 'live') {
      liveCellsInARowCount(liveCellsInARow + 1);
      deadCellsInARowCount(0);
    }

    addItem([...itemsArray.slice(-sizeOfWorld), cell]);
  };

  if (liveCellsInARow === cellsInARowToAction.live) {
    liveCellsInARowCount(0);
    addItem([...itemsArray.slice(-sizeOfWorld), 'life']);
  }

  if (deadCellsInARow === cellsInARowToAction.dead) {
    console.log('die', itemsArray.lastIndexOf('life'));
    deadCellsInARowCount(0);
  }

  return (
    <div className="App">
      <header className="App-header">{items}</header>
      <button onClick={handleClick}>Сотворить</button>
    </div>
  );
};

export default App;
