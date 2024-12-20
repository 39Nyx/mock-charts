var yData = [16316, 7136, 3815, 981];
var xData=['搜索页','列表页','详情页','支付页']
var a2b = "43.7%";
var b2c = "53.5%";
var c2d = "25.7%";
        // 指定图表的配置项和数据
        option = {
    "title": {
        "text": "电商订单转化率模型",
        "subtext": "",
        x: "40%",

        textStyle: {
            fontSize: '22'
        },
    },
    "tooltip": {
        "trigger": "axis"
    },
    "grid": {
        "borderWidth": 0,
        "top": 50,
        "bottom": 30
    },
     
    "xAxis": [{
        "type": "category",
        "data": xData,
    }],
    "yAxis": [{
        "type": "value"}],

    "series": [

        {
            "name": "",
            "type": "bar",
            "barWidth":"50%",
            "stack": "总量",
            "itemStyle": {
                "normal": {
                    "label": {
                        "show": true,
                        "position": "top",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data":yData
        },
        {
            type: 'graph',
            layout: 'none',
            symbol:'triangle',
            symbolRotate:-90,
            symbolSize: 50,
            left:'33%',
            right:'27%',
            roam: true,
            label: {
                normal: {
                    show: true
                }
            },
            data: [{
                name: a2b,
                x: 300,
                y: 300
            }, {
                name: b2c,
                x: 500,
                y: 400
            }, {
                name: c2d,
                x: 700,
                y: 500
            }]

        }
    ]
}