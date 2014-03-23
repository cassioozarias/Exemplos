Ext.define('WSExt.controller.TipoDespesaGanho',{
    
    extend: 'Ext.app.Controller',
    stores: ['TipoDespesaGanhos'],
    models: ['TipoDespesaGanho'],
    
    views: [
        'tipoDespesaGanho.Edit',
        'tipoDespesaGanho.List'
    ],
    
    refs: [
        {
            ref: 'tipoDespesaGanhoList',
            selector: 'tipoDespesaGanhoList'
        },
        {
            ref: 'tipoDespesaGanhoEdit',
            selector: 'tipoDespesaGanhoEdit'
        }
    ],
    
    init: function(){
        this.control({
            'tipoDespesaGanhoList': {
                itemdblclick: this.edit
            },
            
            'tipoDespesaGanhoList button[action=insert]': {
                click: this.insert
            },
            
            'tipoDespesaGanhoList button[action=edit]': {
                click: this.edit
            },

            'tipoDespesaGanhoList button[action=destroy]': {
                click: this.destroy
            },

            'tipoDespesaGanhoList button[action=refresh]': {
                click: this.refresh
            },

            'tipoDespesaGanhoEdit button[action=save]': {
                click: this.save
            }
        });
    },
    
    insert: function(btn, evt, opt){
        var editView = Ext.widget('tipoDespesaGanhoEdit');
        editView.title = 'Inserindo novo tipo de despesa ou ganho';
    },
    
    refresh: function(){
        this.getTipoDespesaGanhoList().store.load();
    },
    
    insert: function(btn, evt, opt) {
        var view = Ext.widget('tipoDespesaGanhoEdit');
        view.setTitle('Inserindo novo tipo de despesa ou ganho');
    },
    
    destroy: function() {
        
        var grid    = this.getTipoDespesaGanhoList(),
            records = grid.getSelectionModel().getSelection();

        if(records.length === 0){
            Ext.Msg.alert('Atenção', 'Nenhum registro selecionado');
            return false;
        }else{
            Ext.Msg.show({
                title : 'Confirmação',
                msg : 'Tem certeza que deseja deletar o(s) registro(s) selecionado(s)?',
                buttons : Ext.Msg.YESNO,
                icon : Ext.MessageBox.WARNING,
                scope : this,
                width : 450,
                fn : function(btn, ev){
                    if (btn == 'yes') {
                        var store = this.getTipoDespesaGanhoList().store;
                        store.remove(records);
                        this.getTipoDespesaGanhoList().store.sync();
                    }
                }
            });
        }
    },

    save: function(button, evt, opt) {	
        
        var win     = button.up('window'),
            form    = win.down('form').getForm(),
            id      = form.getRecord() ? form.getRecord().get('id') : 0;
        
        if (form.isValid()) {
            var record = form.getRecord(),
                values = form.getValues();

            if (record){
                if(record.data['id']){
                    record.set(values);
                }
            } else{
                var record = Ext.create('WSExt.model.TipoGanho');
                record.set(values);
                this.getTipoDespesaGanhoList().store.add(record);
            }

            win.close();
            this.getTipoDespesaGanhoList().store.sync();
        }else{
            Ext.ux.Msg.flash({
                msg: 'Há campos preenchidos incorretamente',
                type: 'error'
            });
            
        }
        
    },
    
    edit: function(){
        
        var records = this.getTipoDespesaGanhoList().getSelectionModel().getSelection();    	
    	
        if(records.length === 1){
            var editWind = Ext.widget('tipoDespesaGanhoEdit');    	
            var editForm = editWind.down('form');
            var record = records[0];
            editForm.loadRecord(record);
        }else{
            return;
        }		
    }
});