import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {ContextTogoList} from '../../../../context/ContextTogoList';

export const ButtonActive = ({id, active}) => {
    const {activeTask} = useContext(ContextTogoList);
    const buttonText = (active === false ? 'активировать задачу' : 'завершить задачу');
    return (
        <button onClick={() => activeTask(id)}> {buttonText}</button>);
};
ButtonActive.PropTypes = {
    id: PropTypes.number.isRequired,
    active: PropTypes.bool.isRequired,
};