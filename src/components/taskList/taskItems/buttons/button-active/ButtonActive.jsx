import React from 'react';
import PropTypes from 'prop-types';
import {setActiveTaskDispatcher} from '../../../../../store/dispatchers/dispatcher';

export const ButtonActive = ({id, active}) => {
    const buttonText = (active === false ? 'активировать задачу' : 'завершить задачу');
    return (
        <button onClick={() => setActiveTaskDispatcher(id)}> {buttonText}</button>);
};
ButtonActive.PropTypes = {
    id: PropTypes.number.isRequired,
    active: PropTypes.bool.isRequired,
};