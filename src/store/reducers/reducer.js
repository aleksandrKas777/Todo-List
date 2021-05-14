import {createSlice} from '@reduxjs/toolkit';

const sliceConfig = {
    name: 'taskListReducer',
    initialState: {
        taskList: null,
        isLoaded: false,
        inputFilterValue: '',
        displayedList: 'all'
    },
    reducers: {
        setTaskList: (state, action) => {
            state.taskList = action.payload;
            state.isLoaded = true;
        },
        importanceTask: (state, action) => {
            const {taskList} = state;
            state.taskList = taskList.map((item) => {
                const {id, importance} = item;

                return {
                    ...item,
                    importance: action.payload === id ? !importance : importance
                };
            });
        },
        activeTask: (state, action) => {
            const {taskList} = state;
            state.taskList = taskList.map(item => {
                const {id, active} = item;
                return {
                    ...item,
                    active: action.payload === id ? !active : active
                };
            });
        },
        deleteTask: (state, action) => {
            const {taskList} = state;
            state.taskList = taskList.filter(item => {
                if (action.payload !== item.id) return {...item};
            });
        },
        addNewTask: (state, action) => {
            const {taskList} = state;
            const arrId = taskList.map(item => item.id);
            const newId = Math.max.apply(null, arrId) + 1;
            const newTask = {
                id: newId,
                name: action.payload,
                importance: true,
                active: true
            };
            const stateNewTask = taskList;
            stateNewTask.push(newTask);
            state.taskList = stateNewTask;
        },
        displayedTaskList: (state, action) => {
            state.displayedList = action.payload;
        },
        filteredTasks: (state, action) => {
            state.inputFilterValue = action.payload;
        }



    }
};
export const {reducer, actions} = createSlice(sliceConfig);