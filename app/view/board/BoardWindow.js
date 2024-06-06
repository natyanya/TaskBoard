Ext.define('TaskBoard.view.board.BoardWindow', {
    extend: 'Ext.window.Window',
    xtype: 'boardWindow',
    controller: 'board',
    modal: true,
    width: 400,
    height: 370,
    layout: 'fit',
    constructor: function() {
        this.items = [{
            xtype: 'form',
            padding: 10,
            layout: 'anchor',
            scrollable: true,
            defaults: {
                width: '100%',
                labelWidth: 100,
                allowBlank: false
            },
            items: [{
                xtype: 'textfield',
                name: 'id',
                fieldLabel: 'Number'
            }, {
                xtype: 'textfield',
                name: 'title',
                fieldLabel: 'Title'
            }, {
                xtype: 'textfield',
                name: 'user',
                fieldLabel: 'User name'
            }, {
                xtype: 'combobox',
                name: 'status',
                fieldLabel: 'Status',
                editable: false,
                forceSelection: true,
                valueField: 'id',
                displayField: 'id',
                store: Const.taskStatuses
            }, {
                xtype: 'combobox',
                name: 'importance',
                fieldLabel: 'Importance',
                editable: false,
                forceSelection: true,
                valueField: 'id',
                displayField: 'id',
                store: Object.keys(Const.taskWeights)
            }, {
                xtype: 'datefield',
                name: 'date',
                fieldLabel: 'Date',
                format: 'd.m.Y',
                submitFormat: 'Y-m-d'
            }],
            buttons: [{
                text: 'Save',
                itemId: 'saveBtn',
                formBind: true,
                listeners: {
                    click: 'saveTask'
                }
            }, {
                text: 'Cancel',
                itemId: 'cancelBtn',
                listeners: {
                    click: 'closeWindow'
                }
            }]
        }];

        this.callParent(arguments);
    }
});