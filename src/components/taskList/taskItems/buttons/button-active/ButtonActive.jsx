import React from 'react';
import PropTypes from 'prop-types';

export const ButtonActive = ({id, active, activeTask}) => {
    const buttonText = (active === false ? 'активировать задачу' : 'завершить задачу');
    return (
        <button onClick={() => activeTask(id)}> {buttonText}</button>);
};
ButtonActive.PropTypes = {
    id: PropTypes.number.isRequired,
    active: PropTypes.bool.isRequired,
    activeTask: PropTypes.func.isRequired
};