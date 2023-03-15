import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    let valueAsString = localStorage.getItem('counterValue');
    if(valueAsString) {
      let newValue = JSON.parse(valueAsString);
      setValue(newValue);
    }
  }, []);

  useEffect(()=> {
    localStorage.setItem('counterValue', JSON.stringify(value));
  }, [value]);

  const incHandler = () => {
    setValue(value + 1);

  }

  // const setToLocalStorageHandler = () => {
  //   localStorage.setItem('counterValue', JSON.stringify(value));
  //   localStorage.setItem('counterValue + 1', JSON.stringify(value + 1));
  // }

  // const getFromLocalStorageHandler = () => {
  //   let valueAsString = localStorage.getItem('counterValue');
  //   if(valueAsString) {
  //     let newValue = JSON.parse(valueAsString);
  //     setValue(newValue);
  //   }
  // }

  // const clearLocalStorageHandler = () => {
  //   localStorage.clear();
  //   setValue(0);
  // }

  // const removeFromLocalStorageHandler = () => {
  //   localStorage.removeItem('counterValue + 1');
  // }
  
  return (
    <div className="App">
      <h2>LocalStorage</h2>
      <h1>{value}</h1>
      <button onClick={incHandler}>inc</button>
      {/* <div>

        <button onClick={setToLocalStorageHandler}>setToLocalStorage</button>
        <button onClick={getFromLocalStorageHandler}>getFromLocalStorage</button>
        <button onClick={clearLocalStorageHandler}>ClearLocalStorage</button>
        <button onClick={removeFromLocalStorageHandler}>removeFromLocalStorage</button>
      </div> */}
      
    </div>
  );
}

export default App;
