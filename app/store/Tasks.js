Ext.define('TaskBoard.store.Tasks', {
    extend: 'Ext.data.Store',
    alias: 'store.tasks',
    storeId: 'tasks',
    model: 'TaskBoard.model.Task',
    data: [{
        id: 'TSK-1005',
        title: 'Fix the coffee machine',
        user: 'Andrew',
        status: 'PLAN',
        importance: 'MUST',
        date: '2024-06-01'
    }, {
        id: 'TSK-1010',
        title: 'Find a new supplier',
        user: 'Sergey',
        status: 'IN PROGRESS',
        importance: 'SHOULD',
        date: '2024-05-26'
    }, {
        id: 'TSK-1011',
        title: 'Try new devices',
        user: 'Andrew',
        status: 'TESTING',
        importance: 'COULD',
        date: '2024-05-20'
    }, {
        id: 'TSK-1003',
        title: 'Sort papers',
        user: 'Maxim',
        status: 'DONE',
        importance: 'SHOULD',
        date: '2024-04-30'
    }, {
        id: 'TSK-1016',
        title: 'Conduct interviews with clients',
        user: 'Sergey',
        status: 'PLAN',
        importance: 'SHOULD',
        date: '2024-06-13'
    }, {
        id: 'TSK-1017',
        title: 'Write an article about plans',
        user: 'Maxim',
        status: 'IN PROGRESS',
        importance: 'COULD',
        date: '2024-05-31'
    }, {
        id: 'TSK-1021',
        title: 'Negotiate with new clients',
        user: 'Sergey',
        status: 'IN PROGRESS',
        importance: 'MUST',
        date: '2024-06-01'
    }, {
        id: 'TSK-1023',
        title: 'Buy a printer',
        user: 'Andrew',
        status: 'PLAN',
        importance: 'SHOULD',
        date: '2024-07-01'
    }, {
        id: 'TSK-1035',
        title: 'Find a training course',
        user: 'Andrew',
        status: 'PLAN',
        importance: 'COULD',
        date: '2024-08-13'
    }, {
        id: 'TSK-1040',
        title: 'Explore new company sites',
        user: 'Sergey',
        status: 'TESTING',
        importance: 'SHOULD',
        date: '2024-06-01'
    }]
});