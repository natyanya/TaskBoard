Ext.define('TaskBoard.model.Task', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'string'
    }, {
        name: 'title',
        type: 'string'
    }, {
        name: 'user',
        type: 'string'
    }, {
        name: 'status',
        type: 'string'
    }, {
        name: 'importance',
        type: 'string'
    }, {
        name: 'date',
        type: 'date',
        dateFormat: 'Y-m-d'
    }]
});