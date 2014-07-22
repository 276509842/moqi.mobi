require.config({
    paths: {
        'text': 'text',
        jquery: 'jquery',
        json: 'require/json'
    },
    shim: {
        underscore: {
            exports: '_'
        }
    }
});

require(['app'], function(App) {
    App.initialize();
});