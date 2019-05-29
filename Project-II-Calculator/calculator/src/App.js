import React from 'react';
import './App.css';

import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import SymbolButton from './components/ButtonComponents/SymbolButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  const numbers = [9,8,7,6,5,4,3,2,1];
  const actions = [0, 'clear'];
  const symbols = ['%', 'x', '-', '+', '='];
  const display = <div><h1>0</h1></div>;

  return (
    <div>
      <CalculatorDisplay buttonStyle='display' text={display} />

      <div class='everything-else'>

        <ActionButton buttonStyle='action' text={actions[1]} />

        <div class='numbers-symbols'>

          <div class='numbers'>
            {numbers.map(num => {
              return <NumberButton buttonStyle= 'number' text={num} /> ; 
            })} 
          </div>

          <div class='symbols'>
            {symbols.map(symbol => {
              return <SymbolButton buttonStyle= 'symbol' text={symbol} />
            })}
          </div>

        </div>

      </div>

        <ActionButton buttonStyle='action' text={actions[0]} />
      
    </div>
  );
};

export default App;
