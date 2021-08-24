import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import {TaskList} from './components/taskList/TaskList';
import {
    ButtonDisplayList,
    ButtonDispList
} from './components/taskList/taskItems/buttons/button-disp-list/ButtonDispList';
import {Form} from './components/form/form';
import {Loader} from './components/loader/loader';
import {ErrorBoundary} from './components/error/Error';
import {Provider, useSelector} from 'react-redux';
import {getTasks} from './store/getTasks';
import {
    setTaskListDispatcher,
    setInputHandlerDispatcher,
    filteredTasksDispatcher
} from './store/dispatchers/dispatcher';


export const App = () => {
    const {taskList, isLoaded, inputFilterValue, displayedList} = useSelector(store => store);

    useEffect(() => {
       getTasks().then(data => {
       setTaskListDispatcher(data);
        });
    }, []);

    useEffect(()=> {
        localStorage.setItem('todoList', JSON.stringify(taskList));
    }, [taskList]);


    if (!isLoaded) {
        return <Loader/>;
    }


    const inputHandler = (e) => filteredTasksDispatcher(e.target.value);
    const filteredTaskList = () => taskList.filter(item => item.name.includes(inputFilterValue));


    let newTaskList = null;
    if (inputFilterValue !== '') {
        newTaskList = filteredTaskList(taskList, inputFilterValue);
    } else if (displayedList === 'completed') {
        newTaskList = taskList.filter(item => item.active === false);
    } else if (displayedList === 'active') {
        newTaskList = taskList.filter(item => item.active === true);
    } else {
        newTaskList = taskList;
    }

    return (
        <ErrorBoundary>
            <div>
                <div className='panel'>
                    <div className='addTask'>
                        <Form/>

                    </div>
                    <div className='search'>
                        <input onChange={inputHandler}
                               value={inputFilterValue} type="text" placeholder='начните вводить для поиска'/>
                    </div>
                    <div className='title'><h1>список задач</h1></div>
                    <div className='buttonTask'>
                        {<ButtonDisplayList/>}
                    </div>
                </div>
                <div>
                    <TaskList taskList={newTaskList}/>
                </div>
            </div>
        </ErrorBoundary>
    );
};



