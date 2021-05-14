import React from 'react';
import {ButtonImportance} from './buttons/button-importance/ButtonImportance';
import {ButtonActive} from './buttons/button-active/ButtonActive';
import PropTypes from 'prop-types';
import {setDeleteTaskDispatcher} from '../../../store/dispatchers/dispatcher';


export const TaskItem = ({id, importance, active, name}) => {
    const style = {
        fontWeight: (importance === false ? 'normal' : 'bolder'),
        color: (active === false ? 'rgb(168, 168, 168)' : 'black')
    };

    return (
        <li className='line'>
            <div className='tasks' style={style}> {name} </div>
            <div className='buttonLine'>
                < ButtonImportance importance={importance} id={id}/>
                <ButtonActive active={active} id={id}/>
                <button onClick={() => setDeleteTaskDispatcher(id)}>удалить задачу</button>
            </div>
        </li>);


};

TaskItem.ProTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    importance: PropTypes.bool.isRequired,
    active: PropTypes.bool.isRequired,
};


