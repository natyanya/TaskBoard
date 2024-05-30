Ext.define('TaskBoard.view.board.BoardModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.board',
    requires: [
        'TaskBoard.store.Tasks'
    ],
    stores: {
        tasks: {
            type: 'tasks'
        }
    }
});