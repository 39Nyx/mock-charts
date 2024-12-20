var ownInfo = {
    "coords": [113.5107, 23.2196],
    "name": "深圳XX",
    "value": 100,
    "addr": "广东深圳",
    "url": "http://www.baidu.com"
};

// var targetAddrInfo = [{
//         "name": "上海",
//         "coords": [121.4648, 31.2891],
//         "value": 60,
//         "addr": "上海市中心区域"
//     },
//     {
//         "name": "北京",
//         "coords": [116.4551, 40.2539],
//         "value": 60,
//         "addr": "北京市朝阳区"
//     }
// ];

// var showData = function() {
//     return targetAddrInfo.map(function(supplier) {
//         var arr = [];
//         arr.push(ownInfo, supplier);
//         return arr;
//     });
// };

var showData = function() {
    return [
        [{
            "coords": [113.5107, 23.2196],
            "name": "深圳XX",
            "value": 100,
            "addr": "广东深圳",
            "url": "http://www.baidu.com"
        }, {
            "name": "上海",
            "coords": [121.4648, 31.2891],
            "value": 60,
            "addr": "上海市中心区域"
        }],
        [{
            "coords": [113.5107, 23.2196],
            "name": "深圳XX",
            "value": 100,
            "addr": "广东深圳",
            "url": "http://www.baidu.com"
        }, {
            "name": "北京",
            "coords": [116.4551, 40.2539],
            "value": 60,
            "addr": "北京市朝阳区"
        }]
    ];
}

var series = [];

var scatterSymbol = 'image://https://api.map.baidu.com/images/marker_red_sprite.png'

var planePath =
    'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

var color = ['#a6c84c', '#ffa022', '#46bee9'];

var startPoint = {
    x: 104.114129,
    y: 37.550339,
};

