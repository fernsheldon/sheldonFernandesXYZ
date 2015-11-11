controllers.controller('MainController',function() {
    var vm = this;
    vm.status = "Main Controller working"
    vm.show=show;

    vm.countryMarkers = [
      {
        id:1,
        latitude: 21,
        longitude: 78,
        title:"India"
      },
      {
        id:2,
        latitude: 24,
        longitude: 45,
        title:"Saudi Arabia"
      },
      {
        id:3,
        latitude: 26,
        longitude: 50.55,
        title:"Bahrain"
      },
      {
        id:4,
        latitude: 25.2048,
        longitude: 55.2708,
        title:"Dubai"
      },
      {
        id:5,
        latitude: 24.4667,
        longitude: 54.3667,
        title:"UAE"
      },
      {
        id:5,
        latitude: 1.,
        longitude: 103,
        title:"Singapore"
      },
      {
        id:7,
        latitude: 13.7500,
        longitude: 100.4833,
        title:"Thailand"
      },
      {
        id:8,
        latitude: 3.1333,
        longitude: 101.7000,
        title:"Malaysia"
      },
      {
        id:9,
        latitude: 38.8833,
        longitude: 77.0167,
        title:"U.S.A"
      },
      {
        id:10,
        latitude: 25.0667,
        longitude: 77.3333,
        title:"Bahamas"
      }
    ]
    vm.map = {center: {latitude: 26, longitude: -6 }, zoom: 3 ,  events: {
            'tilesloaded': function(map, eventName, arguments) {
              google.maps.events.trigger(map, 'resize');
            }
          }};
    vm.mapOptions={scrollwheel:false, draggable:true};


    function show(page) {
      if(page==='about'){
        vm.showAbout=true;
        vm.showHome=false;
        vm.showPlaces=false;
      }else if (page==='home') {
        vm.showAbout=false;
        vm.showHome=true;
        vm.showPlaces=false;
      }else if (page==='places') {
        vm.showAbout=false;
        vm.showHome=false;
        vm.showPlaces=true;
      }
        }


  }
);
