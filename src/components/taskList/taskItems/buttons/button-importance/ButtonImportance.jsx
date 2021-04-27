import React from 'react';
import PropTypes from 'prop-types';

export const ButtonImportance = ({id, importance, importanceTask}) => {
    const buttonText = (importance === false ? 'отметить как важное' : 'снять отметку как важное');
    return (
        <button onClick={() => importanceTask(id)}> {buttonText}</button>);
};

ButtonImportance.PropTypes = {
    id: PropTypes.number.isRequired,
    importance: PropTypes.bool.isRequired,
    importanceTask: PropTypes.func.isRequired
};