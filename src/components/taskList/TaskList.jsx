import React from 'react';
import {TaskItem} from './taskItems/TaskItem';
import PropTypes, {shape} from 'prop-types';

export const TaskList = ({taskList = [], deleteTask, importanceTask, activeTask}) => {
    return (
        <ul> список задач
            {taskList.map((item) => {
                const {...props} = item;
                return <TaskItem key={item.id} {...props} deleteTask={deleteTask}
                                 importanceTask={importanceTask} activeTask={activeTask}/>;
            })}
        </ul>
    );
};

TaskList.propTypes = {
    taskList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            importance: PropTypes.bool.isRequired,
            active: PropTypes.bool.isRequired
        })
    ).isRequired,
    deleteTask: PropTypes.func.isRequired,
    importanceTask: PropTypes.func.isRequired,
    activeTask: PropTypes.func.isRequired,
};