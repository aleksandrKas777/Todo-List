import React from 'react';
import {TaskItem} from './taskItems/TaskItem';


export const TaskList = ({taskList}) => {
    return (
        <ul>
            {taskList.map((item) => {
                const {...props} = item;
                return <TaskItem key={item.id} {...props} />;
            })}
        </ul>
    );
};

