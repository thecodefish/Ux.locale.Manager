Ext.define('Ux.locale.override.st.tab.Panel', {
    override: 'Ext.tab.Panel',

    requires: [
        'Ux.locale.override.st.Container'
    ],

    constructor: function(config) {
        
        var me = this;

        //check if any children of this tabpanel are configured for locale support, and enable support if so
        if (config && config.items && config.items.length > 0) {
            Ux.locale.Manager.isLocalable(me, config.items[0]);
        }

        this.callSuper([config]);
    },

    setLocale: function(locale) {
        var me = this;

        var items = me.getInnerItems();
        
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            item.setLocale(locale);
            var tab = item.tab;
            if (tab) {
                var title = (tab.getTitle) ? tab.getTitle() : tab.config.title;
                tab.setTitle(title);
            }
        }
    }
});