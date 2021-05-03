import React, {useContext} from 'react';
import {ContextTogoList} from '../../../../context/ContextTogoList';

export const ButtonImportance = ({id, importance}) => {
    const {importanceTask} = useContext(ContextTogoList);
    const buttonText = (importance === false ? 'отметить как важное' : 'снять отметку как важное');
    return (
        <button onClick={() => importanceTask(id)}> {buttonText}</button>);
};

