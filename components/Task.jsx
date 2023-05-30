import React from "react";
import styles from '../styles/Task.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { completeTask, removeTask } from "@/reducers/tasks";

export default function Task () {
    const dispatch = useDispatch();
    const task = useSelector((state) => state.tasks.value);
    let taskContent;
    
    
    const handleCompletedTask = (props) => {

        dispatch(completeTask(props.id));
    }
    if (task.length > 0) {
        taskContent = task.map((data) => {
            let completedTask = {};
            if(data.completed){
                completedTask = {
                    textDecoration: 'line-through',
                };
            }
            if(data.urgent){
            return <><div className={styles.task}>
                <div className={styles.taskSection}>
                    <input type="checkbox" className={styles.completeCheckbox} onChange={() => handleCompletedTask(data)} />
                    <p style={completedTask}>{data.name}</p>
                    <span className={styles.urgentBadge}>URGENT</span>
                </div>
                <FontAwesomeIcon icon={faTrash} className={styles.delete} onClick={()=>dispatch(removeTask())}/>
            </div></>
            }else{
                return <><div className={styles.task}>
                <div className={styles.taskSection}>
                    <input type="checkbox" className={styles.completeCheckbox} onChange={() => handleCompletedTask(data)} />
                    <p style={completedTask}>{data.name}</p>
                </div>
                <FontAwesomeIcon icon={faTrash} className={styles.delete} onClick={()=>dispatch(removeTask())}/>
            </div></>
            }
        })
    }


    return <>{taskContent}</>
}