// 自定义百度地图样式
var bmap = {
    center: [startPoint.x, startPoint.y],
    zoom: 5,
    roam: true,
    mapStyle: {
        styleJson: [{
            "featureType": "land",
            "elementType": "geometry",
            "stylers": {
                "color": "#242f3eff"
            }
        }, {
            "featureType": "manmade",
            "elementType": "geometry",
            "stylers": {
                "color": "#242f3eff"
            }
        }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": {
                "color": "#17263cff"
            }
        }, {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": {
                "color": "#9e7d60ff"
            }
        }, {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": {
                "color": "#554631ff"
            }
        }, {
            "featureType": "districtlabel",
            "elementType": "labels.text.fill",
            "stylers": {
                "color": "#d69563ff"
            }
        }, {
            "featureType": "districtlabel",
            "elementType": "labels.text.stroke",
            "stylers": {
                "color": "#17263cff",
                "weight": 3
            }
        }, {
            "featureType": "poilabel",
            "elementType": "labels.text.fill",
            "stylers": {
                "color": "#d69563ff"
            }
        }, {
            "featureType": "poilabel",
            "elementType": "labels.text.stroke",
            "stylers": {
                "color": "#17263cff",
                "weight": 3
            }
        }, {
            "featureType": "subway",
            "elementType": "geometry",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "railway",
            "elementType": "geometry",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "poilabel",
            "elementType": "labels.icon",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "subwaylabel",
            "elementType": "labels",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "subwaylabel",
            "elementType": "labels.icon",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "tertiarywaysign",
            "elementType": "labels",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "tertiarywaysign",
            "elementType": "labels.icon",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "provincialwaysign",
            "elementType": "labels.icon",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "provincialwaysign",
            "elementType": "labels",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "nationalwaysign",
            "elementType": "labels.icon",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "nationalwaysign",
            "elementType": "labels",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "highwaysign",
            "elementType": "labels.icon",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "highwaysign",
            "elementType": "labels",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "green",
            "elementType": "geometry",
            "stylers": {
                "color": "#263b3eff"
            }
        }, {
            "featureType": "nationalwaysign",
            "elementType": "labels.text.fill",
            "stylers": {
                "color": "#d0021bff"
            }
        }, {
            "featureType": "nationalwaysign",
            "elementType": "labels.text.stroke",
            "stylers": {
                "color": "#ffffffff"
            }
        }, {
            "featureType": "city",
            "elementType": "labels",
            "stylers": {
                "visibility": "on"
            }
        }, {
            "featureType": "city",
            "elementType": "labels.icon",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "city",
            "elementType": "labels.text.fill",
            "stylers": {
                "color": "#d69563ff"
            }
        }, {
            "featureType": "city",
            "elementType": "labels.text.stroke",
            "stylers": {
                "color": "#17263cff"
            }
        }, {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": {
                "color": "#d69563ff"
            }
        }, {
            "featureType": "water",
            "elementType": "labels.text.stroke",
            "stylers": {
                "color": "#242f3eff"
            }
        }, {
            "featureType": "local",
            "elementType": "geometry.fill",
            "stylers": {
                "color": "#38414eff"
            }
        }, {
            "featureType": "local",
            "elementType": "geometry.stroke",
            "stylers": {
                "color": "#ffffff00"
            }
        }, {
            "featureType": "fourlevelway",
            "elementType": "geometry.fill",
            "stylers": {
                "color": "#38414eff"
            }
        }, {
            "featureType": "fourlevelway",
            "elementType": "geometry.stroke",
            "stylers": {
                "color": "#ffffff00"
            }
        }, {
            "featureType": "tertiaryway",
            "elementType": "geometry.fill",
            "stylers": {
                "color": "#38414eff"
            }
        }, {
            "featureType": "tertiaryway",
            "elementType": "geometry.stroke",
            "stylers": {
                "color": "#ffffff00"
            }
        }, {
            "featureType": "tertiaryway",
            "elementType": "labels.text.fill",
            "stylers": {
                "color": "#759879ff"
            }
        }, {
            "featureType": "fourlevelway",
            "elementType": "labels.text.fill",
            "stylers": {
                "color": "#759879ff"
            }
        }, {
            "featureType": "highway",
            "elementType": "labels.text.fill",
            "stylers": {
                "color": "#759879ff"
            }
        }, {
            "featureType": "highway",
            "elementType": "geometry.fill",
            "stylers": {
                "color": "#9e7d60ff"
            }
        }, {
            "featureType": "highway",
            "elementType": "geometry.stroke",
            "stylers": {
                "color": "#554631ff"
            }
        }, {
            "featureType": "provincialway",
            "elementType": "geometry.fill",
            "stylers": {
                "color": "#9e7d60ff"
            }
        }, {
            "featureType": "provincialway",
            "elementType": "geometry.stroke",
            "stylers": {
                "color": "#554631ff"
            }
        }, {
            "featureType": "tertiaryway",
            "elementType": "labels.text.stroke",
            "stylers": {
                "color": "#1a2e1cff"
            }
        }, {
            "featureType": "fourlevelway",
            "elementType": "labels.text.stroke",
            "stylers": {
                "color": "#1a2e1cff"
            }
        }, {
            "featureType": "highway",
            "elementType": "labels.text.stroke",
            "stylers": {
                "color": "#1a2e1cff"
            }
        }, {
            "featureType": "nationalway",
            "elementType": "labels.text.stroke",
            "stylers": {
                "color": "#1a2e1cff"
            }
        }, {
            "featureType": "nationalway",
            "elementType": "labels.text.fill",
            "stylers": {
                "color": "#759879ff"
            }
        }, {
            "featureType": "nationalway",
            "elementType": "geometry.fill",
            "stylers": {
                "color": "#9e7d60ff"
            }
        }, {
            "featureType": "nationalway",
            "elementType": "geometry.stroke",
            "stylers": {
                "color": "#554631ff"
            }
        }, {
            "featureType": "cityhighway",
            "elementType": "geometry.fill",
            "stylers": {
                "color": "#9e7d60ff"
            }
        }, {
            "featureType": "cityhighway",
            "elementType": "geometry.stroke",
            "stylers": {
                "color": "#554631ff"
            }
        }, {
            "featureType": "arterial",
            "elementType": "geometry.fill",
            "stylers": {
                "color": "#9e7d60ff"
            }
        }, {
            "featureType": "arterial",
            "elementType": "geometry.stroke",
            "stylers": {
                "color": "#554631fa"
            }
        }, {
            "featureType": "medicallabel",
            "elementType": "labels",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "medicallabel",
            "elementType": "labels.icon",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "entertainmentlabel",
            "elementType": "labels",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "entertainmentlabel",
            "elementType": "labels.icon",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "estatelabel",
            "elementType": "labels",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "estatelabel",
            "elementType": "labels.icon",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "businesstowerlabel",
            "elementType": "labels",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "businesstowerlabel",
            "elementType": "labels.icon",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "companylabel",
            "elementType": "labels",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "companylabel",
            "elementType": "labels.icon",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "governmentlabel",
            "elementType": "labels",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "governmentlabel",
            "elementType": "labels.icon",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "restaurantlabel",
            "elementType": "labels",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "restaurantlabel",
            "elementType": "labels.icon",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "hotellabel",
            "elementType": "labels",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "hotellabel",
            "elementType": "labels.icon",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "shoppinglabel",
            "elementType": "labels",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "shoppinglabel",
            "elementType": "labels.icon",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "lifeservicelabel",
            "elementType": "labels",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "lifeservicelabel",
            "elementType": "labels.icon",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "carservicelabel",
            "elementType": "labels",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "carservicelabel",
            "elementType": "labels.icon",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "financelabel",
            "elementType": "labels",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "financelabel",
            "elementType": "labels.icon",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "otherlabel",
            "elementType": "labels",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "otherlabel",
            "elementType": "labels.icon",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "airportlabel",
            "elementType": "labels",
            "stylers": {
                "visibility": "on"
            }
        }, {
            "featureType": "airportlabel",
            "elementType": "labels.text.fill",
            "stylers": {
                "color": "#d69563ff"
            }
        }, {
            "featureType": "airportlabel",
            "elementType": "labels.text.stroke",
            "stylers": {
                "color": "#17263cff"
            }
        }, {
            "featureType": "airportlabel",
            "elementType": "labels.icon",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "highway",
            "stylers": {
                "curZoomRegionId": "0",
                "curZoomRegion": "6,10",
                "level": "6"
            }
        }, {
            "featureType": "highway",
            "stylers": {
                "curZoomRegionId": "0",
                "curZoomRegion": "6,10",
                "level": "7"
            }
        }, {
            "featureType": "highway",
            "stylers": {
                "curZoomRegionId": "0",
                "curZoomRegion": "6,10",
                "level": "8"
            }
        }, {
            "featureType": "highway",
            "stylers": {
                "curZoomRegionId": "0",
                "curZoomRegion": "6,10",
                "level": "9"
            }
        }, {
            "featureType": "highway",
            "stylers": {
                "curZoomRegionId": "0",
                "curZoomRegion": "6,10",
                "level": "10"
            }
        }, {
            "featureType": "highway",
            "elementType": "geometry",
            "stylers": {
                "visibility": "off",
                "curZoomRegionId": "0",
                "curZoomRegion": "6,10",
                "level": "6"
            }
        }, {
            "featureType": "highway",
            "elementType": "geometry",
            "stylers": {
                "visibility": "off",
                "curZoomRegionId": "0",
                "curZoomRegion": "6,10",
                "level": "7"
            }
        }, {
            "featureType": "highway",
            "elementType": "geometry",
            "stylers": {
                "visibility": "off",
                "curZoomRegionId": "0",
                "curZoomRegion": "6,10",
                "level": "8"
            }
        }, {
            "featureType": "highway",
            "elementType": "geometry",
            "stylers": {
                "visibility": "off",
                "curZoomRegionId": "0",
                "curZoomRegion": "6,10",
                "level": "9"
            }
        }, {
            "featureType": "highway",
            "elementType": "geometry",
            "stylers": {
                "visibility": "off",
                "curZoomRegionId": "0",
                "curZoomRegion": "6,10",
                "level": "10"
            }
        }, {
            "featureType": "nationalway",
            "stylers": {
                "curZoomRegionId": "0",
                "curZoomRegion": "6,10",
                "level": "6"
            }
        }, {
            "featureType": "nationalway",
            "stylers": {
                "curZoomRegionId": "0",
                "curZoomRegion": "6,10",
                "level": "7"
            }
        }, {
            "featureType": "nationalway",
            "stylers": {
                "curZoomRegionId": "0",
                "curZoomRegion": "6,10",
                "level": "8"
            }
        }, {
            "featureType": "nationalway",
            "stylers": {
                "curZoomRegionId": "0",
                "curZoomRegion": "6,10",
                "level": "9"
            }
        }, {
            "featureType": "nationalway",
            "stylers": {
                "curZoomRegionId": "0",
                "curZoomRegion": "6,10",
                "level": "10"
            }
        }, {
            "featureType": "nationalway",
            "elementType": "geometry",
            "stylers": {
                "visibility": "off",
                "curZoomRegionId": "0",
                "curZoomRegion": "6,10",
                "level": "6"
            }
        }, {
            "featureType": "nationalway",
            "elementType": "geometry",
            "stylers": {
                "visibility": "off",
                "curZoomRegionId": "0",
                "curZoomRegion": "6,10",
                "level": "7"
            }
        }, {
            "featureType": "nationalway",
            "elementType": "geometry",
            "stylers": {
                "visibility": "off",
                "curZoomRegionId": "0",
                "curZoomRegion": "6,10",
                "level": "8"
            }
        }, {
            "featureType": "nationalway",
            "elementType": "geometry",
            "stylers": {
                "visibility": "off",
                "curZoomRegionId": "0",
                "curZoomRegion": "6,10",
                "level": "9"
            }
        }, {
            "featureType": "nationalway",
            "elementType": "geometry",
            "stylers": {
                "visibility": "off",
                "curZoomRegionId": "0",
                "curZoomRegion": "6,10",
                "level": "10"
            }
        }, {
            "featureType": "nationalway",
            "elementType": "labels",
            "stylers": {
                "visibility": "off",
                "curZoomRegionId": "0",
                "curZoomRegion": "6,10",
                "level": "6"
            }
        }, {
            "featureType": "nationalway",
            "elementType": "labels",
            "stylers": {
                "visibility": "off",
                "curZoomRegionId": "0",
                "curZoomRegion": "6,10",
                "level": "7"
            }
        }, {
            "featureType": "nationalway",
            "elementType": "labels",
            "stylers": {
                "visibility": "off",
                "curZoomRegionId": "0",
                "curZoomRegion": "6,10",
                "level": "8"
            }
        }, {
            "featureType": "nationalway",
            "elementType": "labels",
            "stylers": {
                "visibility": "off",
                "curZoomRegionId": "0",
                "curZoomRegion": "6,10",
                "level": "9"
            }
        }, {
            "featureType": "nationalway",
            "elementType": "labels",
            "stylers": {
                "visibility": "off",
                "curZoomRegionId": "0",
                "curZoomRegion": "6,10",
                "level": "10"
            }
        }, {
            "featureType": "highway",
            "elementType": "labels",
            "stylers": {
                "visibility": "off",
                "curZoomRegionId": "0",
                "curZoomRegion": "6,10",
                "level": "6"
            }
        }, {
            "featureType": "highway",
            "elementType": "labels",
            "stylers": {
                "visibility": "off",
                "curZoomRegionId": "0",
                "curZoomRegion": "6,10",
                "level": "7"
            }
        }, {
            "featureType": "highway",
            "elementType": "labels",
            "stylers": {
                "visibility": "off",
                "curZoomRegionId": "0",
                "curZoomRegion": "6,10",
                "level": "8"
            }
        }, {
            "featureType": "highway",
            "elementType": "labels",
            "stylers": {
                "visibility": "off",
                "curZoomRegionId": "0",
                "curZoomRegion": "6,10",
                "level": "9"
            }
        }, {
            "featureType": "highway",
            "elementType": "labels",
            "stylers": {
                "visibility": "off",
                "curZoomRegionId": "0",
                "curZoomRegion": "6,10",
                "level": "10"
            }
        }, {
            "featureType": "provincialway",
            "stylers": {
                "curZoomRegionId": "0",
                "curZoomRegion": "8,9",
                "level": "8"
            }
        }, {
            "featureType": "provincialway",
            "stylers": {
                "curZoomRegionId": "0",
                "curZoomRegion": "8,9",
                "level": "9"
            }
        }, {
            "featureType": "provincialway",
            "elementType": "geometry",
            "stylers": {
                "visibility": "off",
                "curZoomRegionId": "0",
                "curZoomRegion": "8,9",
                "level": "8"
            }
        }, {
            "featureType": "provincialway",
            "elementType": "geometry",
            "stylers": {
                "visibility": "off",
                "curZoomRegionId": "0",
                "curZoomRegion": "8,9",
                "level": "9"
            }
        }, {
            "featureType": "provincialway",
            "elementType": "labels",
            "stylers": {
                "visibility": "off",
                "curZoomRegionId": "0",
                "curZoomRegion": "8,9",
                "level": "8"
            }
        }, {
            "featureType": "provincialway",
            "elementType": "labels",
            "stylers": {
                "visibility": "off",
                "curZoomRegionId": "0",
                "curZoomRegion": "8,9",
                "level": "9"
            }
        }, {
            "featureType": "cityhighway",
            "stylers": {
                "curZoomRegionId": "0",
                "curZoomRegion": "6,10",
                "level": "6"
            }
        }, {
            "featureType": "cityhighway",
            "stylers": {
                "curZoomRegionId": "0",
                "curZoomRegion": "6,10",
                "level": "7"
            }
        }, {
            "featureType": "cityhighway",
            "stylers": {
                "curZoomRegionId": "0",
                "curZoomRegion": "6,10",
                "level": "8"
            }
        }, {
            "featureType": "cityhighway",
            "stylers": {
                "curZoomRegionId": "0",
                "curZoomRegion": "6,10",
                "level": "9"
            }
        }, {
            "featureType": "cityhighway",
            "stylers": {
                "curZoomRegionId": "0",
                "curZoomRegion": "6,10",
                "level": "10"
            }
        }, {
            "featureType": "cityhighway",
            "elementType": "geometry",
            "stylers": {
                "visibility": "off",
                "curZoomRegionId": "0",
                "curZoomRegion": "6,10",
                "level": "6"
            }
        }, {
            "featureType": "cityhighway",
            "elementType": "geometry",
            "stylers": {
                "visibility": "off",
                "curZoomRegionId": "0",
                "curZoomRegion": "6,10",
                "level": "7"
            }
        }, {
            "featureType": "cityhighway",
            "elementType": "geometry",
            "stylers": {
                "visibility": "off",
                "curZoomRegionId": "0",
                "curZoomRegion": "6,10",
                "level": "8"
            }
        }, {
            "featureType": "cityhighway",
            "elementType": "geometry",
            "stylers": {
                "visibility": "off",
                "curZoomRegionId": "0",
                "curZoomRegion": "6,10",
                "level": "9"
            }
        }, {
            "featureType": "cityhighway",
            "elementType": "geometry",
            "stylers": {
                "visibility": "off",
                "curZoomRegionId": "0",
                "curZoomRegion": "6,10",
                "level": "10"
            }
        }, {
            "featureType": "cityhighway",
            "elementType": "labels",
            "stylers": {
                "visibility": "off",
                "curZoomRegionId": "0",
                "curZoomRegion": "6,10",
                "level": "6"
            }
        }, {
            "featureType": "cityhighway",
            "elementType": "labels",
            "stylers": {
                "visibility": "off",
                "curZoomRegionId": "0",
                "curZoomRegion": "6,10",
                "level": "7"
            }
        }, {
            "featureType": "cityhighway",
            "elementType": "labels",
            "stylers": {
                "visibility": "off",
                "curZoomRegionId": "0",
                "curZoomRegion": "6,10",
                "level": "8"
            }
        }, {
            "featureType": "cityhighway",
            "elementType": "labels",
            "stylers": {
                "visibility": "off",
                "curZoomRegionId": "0",
                "curZoomRegion": "6,10",
                "level": "9"
            }
        }, {
            "featureType": "cityhighway",
            "elementType": "labels",
            "stylers": {
                "visibility": "off",
                "curZoomRegionId": "0",
                "curZoomRegion": "6,10",
                "level": "10"
            }
        }, {
            "featureType": "arterial",
            "stylers": {
                "curZoomRegionId": "0",
                "curZoomRegion": "9,10",
                "level": "9"
            }
        }, {
            "featureType": "arterial",
            "stylers": {
                "curZoomRegionId": "0",
                "curZoomRegion": "9,10",
                "level": "10"
            }
        }, {
            "featureType": "arterial",
            "elementType": "geometry",
            "stylers": {
                "visibility": "off",
                "curZoomRegionId": "0",
                "curZoomRegion": "9,10",
                "level": "9"
            }
        }, {
            "featureType": "arterial",
            "elementType": "geometry",
            "stylers": {
                "visibility": "off",
                "curZoomRegionId": "0",
                "curZoomRegion": "9,10",
                "level": "10"
            }
        }, {
            "featureType": "arterial",
            "elementType": "labels",
            "stylers": {
                "visibility": "off",
                "curZoomRegionId": "0",
                "curZoomRegion": "9,10",
                "level": "9"
            }
        }, {
            "featureType": "arterial",
            "elementType": "labels",
            "stylers": {
                "visibility": "off",
                "curZoomRegionId": "0",
                "curZoomRegion": "9,10",
                "level": "10"
            }
        }, {
            "featureType": "building",
            "elementType": "geometry.topfill",
            "stylers": {
                "color": "#2a3341ff"
            }
        }, {
            "featureType": "building",
            "elementType": "geometry.sidefill",
            "stylers": {
                "color": "#313b4cff"
            }
        }, {
            "featureType": "building",
            "elementType": "geometry.stroke",
            "stylers": {
                "color": "#1a212eff"
            }
        }, {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": {
                "color": "#759879ff"
            }
        }, {
            "featureType": "road",
            "elementType": "labels.text.stroke",
            "stylers": {
                "color": "#1a2e1cff"
            }
        }, {
            "featureType": "provincialway",
            "elementType": "labels.text.fill",
            "stylers": {
                "color": "#759879ff"
            }
        }, {
            "featureType": "cityhighway",
            "elementType": "labels.text.fill",
            "stylers": {
                "color": "#759879ff"
            }
        }, {
            "featureType": "arterial",
            "elementType": "labels.text.fill",
            "stylers": {
                "color": "#759879ff"
            }
        }, {
            "featureType": "provincialway",
            "elementType": "labels.text.stroke",
            "stylers": {
                "color": "#1a2e1cff"
            }
        }, {
            "featureType": "cityhighway",
            "elementType": "labels.text.stroke",
            "stylers": {
                "color": "#1a2e1cff"
            }
        }, {
            "featureType": "arterial",
            "elementType": "labels.text.stroke",
            "stylers": {
                "color": "#1a2e1cff"
            }
        }, {
            "featureType": "local",
            "elementType": "labels",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "manmade",
            "elementType": "labels.text.fill",
            "stylers": {
                "color": "#d69563ff"
            }
        }, {
            "featureType": "manmade",
            "elementType": "labels.text.stroke",
            "stylers": {
                "color": "#17263cff"
            }
        }, {
            "featureType": "subwaystation",
            "elementType": "geometry",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "transportationlabel",
            "elementType": "labels.icon",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "transportationlabel",
            "elementType": "labels",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "estate",
            "elementType": "geometry",
            "stylers": {
                "color": "#2a3341ff"
            }
        }]

    },
};

