import React from 'react';
import {setInputHandlerDispatcher} from '../../../../../store/dispatchers/dispatcher';

export const ButtonDisplayList = () => {
    return (
        <div>
            <button key={101} onClick={() => setInputHandlerDispatcher('all')}>все задачи</button>
            <button key={102} onClick={() => setInputHandlerDispatcher('active')}>активные задачи</button>
            <button key={103} onClick={() => setInputHandlerDispatcher('completed')}>завершенные задачи</button>
        </div>
    );
};


