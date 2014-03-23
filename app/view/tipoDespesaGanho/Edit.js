Ext.define('WSExt.view.tipoDespesaGanho.Edit',{
    extend: 'WSExt.view.AbstractWindow',
    alias: 'widget.tipoDespesaGanhoEdit',
    title: 'Edição de tipo de ganho e despesa',
    layout: 'fit',
    autoShow: true,
    modal: true,
    
    initComponent: function(){
        
        this.items = [{
            xtype: 'abstractform',
            items: [{
                name : 'nome',
                fieldLabel: 'Nome'
            }]}
        ];
        
        this.callParent(arguments);
    }
});

