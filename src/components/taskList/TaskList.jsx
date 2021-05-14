import React from 'react';
import {TaskItem} from './taskItems/TaskItem';


export const TaskList = ({taskList}) => {
    return (
        <ul> список задач
            {taskList.map((item) => {
                const {...props} = item;
                return <TaskItem key={item.id} {...props} />;
            })}
        </ul>
    );
};

