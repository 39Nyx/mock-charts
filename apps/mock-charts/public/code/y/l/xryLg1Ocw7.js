var data = [{
        name: '小学',
        value: 115
    },
    {
        name: '初中及以上',
        value: 70,
        isExtend: true
    },
    {
        name: '其他',
        value: 15
    }
]
var data1 = [{
        name: '小学',
        value: 15
    },
    {
        name: '初中及以上',
        value: 50
    },
    {
        name: '其他',
        value: 35
    }
]
var bigCenterX = 22.5
var bigCenterY = 50
var bigRadiusInner = 0
var bigRadiusOuter = 35
var smallCenterX = 80
var smallCenterY = 50
var smallRadiusInner = 0
var smallRadiusOuter = 25

// 扩展item的角度的一半
var extendAngle = 0
// 
var startAngle = 0
var angleCompute = function(arr) {
    var total = arr.reduce(function(prev, curr, idx, arr) {
        return prev + curr.value;
    }, 0)
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].isExtend) {
            extendAngle = 360 * arr[i].value / (2 * total)
        }
        startAngle += !arr[i].isExtend ? 360 * (arr[i].value / total) : extendAngle
        if (arr[i].isExtend) {
            break;
        }
    }
}
angleCompute(data)
var contentWidth = document.querySelector('#chart-panel').offsetWidth - 20
var contentHeight = document.querySelector('#chart-panel').offsetHeight - 30
var minwidthHeight = Math.min(contentWidth, contentHeight);
var smallTopY = contentHeight * smallCenterY / 100 - minwidthHeight * smallRadiusOuter / 200
var smallBottomY = contentHeight * smallCenterY / 100 + minwidthHeight * smallRadiusOuter / 200
var bigX = contentWidth * bigCenterX / 100 + minwidthHeight * bigRadiusOuter / 200 * Math.cos(Math.PI * extendAngle / 180)
var bigTopY = contentHeight * bigCenterY / 100 - minwidthHeight * bigRadiusOuter / 200 * Math.sin(Math.PI * extendAngle / 180)
var bigBottomY = contentHeight * bigCenterY / 100 + minwidthHeight * bigRadiusOuter / 200 * Math.sin(Math.PI * extendAngle / 180)
option = {
    title: {
        text: '复合饼图'
    },
    series: [{
            type: 'pie',
            data: data,
            center: [bigCenterX + '%', bigCenterY + '%'],
            radius: [bigRadiusInner + '%', bigRadiusOuter + '%'],
            startAngle: startAngle,
            // zlevel: 1,
            markLine: {
                silent: false,
                tooltip: {
                    show: false
                },
                symbol: '',
                label: {
                    position: 'middle'
                },
                // zlevel: 2,
                lineStyle: {
                    type: 'dotted'
                },
                data: [
                    [{
                            name: '其他',
                            x: bigX,
                            y: bigTopY
                        },
                        {
                            x: smallCenterX + '%',
                            y: smallTopY
                        }
                    ],
                    [{
                            name: '其他2',
                            x: bigX,
                            y: bigBottomY
                        },
                        {
                            x: smallCenterX + '%',
                            y: smallBottomY
                        }
                    ]
                ]
            }
        },
        {
            type: 'pie',
            data: data1,
            center: [smallCenterX + '%', smallCenterY + '%'],
            // zlevel: 1,
            radius: [smallRadiusInner + '%', smallRadiusOuter + '%']
        }
    ]
};