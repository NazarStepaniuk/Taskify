import { useRef } from "react";
import "./taskInput.css";

interface TaskInputProps{
    task: string;
    setTask: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const TaskInput = ({task, setTask, handleAdd}: TaskInputProps) =>{

    const inputRef = useRef<HTMLInputElement>(null);

    return(
        <form className="input" onSubmit={(e)=>{
            handleAdd(e);
            inputRef.current?.blur();
        }}>
            <input type="input" className="input__box" placeholder="Enter a task" 
                   ref={inputRef} value={task} onChange={(e)=> setTask(e.target.value)}/>
            <button type="submit" className="input_submit">Go</button>
        </form>
    );
}

export default TaskInput;