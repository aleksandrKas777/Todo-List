import React, {useContext} from 'react';
import {TaskItem} from './taskItems/TaskItem';
import PropTypes, {shape} from 'prop-types';
import {ContextTogoList} from '../context/ContextTogoList';

export const TaskList = () => {
    const {taskList = []} = useContext(ContextTogoList);
    return (
        <ul> список задач
            {taskList.map((item) => {
                const {...props} = item;
                return <TaskItem key={item.id} {...props} />;
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
    ).isRequired
};