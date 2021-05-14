import React from 'react';
import {setImportanceTaskDispatcher} from '../../../../../store/dispatchers/dispatcher';


export const ButtonImportance = ({id, importance}) => {

    const buttonText = (importance === false ? 'отметить как важное' : 'снять отметку как важное');
    return (
        <button onClick={() => setImportanceTaskDispatcher(id)}> {buttonText}</button>);
};

