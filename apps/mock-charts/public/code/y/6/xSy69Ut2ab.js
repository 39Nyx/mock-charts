option = {
    backgroundColor: '#0E2A43',
    "title": {
        "text": "接/送站申请时段统计",
        "textStyle": {
            "color": "#FFF",
            "fontWeight": "bold",
            "fontSize": 24
        },
        "top": "2%",
        "left": "2.2%"
    },
    "tooltip": {
        "trigger": "axis",
        "axisPointer": { // 坐标轴指示器，坐标轴触发有效
            "type": "shadow" // 默认为直线，可选为："line" | "shadow"
        }
    },
    legend: { 
        bottom: 5,
        data: ["接站服务","送站服务"],
        textStyle:{
            color:'#fff',
        }
    },
    "grid": {
        "left": "3%",
        "right": "10%",
        "bottom": "3%",
        "containLabel": true
    },
    "yAxis": [{
        "type": "category",
        "data": ["0点","1点","2点","4点","5点","6点","7点","8点","9点","10点","11点","12点","13点","14点","15点","16点","17点","18点","19点","20点","21点","22点","23点"],
        "axisLine": {
            "show": false
        },
        "axisTick": {
            "show": false,
            "alignWithLabel": true
        },
        "axisLabel": {
            "textStyle": {
                "color": "#ffb069"
            }
        }
    }],
    "xAxis": [{
        "type": "value",
        "axisLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "show": false
        },
        "splitLine": {
            "show": false
        }
    }],

    "series": [{
        "name": "接站服务",
        "type": "bar",
        "data": [{"name":"0点","value":3},{"name":"1点","value":2},{"name":"2点","value":2},{"name":"4点","value":2},{"name":"5点","value":3},{"name":"6点","value":7},{"name":"7点","value":38},{"name":"8点","value":100},{"name":"9点","value":147},{"name":"10点","value":141},{"name":"11点","value":111},{"name":"12点","value":75},{"name":"13点","value":77},{"name":"14点","value":85},{"name":"15点","value":120},{"name":"16点","value":76},{"name":"17点","value":60},{"name":"18点","value":29},{"name":"19点","value":28},{"name":"20点","value":34},{"name":"21点","value":20},{"name":"22点","value":18},{"name":"23点","value":13}]    ,
        "barCategoryGap": "35%",
        "label": {
            "normal": {
                "show": true,
                "position": "right",
                "formatter": function(params) {
                    return params.data.value + '次';
                },
                "textStyle": {
                    "color": "#bcbfff" //color of value
                }
            }
        },
        "itemStyle": {
            "normal": {
                "color": new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    "offset": 0,
                    "color": "#7db2fa" // 0% 处的颜色
                }, {
                    "offset": 1,
                    "color": "#3883ea" // 100% 处的颜色
                }], false)
            }
        }
    },
    {
        "name": "送站服务",
        "type": "bar",
        "data": [{"name":"0点","value":10},{"name":"1点","value":5},{"name":"2点","value":4},{"name":"5点","value":1},{"name":"6点","value":19},{"name":"7点","value":85},{"name":"8点","value":684},{"name":"9点","value":456},{"name":"10点","value":446},{"name":"11点","value":365},{"name":"12点","value":648},{"name":"13点","value":148},{"name":"14点","value":430},{"name":"15点","value":238},{"name":"16点","value":238},{"name":"17点","value":313},{"name":"18点","value":345},{"name":"19点","value":193},{"name":"20点","value":129},{"name":"21点","value":119},{"name":"22点","value":83},{"name":"23点","value":36}],
        "barCategoryGap": "35%",
        "label": {
            "normal": {
                "show": true,
                "position": "right",
                "formatter": function(params) {
                    return params.data.value + '次';
                },
                "textStyle": {
                    "color": "#bcbfff" //color of value
                }
            }
        },
        "itemStyle": {
            "normal": {
                "color": new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    "offset": 0,
                    "color": "#ffb069" // 0% 处的颜色
                }, {
                    "offset": 1,
                    "color": "#ec2e85" // 100% 处的颜色
                }], false)
            }
        }
    }]
};