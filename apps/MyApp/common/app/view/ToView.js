Ext.define('MyApp.view.ToView', {
    extend: 'Ext.Container',
    id: 'ToView',
    requires: [
        'Ext.Toolbar',
        'Ext.Button'
    ],

    config: {
        id: 'MyAppTo',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: 'ToApp'
            },
        ]
    }
});