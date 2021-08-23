import React from 'react';
import {setImportanceTaskDispatcher} from '../../../../../store/dispatchers/dispatcher';
import importantBtn from '../../../../../images/importantBtn.png';

export const ButtonImportance = ({id}) => {


    return (
        <div className='btn' onClick={() => setImportanceTaskDispatcher(id)}>
            <img className='rotate importance' src={importantBtn} alt='importanceTask'/>
        </div>);
};

