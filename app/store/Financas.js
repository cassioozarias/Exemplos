Ext.define('WSExt.store.Financas', {
    extend: 'Ext.data.Store',
    autoLoad: false,
    fields: ['total', 'mes'],
    remoteSort: false,
    proxy: {
        type: 'ajax',
        url: 'php/Financa.php?action=balanco',
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        }
    }
});