define([
    'jquery',
    'underscore',
    'backbone',
    'HomeView',
    'BlogDetail'
], function($, _, Backbone, HomeView, BlogDetail) {

    var AppRouter = Backbone.Router.extend({
        routes: {
            'index': 'homePage',
            'blog/*slug': 'blog',
            '*actions': 'homePage'
        }
    });
    var initialize = function() {
        var app_router = new AppRouter;

        app_router.on('route:homePage', function() {
            var homeView = new HomeView();
            homeView.render();
        });

        app_router.on('route:blog', function(blogSlug){
            var blogDetailsView = new BlogDetail();
            blogDetailsView.getBlog(blogSlug);
        });

        Backbone.history.start();
    };
    return {
        initialize: initialize
    };
});