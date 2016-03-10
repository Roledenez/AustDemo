Meteor.startup(function(){
   navigator.geolocation.getCurrentPosition(success);
});

success = function(position){
    Session.set('location',position);
    console.log('location set');
    console.log(position);
}

if(Meteor.isClient){
    Meteor.startup(function() {
        GoogleMaps.load({ v: '3', key: Meteor.settings.public.googleMapAPIKey, libraries: 'geometry,places' });
    });
}