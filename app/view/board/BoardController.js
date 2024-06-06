Ext.define('TaskBoard.view.board.BoardController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.board',
    control: {
        'boardcolumn dataview': {
            itemclick: 'openTaskForm'
        }
    },
    openTaskForm: function(view, record) {
        let win = Ext.create('TaskBoard.view.board.BoardWindow'),
            store = Ext.data.StoreManager.lookup('tasks'),
            form = win.down('form');

        form.getForm().findField('id').validator = function(value) {
            let existingNumberIndex = store.findBy(rec => rec.get('id') === value);
            
            if (
                value
                && value !== record.get('id')
                && existingNumberIndex != -1
            ) {
                return 'There is already a task with this number';
            }

            return true;
        }
        form.loadRecord(record);
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
