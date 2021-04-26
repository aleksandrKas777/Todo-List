import React, {useState} from 'react';

export const Form = ({addNewTask}) => {
    const [newTask, setInputNewTask] = useState('');

    const inputNewTask = (e) =>setInputNewTask(e.target.value);

    const disabledButton = (newTask === '');

    return (
        <div>
            <input value={newTask} onChange={inputNewTask}/>
            <button disabled={disabledButton} onClick={() => addNewTask(newTask)}>
                добавить запись
            </button>
        </div>
    );
};