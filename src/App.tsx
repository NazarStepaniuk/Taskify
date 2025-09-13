import React, { useState } from 'react';
import './App.css';
import TaskInput from './components/taskInput/TaskInput';

const App = () => {
    const [inputValue, setInputValue] = useState("");
    return (
        <div className='app'>
            <h1>taskify</h1>
            <TaskInput task={inputValue} setTask={setInputValue}/>
        </div>
    );
}

export default App;
