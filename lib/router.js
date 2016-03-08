Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound'
});

Router.route('/',{
    name : 'homeIndex',
    data : function(){
        return {
            message : 'Welcome to the Home page'
        }
    }
});

Router.route('/about',{
    name : 'homeAbout',
});

Router.route('/contact',{
    name : 'homeContact',
});