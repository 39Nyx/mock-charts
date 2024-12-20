var startPoint = [
                    "121.207619",
                    "31.237319"
                ];
var endPoint = [
                    "116.119589",
                    "38.113789"
                ];
var series = [{
        "type": "lines",
        "coordinateSystem": "bmap",
        "zlevel": 1,
        "lineStyle": {
            normal: {
                "color": "#ff0000",
                "width": 2,
                "opacity": 0.3,
                "curveness": 0.2
            }
        },
        polyline: true,
         symbol: ['none', 'none', 'arrow'],
        // "animationDuration": 3000,
        "animationEasing": "linear",
        "symbolSize": 10,
        "effect": {
            "show": true,
            "trailLength": 0,
            "symbol": "arrow",
            "symbolSize": 10,
            "loop": false,
            "period": 3,
            // "delay": 3000
        },
        "animationDelay": 3000,
        "data": [{
            "fromName": "上海",
            "toName": "沧衡",
            "coords": [
                startPoint
                ,
                [
                    "114.48229029384036",
                    "36.76552732148951"
                ],
                endPoint
            ]
        }]
    },
    {
        "type": "lines",
        "coordinateSystem": "bmap",
        "zlevel": 1,
        "lineStyle": {
            normal: {
                "color": "#ff0000",
                "width": 2,
                "opacity": 0.3,
                "curveness": 0.2
            }
        },
        polyline: true,
        symbol: ['none', 'none', 'arrow'],
        // "animationDuration": 3000,
        "animationEasing": "linear",
        "effect": {
            "show": true,
            "trailLength": 0,
            "symbol": "arrow",
            "symbolSize": 10,
            "loop": false,
            "period": 3,
            "delay": 0
        },
        "animationDelay": 0,
        "data": [{
            "fromName": "上海",
            "toName": "京南",
            "coords": [
               startPoint,
                [
                    "116.06354284749577",
                    "39.49194673976087"
                ],
                endPoint
            ]
        }]
    },
]

option = {
    bmap: {
        zoom: 6,
        roam: true
    },
    animation: false,
    series
};