import React from "react";
import styles from '../styles/Task.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { completeTask, removeTask } from "@/reducers/tasks";

export default function () {
    const dispatch = useDispatch();
    const task = useSelector((state) => state.tasks.value);


    let taskContent;

    if (task.length > 0) {
        taskContent = task.map((data) => {
            if(data.urgent){
            return <div className={styles.task}>
                <div className={styles.taskSection}>
                    <input type="checkbox" className={styles.completeCheckbox} onChange={(e) => dispatch(completeTask(e.target.checked))} />
                    <p>{data.name}</p>
                    <span className={styles.urgentBadge}>URGENT</span>
                </div>
                <FontAwesomeIcon icon={faTrash} className={styles.delete} onClick={()=>dispatch(removeTask())}/>
            </div>
            }else{
                return <div className={styles.task}>
                <div className={styles.taskSection}>
                    <input type="checkbox" className={styles.completeCheckbox} onChange={(e) => dispatch(completeTask(e.target.checked))} />
                    <p>{data.name}</p>
                </div>
                <FontAwesomeIcon icon={faTrash} className={styles.delete} onClick={()=>dispatch(removeTask())}/>
            </div>
            }
        })
    }


    return <>{taskContent}</>
}