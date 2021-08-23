import React from 'react';
import PropTypes from 'prop-types';
import {setActiveTaskDispatcher} from '../../../../../store/dispatchers/dispatcher';
import markCompleted from '../../../../../images/markComleted.png';
import checkMarkCompleted from '../../../../../images/checkMarkComleted.png';

export const ButtonActive = ({id, active}) => {
    const chekMarkCompleted = (active === false ? markCompleted : checkMarkCompleted);
    return (
        <div className='btn' onClick={() => setActiveTaskDispatcher(id)}>
            <img className='checkCompleted' src={chekMarkCompleted} alt='готово'/>
        </div>);
};
ButtonActive.PropTypes = {
    id: PropTypes.number.isRequired,
    active: PropTypes.bool.isRequired,
};