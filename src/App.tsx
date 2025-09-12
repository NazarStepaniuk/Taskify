import React from 'react';
import './App.css';
import InputField from './components/inputField/InputField';

const App: React.FC = () => {
  return (
    <div className='app'>
        <h1>taskify</h1>
        <InputField/>
    </div>
  );
}

export default App;
