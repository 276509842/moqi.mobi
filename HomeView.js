define([
    'jquery',
    'underscore',
    'mustache',
    'text!/index.html',
    'json!/configure.json'
], function($, _, Mustache, indexTemplate, configure) {

    var HomeView = Backbone.View.extend({
        el: $('#aboutArea'),

        render: function() {
            this.$el.html(Mustache.to_html(indexTemplate, configure));
        }
    });

    return HomeView;
});