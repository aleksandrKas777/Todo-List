import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {ContextTogoList} from '../../../../context/ContextTogoList';

export const ButtonImportance = ({id, importance}) => {
    const {importanceTask} = useContext(ContextTogoList);
    const buttonText = (importance === false ? 'отметить как важное' : 'снять отметку как важное');
    return (
        <button onClick={() => importanceTask(id)}> {buttonText}</button>);
};

ButtonImportance.PropTypes = {
    id: PropTypes.number.isRequired,
    importance: PropTypes.bool.isRequired,
};