define([
    'jquery',
    'underscore',
    'mustache',
    'text!/blog_details.html'
],function($, _, Mustache, blogDetailsTemplate){

    var BlogPostModel = Backbone.Model.extend({
        name: 'Blog Posts',
        url: function(){
            return this.instanceUrl;
        },
        initialize: function(props){
            this.instanceUrl = props;
        }
    });

    var BlogDetailView = Backbone.View.extend ({
        el: $("#content"),

        initialize: function () {
        },

        getBlog: function(slug) {
            url = "http://api.phodal.net/blog/" + slug;
            var that = this;
            collection = new BlogPostModel;
            collection.initialize(url);
            collection.fetch({
                success: function(collection, response){
                    that.render(response);
                }
            });
        },

        render: function(response){
            this.$el.html(Mustache.to_html(blogDetailsTemplate, response));
        }
    });

    return BlogDetailView;
});