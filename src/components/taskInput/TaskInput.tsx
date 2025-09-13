import "./taskInput.css";

interface TaskInputProps{
    task: string;
    setTask: React.Dispatch<React.SetStateAction<string>>;
}

const TaskInput = ({task, setTask}: TaskInputProps) =>{
    return(
        <form className="input">
            <input type="input" className="input__box" placeholder="Enter a task" 
                   value={task} onChange={(e)=> setTask(e.target.value)}/>
            <button type="submit" className="input_submit">Go</button>
        </form>
    );
}

export default TaskInput;