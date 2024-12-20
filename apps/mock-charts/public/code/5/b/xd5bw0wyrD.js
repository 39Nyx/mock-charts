option = {
    backgroundColor: "#fff",
    "title": {
        "text": "xx维护情况分析",
        "left": "center",
        "top": 20,
        "textStyle": {
            "color": "#000",
            "fontSize": "24",
        }
    },
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow",
            textStyle: {
                color: "#333"
            }

        },
    },
    "grid": {
        "borderWidth": 0,
        "top": 110,
        "bottom": 95,
        textStyle: {
            color: "#333"
        }
    },
    "legend": {
        x: '10%',
        top: '11%',
        textStyle: {
            color: '#333',
            fontSize: '18'
        },
        "data": ['每月新增', '当月累积']
    },


    "calculable": true,
    "xAxis": [{
        "type": "category",
        "axisLine": {
            lineStyle: {
                color: '#333'
            }
        },
        "splitLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "splitArea": {
            "show": false
        },
        "axisLabel": {
            show: true,
            "interval": 0,
            textStyle: {
                color: "#000",
                fontSize: "15"
            }
        },
        "data": [
            '2017/10',
            '2017/11',
            '2017/12',
            '2018/1',
            '2018/2',
            '2018/3',
            '2018/4',
            '2018/5',
            '2018/6',
            '2018/7',
            '2018/8',
            '2018/9',
            '2018/10'
        ],
    }],
    "yAxis": [{
        "type": "value",
        "splitLine": {
            "show": false
        },
        "axisLine": {
            lineStyle: {
                color: '#90979c'
            }
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,

        },
        "splitArea": {
            "show": false
        },

    }],
    "series": [{
        "name": "当月累积",
        "type": "bar",
        "stack": "总量",
        "barMaxWidth": 35,
        "barGap": "10%",
        "itemStyle": {
            "normal": {
                "color": "#60a3f5",
                "label": {
                    "show": true,
                    "textStyle": {
                        "color": "#000",
                        "fontSize": "18"
                    },
                    "position": "top",
                    formatter: function(p) {
                        return p.value > 0 ? (p.value) : 0;
                    }
                }
            }
        },
        "data": [
            21,
            23,
            24,
            26,
            27,
            27,
            27,
            29,
            31,
            32,
            33,
            33,
            33
        ]

    }, {
        "name": "每月新增",
        "type": "line",
        symbolSize: 10,
        symbol: 'circle',
        smooth: true,
        "itemStyle": {
            "normal": {
                "color": "#fa541c",
                lineStyle: {
                    width: 10
                },
                "label": {
                    "show": true,
                    "textStyle": {
                        "fontSize": "24",
                        color: "#fff",
                    },
                    "position": "top",
                    formatter: function(p) {
                        return p.value > 0 ? (p.value) : 0;
                    }
                }
            }
        },
        "data": [
            21,
            2,
            1,
            2,
            1,
            0,
            0,
            2,
            2,
            1,
            1,
            0,
            0
        ]

    }, ]
}