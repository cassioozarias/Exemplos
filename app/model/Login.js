Ext.define('WSExt.model.Login', {
    extend: 'Ext.data.Model',
    fields: [
    {name: 'id'}, 
    { name: 'usuario',
      type: 'string'
    },
    {name: 'senha',
     type: 'string' 
    }
  ]
});
