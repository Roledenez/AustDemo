Template.homeIndex.helpers({
    featured : function(){
        return Products.featured();
    }
});

Meteor.startup(function() {
        Meteor.startup(function() {
            //GoogleMaps.load({ v: '3', key: Meteor.settings.public.googleMapAPIKey, libraries: 'geometry,places' });
        });

});

if (Meteor.isClient) {
    Meteor.startup(function() {
        GoogleMaps.load({ v: '3', key: Meteor.settings.public.googleMapAPIKey, libraries: 'geometry,places' });

    });

    Template.homeMap.helpers({
        exampleMapOptions: function() {
            // Make sure the maps API has loaded
            console.log('map template body');
            if (GoogleMaps.loaded()) {
                // Map initialization options
                return {
                    center: new google.maps.LatLng(-37.8136, 144.9631),
                    zoom: 8
                };
            }
        }
    });

    Template.homeMap.onCreated(function() {
        // We can use the `ready` callback to interact with the map API once the map is ready.
        GoogleMaps.ready('exampleMap', function(map) {
            // Add a marker to the map once it's ready
            var marker = new google.maps.Marker({
                position: map.options.center,
                map: map.instance
            });
        });
    });
}
