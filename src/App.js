import React, { useState } from 'react';
import './App.css';
import Item from './components/Item';
import __ from 'lodash';

const sizeOfWorld = 9;

const cellsInARowToAction = {
  live: 2,
  dead: 3,
};

const getRandomCell = () => {
  return Math.random() < 0.5 ? 'live' : 'dead';
};

const App = () => {
  const [itemsArray, addItem] = useState([]);
  const [liveCellsInARow, liveCellsInARowCount] = useState(0);
  const [deadCellsInARow, deadCellsInARowCount] = useState(0);

  const items = itemsArray.map((item) => (
    <Item type={item} key={__.uniqueId()} />
  ));

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
    const indexOfLastLife = itemsArray.lastIndexOf('life');
    deadCellsInARowCount(0);
    if (indexOfLastLife > 0) {
      addItem([
        ...itemsArray.slice(0, indexOfLastLife),
        ...itemsArray.slice(indexOfLastLife + 1),
      ]);
    }
  }

  return (
    <div className="App">
      <header className="App-header">{items}</header>
      <button onClick={handleClick}>Сотворить</button>
    </div>
  );
};

export default App;
