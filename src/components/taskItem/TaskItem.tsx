import Task from "../../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./taskItem.css";

interface TaskItemProps{
    task: Task;
    taskes: Task[];
    setTaskes: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskItem = ({task, taskes, setTaskes}: TaskItemProps) =>{
    return (
        <li className="task-item" key={task.id}>
            <span className="task-item__text">{task.name}</span>
            <div>
                <span className="task-item__icon"><AiFillEdit /></span>
                <span className="task-item__icon"><AiFillDelete /></span>
                <span className="task-item__icon"><MdDone /></span>
            </div>
        </li>
    )
}


export default TaskItem;