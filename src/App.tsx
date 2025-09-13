import React, { useState } from 'react';
import './App.css';
import TaskInput from './components/taskInput/TaskInput';
import Task from './model';

const App = () => {
    const [inputValue, setInputValue] = useState("");
    const [taskes, setTaskes] = useState<Task[]>([]);

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();

        if(inputValue){
            setTaskes([...taskes, {id: Date.now(), name: inputValue, isDone: false}]);
            setInputValue("");
        }
    }

    return (
        <div className='app'>
            <h1>taskify</h1>
            <TaskInput task={inputValue} setTask={setInputValue} handleAdd={handleAdd}/>
        </div>
    );
}

export default App;
