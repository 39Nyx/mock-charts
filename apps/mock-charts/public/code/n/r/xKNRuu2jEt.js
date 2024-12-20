 var option = {
     tooltip: {},
     visualMap: {

         show: true,
         top: 'top',
         //min:1,
         //max:500,
         pieces: [ // 不指定 max，表示 max 为无限大（Infinity）。
             {
                 min: 5,
                 max: 20
             }, {
                 min: 3,
                 max: 5
             }, {
                 min: 2,
                 max: 3
             }, {
                 min: 1,
                 max: 1
             },

         ],
         splitNumber: 5,
         //seriesIndex: 0,
         //calculable: true,

         color: ['red', 'blue', 'yellow', 'black', 'green'],

         //inRange: {
         //     color: ['blue','red','green','black','yellow']
         //}
     },
     series: [{
         type: 'scatter',
         coordinateSystem: 'bmap',
         data: [
    [116.13932, 40.07667, 1],
    [116.17846, 39.93133, 1],
    [116.18528, 39.93087, 1],
    [116.18612, 39.92229, 2],
    [116.1976, 39.92339, 1],
    [116.19834, 39.93188, 1],
    [116.20748, 39.92701, 1],
    [116.21517, 39.9267, 1],
    [116.21862, 39.91798, 1],
    [116.21863, 39.91798, 4],
    [116.2189, 39.96078, 3],
    [116.22053, 39.93003, 2],
    [116.22053, 39.93004, 21],
    [116.22118, 39.96997, 1],
    [116.22529, 39.93877, 2],
    [116.22725, 39.91814, 1],
    [116.2274, 39.94477, 1],
    [116.23269, 39.94142, 2],
    [116.23887, 39.92447, 1],
    [116.26114, 39.9239, 3],
    [116.26928, 39.9248, 5],
    [116.28831, 40.01583, 3],
    [116.28934, 39.92345, 2],
    [116.29837, 39.92305, 1],
    [116.3018, 39.92443, 5],
    [116.3018, 39.92444, 1],
    [116.30242, 40.0174, 1],
    [116.32016, 39.89356, 4],
    [116.32345, 39.90693, 1],
    [116.32382, 39.92474, 1],
    [116.32383, 39.92475, 2],
    [116.32526, 39.92323, 5],
    [116.32825, 39.89006, 5],
    [116.33162, 40.0187, 3],
    [116.33307, 39.925, 1],
    [116.33588, 39.88993, 1],
    [116.33819, 40.02523, 1],
    [116.34548, 40.02638, 1],
    [116.34553, 39.92378, 1],
    [116.35119, 39.90664, 1],
    [116.35178, 40.02399, 3],
    [116.35438, 39.92266, 1],
    [116.35553, 39.91144, 1],
    [116.35799, 39.88942, 4],
    [116.35821, 39.88893, 4],
    [116.35821, 39.88894, 8],
    [116.35822, 39.88893, 32],
    [116.35822, 39.88894, 25],
    [116.36582, 40.0488, 1],
    [116.36667, 40.02254, 1],
    [116.36706, 40.06009, 1],
    [116.3691, 39.88866, 1],
    [116.37242, 39.88793, 3],
    [116.37571, 40.05429, 1],
    [116.38861, 40.06554, 1],
    [116.39756, 40.07913, 1],
    [116.39782, 40.08387, 1],
    [116.39852, 39.8911, 1],
    [116.40519, 40.08246, 1],
    [116.4058, 40.06654, 1],
    [116.40727, 39.89264, 1],
    [116.40906, 40.06837, 3],
    [116.41145, 40.03828, 1],
    [116.41184, 40.04128, 2],
    [116.41264, 40.06339, 3],
    [116.41383, 40.08461, 5],
    [116.41384, 40.08462, 8],
    [116.41435, 40.07981, 2],
    [116.41568, 40.06061, 3],
    [116.41636, 40.04604, 1],
    [116.41699, 40.06827, 3],
    [116.41714, 40.055, 1]
]

         ,
         pointSize: 100,
         symbolSize: 20,
         blurSize: 6
     }],

     bmap: {
         center: [116.46, 39.92],
         zoom: 11.8,
         roam: true,
         mapStyle: {
             styleJson: [{
                 'featureType': 'water',
                 'elementType': 'all',
                 'stylers': {
                     'color': '#d1d1d1'
                 }
             }, {
                 'featureType': 'land',
                 'elementType': 'all',
                 'stylers': {
                     'color': '#f3f3f3'
                 }
             }, {
                 'featureType': 'railway',
                 'elementType': 'all',
                 'stylers': {
                     'visibility': 'on'
                 }
             }, {
                 'featureType': 'highway',
                 'elementType': 'all',
                 'stylers': {
                     'color': '#999999'
                 }
             }, {
                 'featureType': 'highway',
                 'elementType': 'labels',
                 'stylers': {
                     'visibility': 'on'
                 }
             }, {
                 'featureType': 'arterial',
                 'elementType': 'geometry',
                 'stylers': {
                     'color': '#fefefe'
                 }
             }, {
                 'featureType': 'arterial',
                 'elementType': 'geometry.fill',
                 'stylers': {
                     'color': '#fefefe'
                 }
             }, {
                 'featureType': 'poi',
                 'elementType': 'all',
                 'stylers': {
                     'visibility': 'on'
                 }
             }, {
                 'featureType': 'green',
                 'elementType': 'all',
                 'stylers': {
                     'visibility': 'on'
                 }
             }, {
                 'featureType': 'subway',
                 'elementType': 'all',
                 'stylers': {
                     'visibility': 'on'
                 }
             }, {
                 'featureType': 'manmade',
                 'elementType': 'all',
                 'stylers': {
                     'color': '#d1d1d1'
                 }
             }, {
                 'featureType': 'local',
                 'elementType': 'all',
                 'stylers': {
                     'color': '#d1d1d1'
                 }
             }, {
                 'featureType': 'arterial',
                 'elementType': 'labels',
                 'stylers': {
                     'visibility': 'on'
                 }
             }, {
                 'featureType': 'boundary',
                 'elementType': 'all',
                 'stylers': {
                     'color': '#fefefe'
                 }
             }, {
                 'featureType': 'building',
                 'elementType': 'all',
                 'stylers': {
                     'color': '#d1d1d1'
                 }
             }, {
                 'featureType': 'label',
                 'elementType': 'labels.text.fill',
                 'stylers': {
                     'color': 'rgba(0,0,0,0)'
                 }
             }]
         }
     }
 };