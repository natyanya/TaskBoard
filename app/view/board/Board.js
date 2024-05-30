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
    ]
});