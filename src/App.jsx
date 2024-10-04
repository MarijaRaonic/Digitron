import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState('0'); 
  const [previousNumber, setPreviousNumber] = useState(null);
  const [operationType, setOperationType] = useState(null);

  const clear = () => {
    setCount('0');
    setPreviousNumber(null);
    setOperationType(null);
  };

  const performOperation = (num1, num2, operation) => {
    switch (operation) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        return num1 / num2;
      case '%':
        return (num1 * num2) / 100;
      case 'x2':
        return num1 * num1;
      default:
        return num2;
    }
  };

  const handleNumberClick = (number) => {
    setCount((prev) => (prev === '0' ? number.toString() : prev + number));
  };

  const handleOperationClick = (operation) => {
    if (previousNumber !== null) {
      const result = performOperation(parseFloat(previousNumber), parseFloat(count), operationType);
      setCount(result.toString());
    }
    setPreviousNumber(count);
    setCount('0');
    setOperationType(operation);
  };

  const evaluate = () => {
    if (previousNumber !== null && operationType) {
      const result = performOperation(parseFloat(previousNumber), parseFloat(count), operationType);
      setCount(result.toString());
      setPreviousNumber(null);
      setOperationType(null);
    }
  };

  return (
    <div className='flex flex-col items-center justify-between ml-72 text-xl text-sky-600 border-sky-700 shadow-lg'>
      <div className='rezultat px-5 py-5'>
        <div className='previousNumber'>{previousNumber} {operationType && operationType} </div>
        <div className='currentNumber'>{count}</div>
      </div>

      <div className='prvi'>
        <button onClick={clear}>C</button>
        <button onClick={() => handleOperationClick('x2')}>x<sup>2</sup></button>
        <button onClick={() => handleOperationClick('%')}>%</button>
      </div>
      
      <div className='drugi'>
        <button onClick={() => handleNumberClick(7)}>7</button>
        <button onClick={() => handleNumberClick(8)}>8</button>
        <button onClick={() => handleNumberClick(9)}>9</button>
        <button onClick={() => handleOperationClick('-')}>-</button> 
      </div>
      
      <div className='treci'>
        <button onClick={() => handleNumberClick(4)}>4</button>
        <button onClick={() => handleNumberClick(5)}>5</button>
        <button onClick={() => handleNumberClick(6)}>6</button>
        <button onClick={() => handleOperationClick('+')}>+</button> 
      </div>
      
      <div className='cetvrti'>
        <button onClick={() => handleNumberClick(1)}>1</button>
        <button onClick={() => handleNumberClick(2)}>2</button>
        <button onClick={() => handleNumberClick(3)}>3</button>
        <button onClick={() => handleOperationClick('/')}>/</button>
        
      </div>
      
      <div className='peti'>
        <button onClick={() => handleNumberClick(0)}>0</button>
        <button onClick={() => handleNumberClick('.')}>.</button>
        <button onClick={evaluate}>=</button> 
        <button onClick={() => handleOperationClick('*')}>*</button>
        
      </div>
    </div>
  );
}

export default App;