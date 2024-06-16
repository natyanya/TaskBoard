Ext.define('TaskBoard.view.board.BoardColumn', {
    extend: 'Ext.panel.Panel',
    xtype: 'boardcolumn',
    items: [{
        xtype: 'dataview',
        viewModel: 'board',
        itemSelector: 'div.task-card',
        itemTpl: new Ext.XTemplate(
            '<tpl for=".">',
                '<div class="task-card unselectable importance-{[this.getClass(values.importance)]}">',
                    '<div>{id}</div>',
                    '<div>{title}</div>',
                    '<div>{user}</div>',
                '</div>',
            '</tpl>',
            {
                getClass: function(importance) {
                    return importance.toLowerCase();
                }
            }
        ),
        bind: {
            store: '{columnTasks}'
        }
    }]
});