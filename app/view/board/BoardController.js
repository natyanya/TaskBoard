Ext.define('TaskBoard.view.board.BoardController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.board',
    control: {
        'boardcolumn': {
            render: 'addDropZone'
        },
        'boardcolumn dataview': {
            render: 'addDragZone',
            itemclick: 'openTaskForm'
        }
    },
    addDragZone: function(view) {
        view.dragZone = new Ext.dd.DragZone(view.getEl(), {
            /**
             * Возвращает объект перетаскивания при событии mousedown,
             * если оно находится внутри dataview
             */
            getDragData: function(e) {
                /**
                 * Проверяет, что курсор мыши находится на узле dataview
                 * по свойству itemSelector
                 */
                let sourceEl = e.getTarget(view.itemSelector, 20);

                /**
                 * Если курсор находится внутри узла dataview,
                 * клонирует узел для создания ddel элемента для перетаскивания.
                 * Добавляет данные возвращаемому объекту
                 */
                if (sourceEl) {
                    let d = sourceEl.cloneNode(true);
                    d.id = Ext.id();

                    return {
                        ddel: d,
                        sourceEl: sourceEl,
                        repairXY: Ext.fly(sourceEl).getXY(),
                        sourceStore: view.store,
                        draggedRecord: view.getRecord(sourceEl)
                    }
                }
            },
            /**
             * Указывает координаты для возвращения при неудачном перетаскивании.
             * Это исходные координаты XY захваченного перетаскиваемого элемента
             * в методе getDragData
             */
            getRepairXY: function() {
                return this.dragData.repairXY;
            }
        });
    },
    addDropZone: function(view) {
        view.dropZone = new Ext.dd.DropZone(view.getEl(), {
            /**
             * Если указатель мыши находится над колонкой задач,
             * то возвращает этот узел
             */
            getTargetFromEvent: function(e) {
                return e.getTarget();
            },
            /**
             * Обрабатывает перенос задачи в новое место
             */
            onNodeDrop: function(target, dd, e, data) {
                let record = data.draggedRecord,
                    targetComponent = Ext.Component.from(target),
                    newStatus;

                if (targetComponent.getXType() === 'dataview') {
                    targetComponent = targetComponent.up('boardcolumn');
                }

                newStatus = targetComponent.status;

                record.set('status', newStatus);
                record.commit();

                return true;
            } 
        });
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
