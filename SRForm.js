// SRForm.js
Ext.define('MyApp.view.SRForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.srform',

    title: 'SR Form',
    bodyPadding: 10,
    items: [
        // Your form items here
    ],
    buttons: [
        {
            text: 'Classify',
            handler: function() {
                this.onClassify();
            },
            scope: this
        }
    ],

    onClassify: function() {
        window.currentForm = this;
        this.openCWindow();
    },

    openCWindow: function() {
        let cWin = Ext.create('MyApp.view.CWindow');
        cWin.show();

        // Add the postMessage listener
        window.addEventListener('message', cWin.messageHandler);
    }
});
