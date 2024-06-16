Ext.define('TaskBoard.view.list.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'list',
    store: 'tasks',
    columns: [{
        dataIndex: 'id',
        text: 'Number',
        flex: 1
    }, {
        dataIndex: 'title',
        text: 'Title',
        flex: 1
    }, {
        dataIndex: 'user',
        text: 'User name',
        flex: 1
    }, {
        dataIndex: 'status',
        text: 'Status',
        flex: 1
    }, {
        dataIndex: 'importance',
        text: 'Importance',
        flex: 1
    }, {
        xtype: 'datecolumn',
        dataIndex: 'date',
        text: 'Date',
        format: 'd.m.Y',
        flex: 1
    }]
});