import React, {useState, useEffect, createContext} from 'react';
import ReactDOM from 'react-dom';
import {TaskList} from './components/taskList/TaskList';
import {ButtonDispList} from './components/taskList/taskItems/buttons/button-disp-list/ButtonDispList';
import {Form} from './components/form/form';
import {Loader} from './components/loader/loader';
import {ContextTogoList} from './components/context/ContextTogoList';


const App = () => {

    const taskListState = [
        {
            id: 1,
            name: 'learn js',
            importance: true,
            active: false
        },
        {
            id: 2,
            name: 'task2',
            importance: false,
            active: true
        },
        {
            id: 3,
            name: 'drink coffee',
            importance: false,
            active: false
        },
        {
            id: 4,
            name: 'learn react',
            importance: true,
            active: true
        },
    ];

    const [taskList, setTaskList] = useState(null);
    const [displayedList, setDisplayedList] = useState('all');
    const [inputFilterValue, setInputFilterValue] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setTaskList(taskListState);
            setIsLoaded(true);
        }, 2000);
    }, []);


    const importanceTask = (id) => {
        const stateImportanceTask = (prevState => {
            const newTaskList = prevState.map(item => {
                return {
                    ...item,
                    importance: item.id === id ? !item.importance : item.importance
                };
            });
            return newTaskList;
        });
        setTaskList(stateImportanceTask);
    };


    const activeTask = (id) => {
        const stateActiveTask = (prevState) => {
            const newTaskList = prevState.map(item => {
                return {
                    ...item,
                    active: item.id === id ? !item.active : item.active
                };
            });
            return newTaskList;
        };
        setTaskList(stateActiveTask);
    };


    const deleteTask = (id) => {
        const stateDeleteTask = (prevState) => {
            const newTaskList = prevState.filter(item => {
                if (item.id !== id) {
                    return {...item};
                }
                ;
            });
            return newTaskList;
        };
        setTaskList(stateDeleteTask);
    };


    const displayList = (key) => setDisplayedList(key);
    const inputHandler = (e) => setInputFilterValue(e.target.value);

    const filteredTaskList = () => taskList.filter(item => item.name.includes(inputFilterValue));


    const addNewTask = (newTaskName) => {
        const stateAddNewTask = (prevState) => {
            const arrId = prevState.map(item => item.id);
            const newId = Math.max.apply(null, arrId) + 1;
            const newTask = {
                id: newId,
                name: newTaskName,
                importance: true,
                active: true
            };
            const stateNewTask = prevState;
            stateNewTask.push(newTask);
            return stateNewTask;
        };
        setTaskList(stateAddNewTask);
    };

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



    const contextValue = {
        deleteTask,
        importanceTask,
        displayList,
        activeTask,
        taskList: newTaskList
    };


    if (!isLoaded) {
        return <Loader/>;
    } else {
        return (
            <ContextTogoList.Provider value={contextValue}>
                <div>
                    <div className='panel'>
                        <div>
                            <Form addNewTask={addNewTask}/>
                        </div>
                        <input onChange={inputHandler} value={inputFilterValue} type="text"/>
                        <div>
                            <ButtonDispList displayList={displayList}/>
                        </div>
                    </div>
                    <div>
                        <TaskList />
                    </div>
                </div>
            </ContextTogoList.Provider>
        );
    }
};


ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
