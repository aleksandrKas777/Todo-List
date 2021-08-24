import React from 'react';
import {ButtonImportance} from './buttons/button-importance/ButtonImportance';
import {ButtonActive} from './buttons/button-active/ButtonActive';
import PropTypes from 'prop-types';
import {setDeleteTaskDispatcher} from '../../../store/dispatchers/dispatcher';
import deleteIcon from '../../../images/delete.png';
import importanceTask from '../../../images/importantTask.png';


export const TaskItem = ({id, importance, active, name}) => {

    const importanceMark = importance === true ? <img src={importanceTask} alt='important'/> : null;

    const styleLine = {
        backgroundColor: (active === false ? '#42b856' : '#b8b800')
    };

    return (
        <li className='line' style={styleLine}>
            <ButtonActive active={active} id={id}/>
            <div className='taskRotate'>
                <div className='tasks'>
                    <div className='rotate importanceMark'>{importanceMark}</div>
                    <div>{name}</div>
                </div>
                <div className='buttonLine'>
                    < ButtonImportance importance={importance} id={id}/>
                    <div className='btn' onClick={() => setDeleteTaskDispatcher(id)}>
                        <img className='rotate' src={deleteIcon} alt='delete'/>
                    </div>
                </div>
            </div>
        </li>);


};

TaskItem.ProTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    importance: PropTypes.bool.isRequired,
    active: PropTypes.bool.isRequired,
};


