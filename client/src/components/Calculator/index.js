import React, { useState } from 'react';

import ScotchInfoBar from './ScotchInfoBar';
import './Styles.css';

function Calculate() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [total, setTotal] = useState(number1 + number2);

  function calculateTotal() {
    setTotal(number1 * number2);
  }

  return (
    <div className="framing-calc">
      <div className="App">
        <h3>Get your total</h3>

        <div className="number-inputs">
          <input
            type="number"
            value={number1}
            onChange={e => setNumber1(+e.target.value)}
            placeholder="0"
          /> <p>Days </p>
          <input
            type="number"
            value={number2}
            onChange={e => setNumber2(+e.target.value)}
            placeholder="0"
          /> <p> Price </p>

        </div>

        <button onClick={calculateTotal}>Get total</button>

        <h2>{total}</h2>

        <ScotchInfoBar seriesNumber={5} />
      </div>
    </div>
  );
}
export default Calculate
