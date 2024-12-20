option = {
    title: {
        text: "十字星颜色测试，期望值：红、红、红、绿、红、红、红、绿"
    },
    "xAxis": [{
        "type": "category",
        "data": ["08-22", "08-23", "08-24", "08-25", "08-28", "08-29", "08-30", "08-31"],
        "scale": true,
        "boundaryGap": false,
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "show": true
        },
        "axisPointer": {
            "z": 100
        },
        inverse: true,
    }],
    "yAxis": [{}],
    "series": [{
        "name": "stock",
        "type": "candlestick",
        "data": [
            [20, 20, 17, 29],
            [22.68, 22.68, 22.68, 22.68],
            [24.95, 24.95, 20, 28],
            [20, 20, 18, 24],
            [35, 35, 35, 40],
            [36.54, 36.54, 30, 36.54],
            [40, 45, 38, 45],
            [32, 28, 27, 33]
        ],
        "itemStyle": {
            "normal": {
                "color": "#fa6464",
                "color0": "#32C896",
                "borderColor": "#fa6464",
                "borderColor0": "#32C896"
            }
        },
        "markPoint": {
            "label": {
                "normal": {}
            },
            "data": []
        }
    }]
};