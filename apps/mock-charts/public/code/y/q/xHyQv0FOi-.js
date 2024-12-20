 var option = {
     tooltip: {},
     visualMap: {

         show: true,
         top: 'top',
         //min:1,
         //max:500,
         pieces: [{
                 min: 100
             }, // 不指定 max，表示 max 为无限大（Infinity）。
             {
                 min: 20,
                 max: 100
             }, {
                 min: 10,
                 max: 20
             }, {
                 min: 5,
                 max: 10
             }, {
                 min: 1,
                 max: 5
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
             [116.385511, 39.719591, 2],
             [116.133833, 39.730681, 2],
             [116.551586, 39.739969, 1],
             [116.483243, 39.760386, 2],
             [116.520583, 39.772416, 364],
             [116.063889, 39.773694, 1],
             [116.263111, 39.797311, 1],
             [116.25432, 39.818522, 2],
             [116.165815, 39.829337, 4],
             [116.234771, 39.847511, 1],
             [116.392681, 39.854941, 2],
             [116.400053, 39.858051, 1],
             [116.419942, 39.864269, 9],
             [116.461368, 39.869683, 2],
             [116.444481, 39.871401, 1],
             [116.396111, 39.875636, 6],
             [116.446111, 39.885001, 6],
             [116.415833, 39.892778, 2],
             [116.418055, 39.896031, 12],
             [116.413143, 39.901581, 5],
             [116.412778, 39.901667, 1],
             [116.259321, 39.904219, 2],
             [116.418028, 39.904778, 373],
             [116.434806, 39.905497, 1],
             [116.445409, 39.909405, 1],
             [116.272034, 39.910225, 3],
             [116.481389, 39.917472, 1],
             [116.442833, 39.918333, 1],
             [116.392391, 39.925951, 3],
             [116.472321, 39.927451, 14],
             [116.239111, 39.928771, 2],
             [116.406461, 39.933831, 1],
             [116.269161, 39.935558, 3],
             [116.269771, 39.936211, 4],
             [116.252217, 39.945017, 4],
             [116.268889, 39.951639, 2],
             [116.268521, 39.952371, 2],
             [116.267441, 39.958171, 2],
             [116.615363, 39.963458, 1],
             [115.640601, 39.969701, 1],
             [116.319711, 39.974551, 2],
             [116.344722, 39.981666, 10],
             [116.611961, 39.995441, 1],
             [116.227971, 39.999775, 1],
             [116.045481, 40.014961, 9],
             [116.315861, 40.021251, 4],
             [116.333291, 40.024381, 2],
             [116.038948, 40.033554, 8],
             [116.337242, 40.044918, 3],
             [116.333941, 40.047371, 2],
             [116.180421, 40.074921, 1],
             [116.300231, 40.087389, 2],
             [116.305627, 40.091625, 2],
             [116.617671, 40.101071, 2],
             [116.284444, 40.103275, 1],
             [116.198223, 40.110927, 2],
             [116.210352, 40.151673, 1],
             [116.234311, 40.194151, 1],
             [116.138212, 40.333966, 1],
             [116.655722, 40.385751, 1],
             [116.163527, 40.411033, 21],
             [116.460321, 40.414064, 1]
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