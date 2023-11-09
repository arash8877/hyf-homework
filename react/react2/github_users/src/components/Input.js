import React, { useContext } from 'react';
import './Input.css';
import { Context } from './Context';

const Input = () => {
  const value = useContext(Context);
  const inputText = value.inputText;
  const setInputText = value.setInputText; 

  
  const handleOnChange = (e) => {
    setInputText(e.target.value)
  }
  return (
        <input type='text' value={inputText} onChange={handleOnChange}/>
  )
}

export default Input;