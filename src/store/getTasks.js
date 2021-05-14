export const getTasks = () => new Promise( resolve => {
    setTimeout(() => {
        resolve([
            {
                id: 1,
                name: 'learn js',
                importance: true,
                active: false
            },
            {
                id: 2,
                name: 'drink coffee',
                importance: false,
                active: false
            },
            {
                id: 3,
                name: 'learn react',
                importance: true,
                active: true
            },
        ]);
    }, 1000);
});