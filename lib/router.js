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

Router.route('/map',{
    name : 'homeMap',
});

Router.route('/party',{
    name : 'homeParty',
});

Router.route('/products/:sku',{
    name : 'productsShow',
    data : function(){
        return Products.findOne({sku : this.params.sku});
    }
});