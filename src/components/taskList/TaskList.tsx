import "./taskList.css";
import Task from "../../model";
import TaskItem from "../taskItem/TaskItem";

interface TaskListProps{
    taskes: Task[];
    setTaskes: React.Dispatch<React.SetStateAction<Task[]>>;
}


const TaskList = ({taskes, setTaskes}: TaskListProps) =>{
    return(
        <div className="container">
            <div className="task-list">
                <span className="task-list__heading">Active Taskes</span>
                <ul>
                    {taskes.map(task => (
                        <TaskItem key={task.id} task={task} taskes={taskes} setTaskes={setTaskes}/>
                    ))}
                </ul>
            </div>
            <div className="task-list remove">
                <span className="task-list__heading">Completed Taskes</span>
                <ul>
                    {taskes.map(task => (
                        <TaskItem key={task.id} task={task} taskes={taskes} setTaskes={setTaskes}/>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TaskList;