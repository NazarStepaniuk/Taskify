import "./taskList.css";
import Task from "../../model";
import TaskItem from "../taskItem/TaskItem";

interface TaskListProps{
    taskes: Task[];
    setTaskes: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskList = ({taskes, setTaskes}: TaskListProps) =>{
    return(
        <ul className="task-list">
            {taskes.map(task => (
                <TaskItem key={task.id} task={task} taskes={taskes} setTaskes={setTaskes}/>
            ))}
        </ul>
    )
}

export default TaskList;