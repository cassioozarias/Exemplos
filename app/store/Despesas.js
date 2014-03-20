Ext.define('WSExt.store.Despesas', {
    extend: 'Ext.data.Store',
    autoLoad: false,
    remoteSort: false,
    fields: ['total', 'mes'],
    proxy: {
        type: 'ajax',
        url: 'php/Financa.php?action=despesa',
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        }
    }
});