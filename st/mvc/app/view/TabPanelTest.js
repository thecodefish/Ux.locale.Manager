Ext.define('Locale.view.TabPanelTest', {
    extend: 'Ext.Container',
    
    requires: [
        'Ext.tab.Panel'
    ],

    config: {
        layout: 'card',
        
        items: [
            {
                xtype: 'tabpanel',
                items: [
                    {
                        title: 'a&nbsp;',
                        locales: {
                            html: 'tabs.one.html',
                            title: 'tabs.one.title'
                        }
                    },
                    {
                        title: 'b&nbsp;',
                        locales: {
                            title: 'tabs.two.title',
                            html: 'tabs.two.html'
                        }
                    },
                    {
                        title: 'c&nbsp;',
                        locales: {
                            html: 'tabs.three.html',
                            title: 'tabs.three.title'
                        }
                    }
                ]
            }
        ]
    }
});
