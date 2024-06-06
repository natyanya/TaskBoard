Ext.define('TaskBoard.view.board.BoardController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.board',
    control: {
        'boardcolumn dataview': {
            itemclick: 'openTaskForm'
        }
    },
    openTaskForm: function(view, record) {
        let win = Ext.create('TaskBoard.view.board.BoardWindow');

        win.down('form').loadRecord(record);
        win.setTitle(record.get('id'));
        win.show();
    },
    closeWindow: function() {
        this.getView().close();
    },
    saveTask: function() {
        let form = this.getView().down('form');

        form.updateRecord();
        form.getRecord().commit();

        this.getView().close();
    }
});
