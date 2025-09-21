import Task from "../../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./taskItem.css";
import React, { useState, useRef, useEffect } from "react";
import { Draggable } from "@hello-pangea/dnd";

const EditIcon = AiFillEdit as React.FC,
      DeleteIcon = AiFillDelete as React.FC,
      DoneIcon = MdDone as React.FC;


interface TaskItemProps{
    index: number;
    task: Task;
    taskes: Task[];
    setTaskes: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskItem = ({index, task, taskes, setTaskes}: TaskItemProps) =>{
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(task.name);

    const handleDone = (id: number) =>{
        setTaskes(taskes.map(item => item.id === id ? {...item, isDone: !item.isDone} : item));
    }
    const handleDelete = (id: number) =>{
        setTaskes(taskes.filter(item => item.id !== id))
    }

    const confirmEdit = (id: number) =>{
        setTaskes(taskes.map(item => item.id === id ? {...item, name: editText} : item));
        setIsEditing(false);
    }
    const handleEditOnKey = (e: React.KeyboardEvent<HTMLInputElement>, id: number) =>{
        if(e.key === "Enter"){
            confirmEdit(id);
        }
    }


    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        inputRef.current?.focus();
    }, [isEditing]);

    return (
        <Draggable draggableId={task.id.toString()} index={index}>
            {
                (provided) => (
                    <li className="task-item" key={task.id} ref={provided.innerRef}
                        {...provided.draggableProps} {...provided.dragHandleProps}>
                        {
                            isEditing ? 
                            <input type="text" value={editText} className="task-item__text"
                                ref={inputRef}
                                onChange={(e) => setEditText(e.target.value)} 
                                onKeyDown={(e) => handleEditOnKey(e, task.id)}
                                onBlur={() => confirmEdit(task.id)}/> :
                            task.isDone ? 
                                <s className="task-item__text">{task.name}</s> : 
                                <span className="task-item__text">{task.name}</span>
                        }
                        <div>
                            <span className="task-item__icon" onClick={() =>{
                                if(!isEditing && !task.isDone){
                                    setIsEditing(!isEditing);
                                }
                            }}><EditIcon/></span>
                            <span className="task-item__icon" onClick={() => handleDelete(task.id)}><DeleteIcon/></span>
                            <span className="task-item__icon" onClick={() => handleDone(task.id)}><DoneIcon/></span>
                        </div>
                    </li>
                )
            }
            
        </Draggable>
    )
}


export default TaskItem;