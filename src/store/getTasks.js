export const getTasks = () => new Promise( resolve => {
        resolve(JSON.parse(localStorage.getItem('todoList')) || []);
});