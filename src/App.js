import React, { useState } from 'react';
import Item from './components/Item';
import Fab from './components/Fab';
import __ from 'lodash';
import styled from 'styled-components';

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
    <Container>
      <div>
        <Header>Клеточное наполнение</Header>
        <Main className="App-main">{items}</Main>
      </div>

      <Fab cb={handleClick}>Сотворить</Fab>
    </Container>
  );
};

export default App;

const Header = styled.header`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color: #ffffff;
  margin-bottom: 16px;
  text-align: center;
`;

const Container = styled.div`
  
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 16px;
  min-height: 100vh;
  background: linear-gradient(180deg, #310050 0%, #000000 100%);
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
