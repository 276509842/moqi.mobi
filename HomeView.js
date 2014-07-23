define([
    'jquery',
    'underscore',
    'mustache',
    'text!/index.html',
    'text!/blog.html'
], function($, _, Mustache, indexTemplate, blogTemplate) {

    var BlogPostModel = Backbone.Model.extend({
        name: 'Blog Posts',
        url: function(){
            return this.instanceUrl;
        },
        initialize: function(props){
            this.instanceUrl = props;
        }
    });

    var HomeView = Backbone.View.extend({
        el: $('#aboutArea'),

        initialize: function(){
            this.getBlog();
        },

        getBlog: function() {
            var url = '/1.json';
            var that = this;
            collection = new BlogPostModel;
            collection.initialize(url);
            collection.fetch({
                success: function(collection, response){
                    that.render(response);
                }
            });
        },

        render: function(response) {
            this.$el.html(Mustache.to_html(blogTemplate, response));
        }
    });

    return HomeView;
});