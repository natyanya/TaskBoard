Ext.define('TaskBoard.Constants', {
    singleton: true,
    alternateClassName: 'Const',
    taskStatuses: [
        'PLAN',
        'IN PROGRESS',
        'TESTING',
        'DONE'
    ],
    taskWeights: {
        MUST: 1,
        SHOULD: 2,
        COULD: 3
    }

});