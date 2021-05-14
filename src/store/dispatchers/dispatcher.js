import {actions} from '../reducers/reducer';
import {store} from '../store';

const {dispatch} = store;
const {setTaskList, importanceTask, deleteTask, activeTask, addNewTask, displayedTaskList, filteredTasks} = actions;

export const setTaskListDispatcher = (taskList) => dispatch(setTaskList(taskList));
export const setImportanceTaskDispatcher = (id) => dispatch(importanceTask(id));
export const setDeleteTaskDispatcher = (id) => dispatch(deleteTask(id));
export const setActiveTaskDispatcher = (id) => dispatch(activeTask(id));
export const setNewTaskDispatcher = (id) => dispatch(addNewTask(id));
export const setInputHandlerDispatcher = (id) => dispatch(displayedTaskList(id));
export const filteredTasksDispatcher = (id) => dispatch(filteredTasks(id));