import "./taskList.css";
import Task from "../../model";
import TaskItem from "../taskItem/TaskItem";
import { Droppable } from "@hello-pangea/dnd";

interface TaskListProps{
    taskes: Task[];
    setTaskes: React.Dispatch<React.SetStateAction<Task[]>>;
    completedTaskes: Task[];
    setCompletedTaskes: React.Dispatch<React.SetStateAction<Task[]>>;
}


const TaskList = ({taskes, setTaskes, completedTaskes, setCompletedTaskes}: TaskListProps) =>{
    return(
        <div className="container">
            <Droppable droppableId="TaskesList">
                {
                    (provided, snapshot) => (
                        <div className={`task-list ${snapshot.isDraggingOver ? "dragactive" : ""}`} 
                             ref={provided.innerRef}
                             {...provided.droppableProps}>
                            <span className="task-list__heading">Active Taskes</span>
                            <ul>
                                {taskes.map((task, index) => (
                                    <TaskItem index={index} key={task.id} task={task} taskes={taskes} setTaskes={setTaskes}/>
                                ))}
                                {provided.placeholder}
                            </ul>
                        </div>
                    )
                }
            </Droppable>
            <Droppable droppableId="CompletedTaskesList">
                {
                    (provided, snapshot) => (
                        <div className={`task-list remove ${snapshot.isDraggingOver ? "dragcomplete" : ""}`}
                             ref={provided.innerRef}
                             {...provided.droppableProps}>
                            <span className="task-list__heading">Completed Taskes</span>
                            <ul>
                                {completedTaskes.map((task, index) => (
                                    <TaskItem index={index} key={task.id} task={task} taskes={completedTaskes} setTaskes={setCompletedTaskes}/>
                                ))}
                                {provided.placeholder}
                            </ul>
                        </div>
                    )
                }
            </Droppable>
            
        </div>
    )
}

export default TaskList;