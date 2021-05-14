import React, {useState} from 'react';
import {setNewTaskDispatcher} from '../../store/dispatchers/dispatcher';

export const Form = () => {
    const [newTask, setInputNewTask] = useState('');

    const inputNewTask = (e) =>setInputNewTask(e.target.value);

    const disabledButton = (newTask === '');

    return (
        <div>
            <input value={newTask} onChange={inputNewTask}/>
            <button disabled={disabledButton} onClick={() => setNewTaskDispatcher(newTask)}>
                добавить запись
            </button>
        </div>
    );
};
