import React, {useState} from 'react';
import {setNewTaskDispatcher} from '../../store/dispatchers/dispatcher';

export const Form = () => {
    const [newTask, setInputNewTask] = useState('');

    const inputNewTask = (e) =>setInputNewTask(e.target.value);

    const inputNewTaskDis = (e) => {
        setNewTaskDispatcher(e);
        setInputNewTask('');
    };

    const keyPress = (e) => {
        const code = e.keyCode || e.which;
        if (code === 13) {
            setNewTaskDispatcher(newTask);
            setInputNewTask('');
        }
    };

    const disabledButton = (newTask === '');

    return (
        <>
            <input value={newTask} onChange={inputNewTask} onKeyPress={(e)=>keyPress(e)}/>
            <div> </div>
            <button disabled={disabledButton} onClick={() => inputNewTaskDis(newTask)}>
                добавить запись
            </button>
        </>
    );
};
