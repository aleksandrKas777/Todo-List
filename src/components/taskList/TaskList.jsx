import React, {useContext} from 'react';
import {TaskItem} from './taskItems/TaskItem';
import {ContextTogoList} from '../context/ContextTogoList';

export const TaskList = () => {
    const {taskList} = useContext(ContextTogoList);
    return (
        <ul> список задач
            {taskList.map((item) => {
                const {...props} = item;
                return <TaskItem key={item.id} {...props} />;
            })}
        </ul>
    );
};

