Ext.define('TaskBoard.view.board.Board', {
    extend: 'Ext.panel.Panel',
    xtype: 'board',
    controller: 'board',
    border: true,
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    requires: [
        'TaskBoard.view.board.BoardColumn',
        'TaskBoard.view.board.BoardModel',
        'TaskBoard.view.board.BoardWindow'
    ],
    constructor: function() {
        let columns = [];

        Const.taskStatuses.forEach(function(status) {
            columns.push({
                xtype: 'boardcolumn',
                title: status,
                status: status,
                border: true,
                flex: 1,
                padding: 5,
                viewModel: {
                    stores: {
                        columnTasks: {
                            source: 'tasks',
                            filters: {
                                property: 'status',
                                value: status
                            }
                        }
                    }
                }
            });
        });
        
        this.items = columns;

        this.callParent(arguments);
    }
});