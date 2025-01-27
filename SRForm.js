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
        let me = this, cWin = Ext.create('MyApp.view.CWindow',{
            rec: "classy"
        });
        cWin.on('updateClass', me.updateClassy, me);
        cWin.show();

        // Add the postMessage listener
        window.addEventListener('message', cWin.messageHandler);
    },
    updateClassy: function(classx) {
        var me = this, cj;

        cj = classx.classxJson;
});
