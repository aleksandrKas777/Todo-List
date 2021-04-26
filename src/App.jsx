import React, {useState, Component, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {TaskList} from './components/taskList/TaskList';
import {ButtonDispList} from './components/taskList/taskItems/buttons/button-disp-list/ButtonDispList';
import {Form} from './components/form/form';
import {Loader} from './components/loader/loader';


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
    const[isLoaded, setIsLoaded] = useState(false);

    useEffect(()=>{
        setTimeout(() => {
            setTaskList(taskListState);
            setIsLoaded(true);
        }, 2000);
    },[]);




    const importanceTask = (id) => {
        setTaskList((prevState) => {
            const newTaskList = prevState.map(item => {
                if (item.id === id) {
                    item.importance = (item.importance === false ? true : false);
                }
                return item;
            });
            return newTaskList;
        });
    };


    const activeTask = (id) => {
        setTaskList((prevState) => {
            const newTaskList = prevState.map(item => {
                if (item.id === id) {
                    item.active = (item.active === false ? true : false);
                }
                return item;
            });
            return newTaskList;
        });
    };


    const deleteTask = (id) => {
        setTaskList((prevState) => {
            const newTaskList = (prevState.filter(item => item.id !== id));
            return newTaskList;
        });
    };

    const displayList = (key) => setDisplayedList(key);
    const inputHandler = (e) => setInputFilterValue(e.target.value);
    const filteredTaskList = () => taskList.filter(item => item.name.includes(inputFilterValue));

    const addNewTask = (newTaskName) => {
        setTaskList((prevState) => {
            const arrId = prevState.map(item => item.id);
            const newId = Math.max.apply(null, arrId) + 1;

            const newTask = {
                id: newId,
                name: newTaskName,
                importance: true,
                active: true
            };
            prevState.push(newTask);
            return prevState;
        });
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


    if(!isLoaded){
        return <Loader/>;
    } else{
        return (
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
                    <TaskList taskList={newTaskList} deleteTask={deleteTask}
                              importanceTask={importanceTask} activeTask={activeTask}/>
                </div>
            </div>
        );
    }
};


ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
