// CWindow.js
Ext.define('MyApp.view.CWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.cwindow',

    title: 'C Window',
    width: 800,
    height: 600,
    layout: 'fit',
    modal: true,
    closeAction: 'destroy',

    html: '<iframe id="cFrame" src="https://abc.com/embed" width="100%" height="100%" frameborder="0"></iframe>',

    initComponent: function() {
        this.callParent(arguments);
    },

    listeners: {
        close: function() {
            window.removeEventListener('message', this.messageHandler);
        }
    },

    messageHandler: function(event) {
        const data = event.data;
        if (data) {
            if (data.status === 0) {
                console.log('C Initializing requested. Sending params...');
                event.source.postMessage({
                    buildId: 'xxx'
                }, '*');
            } else if (data.status === 1) {
                console.log('C Successful Response!');
            } else if (data.status === 2) {
                console.log('C Error: ' + data.errorMessage);
            } else if (data.status === 3) {
                console.log('C close window requested...');
            }
            if (data.status >= 2) {
                // Close the window
                const win = Ext.ComponentQuery.query('cwindow')[0];
                if (win) {
                    win.close();
                }
            }
        }
    }
});
