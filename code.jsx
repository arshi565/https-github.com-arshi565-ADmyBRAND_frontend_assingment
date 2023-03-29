import React, { useState } from 'react';

function LogicalOperators() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [message, setMessage] = useState('');

  const handleClick = () => {
    if (num1 > 50 && num2 <= 150) {
      setMessage('Success!');
    } else {
      setMessage('Error!');
    }
  };

  return (
    <div>
      <h1>Logical Operators</h1>
      <form>
        <label>
          Number 1:
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(parseInt(e.target.value))}
            min={1}
            max={100}
          />
        </label>
        <br />
        <label>
          Number 2:
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(parseInt(e.target.value))}
            min={101}
            max={200}
          />
        </label>
        <br />
        <button onClick={handleClick}>Submit</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default LogicalOperators;
