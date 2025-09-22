import React, { useState } from 'react';
import { DragDropContext, DropResult } from '@hello-pangea/dnd';

import './App.css';

import TaskInput from './components/taskInput/TaskInput';
import TaskList from './components/taskList/TaskList';
import Task from './model';


const App = () => {
    const [inputValue, setInputValue] = useState("");
    const [taskes, setTaskes] = useState<Task[]>([]);
    const [completedTaskes, setCompletedTaskes] = useState<Task[]>([]);

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();

        if(inputValue){
            setTaskes([...taskes, {id: Date.now(), name: inputValue, isDone: false}]);
            setInputValue("");
        }
    }

    const onDragEnd = (result: DropResult) =>{
        const {destination, source} = result;
        if (!destination) {
            return;
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
            ) {
            return;
        }

        let add;
        let active = taskes;
        let complete = completedTaskes;
        // Source Logic
        if (source.droppableId === "TaskesList") {
        add = active[source.index];
        active.splice(source.index, 1);
        } else {
        add = complete[source.index];
        complete.splice(source.index, 1);
        }

        // Destination Logic
        if (destination.droppableId === "CompletedTaskesList") {
        complete.splice(destination.index, 0, add);
        } else {
        active.splice(destination.index, 0, add);
        }

        setCompletedTaskes(complete);
        setTaskes(active);
        }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className='app'>
                <h1>taskify</h1>
                <TaskInput task={inputValue} setTask={setInputValue} handleAdd={handleAdd}/>
                <TaskList 
                    taskes={taskes}
                    setTaskes={setTaskes}
                    completedTaskes={completedTaskes}
                    setCompletedTaskes={setCompletedTaskes}/>
            </div>
        </DragDropContext>
        
    );
}

export default App;
