Ext.define('TaskBoard.view.board.BoardController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.board',
    control: {
        'board': {
            beforerender: 'fillBoard'
        },
        'boardcolumn dataview': {
            itemclick: 'openTaskForm'
        }
    },
    fillBoard: function(panel) {
        const statuses = ['PLAN', 'IN PROGRESS', 'TESTING', 'DONE'];

        Ext.create('TaskBoard.store.Tasks');

        statuses.forEach(function(status) {
            panel.add({
                xtype: 'boardcolumn',
                title: status,
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
                            },
                            sorters: [{
                                property: 'user'
                            }, {
                                sorterFn: function(record1, record2) {
                                    const weights = {
                                        MUST: 1,
                                        SHOULD: 2,
                                        COULD: 3
                                    };

                                    let imp1 = record1.get('importance'),
                                        imp2 = record2.get('importance');

                                    return (weights[imp1] > weights[imp2])
                                        ? 1
                                        : (weights[imp1] === weights[imp2] ? 0 : -1);
                                }
                            }]
                        }
                    }
                }
            });
        });
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