function convertData(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = dataItem[0].coords;
        var toCoord = dataItem[1].coords;
        if (fromCoord && toCoord) {
            res.push({
                fromName: dataItem[0].name,
                toName: dataItem[1].name,
                coords: [fromCoord, toCoord],
            });
        }
    }
    return res;
}

series.push({
        name: 'Top10',
        type: 'lines',
        coordinateSystem: 'bmap',
        zlevel: 2,
        effect: {
            show: true,
            period: 6,
            trailLength: 0,
            symbol: planePath,
            symbolSize: 15,
        },
        lineStyle: {
            normal: {
                color: color[0],
                width: 1,
                opacity: 0.4,
                curveness: 0.2,
            },
        },
        tooltip: {
            show: false,
        },
        data: convertData(showData()),
    },

    {
        name: 'Top10',
        type: 'scatter',
        coordinateSystem: 'bmap',
        zlevel: 2,
        rippleEffect: {
            brushType: 'stroke',
        },
        label: {
            normal: {
                show: true,
                position: 'right',
                formatter: '{b}',
            },
        },
        symbol: scatterSymbol,
        symbolSize: function(val) {
            return val[2] / 4;
        },
        showEffectOn: 'render',
        itemStyle: {
            normal: {
                color: color[0],
            },
        },
        data: [{
            name: ownInfo.name,
            value: ownInfo.coords.concat(ownInfo.value),
            addr: ownInfo.addr,
            url: ownInfo.url,
        }, ],
    },

    {
        name: ' Top10',
        type: 'scatter',
        coordinateSystem: 'bmap',
        zlevel: 2,
        rippleEffect: {
            brushType: 'stroke',
        },
        label: {
            normal: {
                show: true,
                position: 'right',
                formatter: '{b}',
            },
        },
        symbol: scatterSymbol,
        symbolSize: function(val) {
            return val[2] / 4;
        },
        showEffectOn: 'render',
        itemStyle: {
            normal: {
                color: color[0],
            },
        },
        data: showData().map(function(item) {
            console.log('item', item);
            return {
                name: item[1].name,
                value: item[1].coords.concat(item[1].value),
                addr: item[1].addr,
            };
        }),
    });

option = {
    bmap: bmap,
    tooltip: {
        padding: 0,
        enterable: true,
        transitionDuration: 1,
        textStyle: {
            color: '#000',
            decoration: 'none',
        },
        position: function(point, params, dom, rect, size) {
            return [point[0], point[1]];
        },
        formatter: function(params) {
            console.log('params', params);
            var tipHtml = '';
            tipHtml =
                '<div style="display: inline-block;">' +
                '<div>' +
                params.data.name +
                '</div>' +
                '<div>' +
                params.data.addr +
                '</div>';
            if (params.data.url) {
                tipHtml +=
                    '<a href="' +
                    params.data.url +
                    '">网址</a>';
            }
            tipHtml += '</div>';
            return tipHtml;
        },
    },

    title: {
        text: '迁移示例',
        subtext: '使用自定义百度地图样式',
        sublink: '',
        left: 'center',
        textStyle: {
            color: '#fff',
        },
    },


    geo: {
        map: 'bmap',
        polyline: true,
        progressiveThreshold: 500,
        progressive: 200,
        label: {
            emphasis: {
                show: false,
            },
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#323c48',
                borderColor: '#404a59',
            },
            emphasis: {
                areaColor: '#2a333d',
            },
        },
    },
    series: series,
};