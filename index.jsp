<!DOCTYPE html>
<html>
<head>
    <script type="text/javascript" src="https://cdn.sencha.com/ext/gpl/7.3.1/build/ext-all.js"></script>
    <link rel="stylesheet" type="text/css" href="https://cdn.sencha.com/ext/gpl/7.3.1/build/classic/theme-triton/resources/theme-triton-all.css">
    <script type="text/javascript">
        Ext.application({
            name: 'MyApp',
            launch: function() {
                Ext.create('MyApp.view.SRForm', {
                    renderTo: Ext.getBody()
                });
            }
        });
    </script>
</head>
<body>
</body>
</html>
