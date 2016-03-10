Template.homeIndex.helpers({
    featured : function(){
        return Products.featured();
    }
});

Meteor.startup(function() {
        Meteor.startup(function() {
            GoogleMaps.load({ v: '3', key: Meteor.settings.public.googleMapAPIKey, libraries: 'geometry,places' });
        });

});
