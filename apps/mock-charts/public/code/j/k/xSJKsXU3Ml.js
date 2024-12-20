option = {
    "tooltip": {
        "trigger": "axis"
    },
    "grid": {
        "top": "20",
        "left": "10",
        "right": "40",
        "bottom": "10",
        "containLabel": true
    },
    "xAxis": {
        "type": "category",
        "boundaryGap": false,
        "nameTextStyle": {
            "color": "#333"
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#5c6076'
            }
        },
        axisTick: {
            show: false
        },
        "data": ["1123", "1124", "1125", "1126", "1127", "1128", "1129"]
    },
    "yAxis": {
        "type": "value",
        "nameTextStyle": {
            "color": "#333"
        },
        ayisLine: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#5c6076'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#2e3547'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#384157'
            }
        },
    },
    "series": [{
        "name": "订单量",
        "type": "line",
        "stack": "总量",
         smooth:true,
                        symbolSize:10,
                        animation:false,
                        lineWidth:1.2,
                        hoverAnimation:false,
                        
        "label": {
            "normal": {
                "show": false,
                "position": "top",
                "textStyle": {
                    "color": "#58B3F9",
                    "fontWeight": "200"
                }
            }
        },
        "itemStyle": {
            "normal": {
                "color": "#2c96ef"
            }
        },
        "lineStyle": {
            "normal": {
                "color": "#2c96ef"
            }
        },
        "areaStyle": {
            "normal": {
                "color": "#83C6F9",
                opacity:0.8
            }
        },
        "data": ["805", "760", "750", "800", "685", "740", "725"]
    }]
}