import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Home.module.css';
import { addTask, completeTask } from '@/reducers/tasks';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Task from './Task';

function Home() {
  const dispatch = useDispatch();
  const task = useSelector((state) => state.tasks.value)
  const [isUrgent, setItUrgent] = useState(false);
  const [taskName, setTaskName] = useState('');

  // const testValue = (e) => {
  //   console.log(e.target.checked)
  // }
  const handleAddTask = () => {
    const myTask = {
      id: taskName + Date.now(),
      name: taskName,
      urgent: isUrgent,
      completed: false,
    }
    dispatch(addTask(myTask));
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.addContainer}>
          <input type="text" placeholder="Task" className={styles.addTask} onChange={(e)=> setTaskName(e.target.value)}/>
          <div className={styles.urgentSection}>
            <input type="checkbox" className={styles.urgentCheckbox} onChange={(e)=>setItUrgent(e.target.checked)}/>
            <span className={styles.urgent}>URGENT</span>
          </div>
          <button className={styles.button} onClick={()=> handleAddTask()}>ADD TASK</button>
        </div>

        <div className={styles.tasksContainer}>
          <Task />
          <div className={styles.task}>
            <div className={styles.taskSection}>
              <input type="checkbox" className={styles.completeCheckbox} />
              <p>Go to the grocery store</p>
              <span className={styles.urgentBadge}>URGENT</span>
            </div>
            <FontAwesomeIcon icon={faTrash} className={styles.delete} />
          </div>

          <div className={styles.task}>
            <div className={styles.taskSection}>
              <input type="checkbox" className={styles.completeCheckbox} />
              <p>Pay the bills</p>
            </div>
            <FontAwesomeIcon icon={faTrash} className={styles.delete} />
          </div>

          <div className={styles.task}>
            <div className={styles.taskSection}>
              <input type="checkbox" className={styles.completeCheckbox} />
              <p>Call Grandma</p>
            </div>
            <FontAwesomeIcon icon={faTrash} className={styles.delete} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
