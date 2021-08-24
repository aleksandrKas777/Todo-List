export const getTasks = () => new Promise( resolve => {
    setTimeout(() => {
        resolve(JSON.parse(localStorage.getItem('todoList')) || []);
    }, 1000);
});