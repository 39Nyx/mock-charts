




var option = {
    title: {
        text: '广州地铁',
        subtext: '',
        textStyle: {
            color: '#ffffff'
        }
    },
    bmap: {
        roam: true,
        center: [113.275, 23.117],
        zoom: 12,
        mapStyle: {
            styleJson: [{
                    'featureType': 'land',
                    'elementType': 'geometry',
                    'stylers': {
                        'color': '#081734'
                    }
                }, {
                    'featureType': 'building',
                    'elementType': 'geometry',
                    'stylers': {
                        'color': '#04406F'
                    }
                }, {
                    'featureType': 'building',
                    'elementType': 'labels',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'highway',
                    'elementType': 'geometry',
                    'stylers': {
                        'color': '#081734'
                    }
                }, {
                    'featureType': 'highway',
                    'elementType': 'labels',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'arterial',
                    'elementType': 'all',
                    'stylers': {
                        //'color': '#003051'
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'arterial',
                    'elementType': 'labels',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'green',
                    'elementType': 'geometry',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'water',
                    'elementType': 'geometry',
                    'stylers': {
                        'color': '#044161'
                    }
                }, {
                    'featureType': 'subway',
                    'elementType': 'geometry.stroke',
                    'stylers': {
                        'color': '#003051'
                    }
                },
                  {
                    "featureType": "subway",
                    "elementType": "labels.text.fill",
                    "stylers": {
                              "color": "#cc0000"
                    }
          },
                {
                    'featureType': 'subway',
                    'elementType': 'labels',
                    'stylers': {
                        //'visibility': 'off'
                    }
                }, {
                    'featureType': 'railway',
                    'elementType': 'geometry',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'railway',
                    'elementType': 'labels',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'label',
                    'elementType': 'labels.text.stroke',
                    'stylers': {
                        //'color': '#313131'

                    }
                }, {
                    'featureType': 'label',
                    'elementType': 'labels.text.fill',
                    'stylers': {
                        //'color': '#FFFFFF'
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'manmade',
                    'elementType': 'geometry',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'manmade',
                    'elementType': 'labels',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'local',
                    'elementType': 'all',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'local',
                    'elementType': 'labels',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, 
                {
                    "featureType": "arterial",
                    "elementType": "all",
                    "stylers": {
                              'visibility': 'off'
                    }
          }
                ,
                {
                    "featureType": "boundary",
                    "elementType": "all",
                    "stylers": {
                        "color": "#6fa8dc"
                    }
                },
                 {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": {
                              "color": "#3d85c6"
                    }
          },
          

            ]
        }

    },

   

};