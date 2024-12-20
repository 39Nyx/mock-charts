var xData = function() {
    var data = [];
    for (var i = 1978; i < 2018; i++) {
        data.push(i + "");
    }
    return data;
}();

option = {
    backgroundColor: "#344b58",
    "title": {
        "text": "成都变电容量与人口关系图",
        "subtext": "BY Li Mao",
        x: "4%",

        textStyle: {
            color: '#fff',
            fontSize: '22'
        },
        subtextStyle: {
            color: '#90979c',
            fontSize: '16',

        },
    },
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow",
            textStyle: {
                color: "#fff"
            }

        },
    },
    toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
        }
    },
    "grid": {
        "borderWidth": 0,
        "top": 110,
        "bottom": 95,
        textStyle: {
            color: "#fff"
        }
    },
    "legend": {
        x: '4%',
        top: '11%',
        textStyle: {
            color: '#90979c',
        },
        "data": ['女', '男', '平均']
    },
     

    "calculable": true,
    "xAxis": [{
        "type": "category",
        "axisLine": {
            lineStyle: {
                color: '#90979c'
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
            "interval": 0,

        },
        "data": xData,
    }],
    "yAxis": [{
        "type": "value",
        "name":'变电容量',
        "nameLocation":'end',
        "splitLine": {
            "show": false
        },
        
        "axisLine": {
            lineStyle: {
                color: "rgba(255,144,128,1)"
            }
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,
            formatter: '{value} MVA'

        },
        "splitArea": {
            "show": false
        },

    },
    {
        "type": "value",
        "name":'人口数量',
        "nameLocation":'end',
        min:800,
         "splitLine": {
            "show": false
        },
        
        "axisLine": {
            lineStyle: {
                color: "rgba(252,230,48,1)"
            }
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,
            formatter: '{value} 万人'

        },
        "splitArea": {
            "show": false
        },

    }],
    "dataZoom": [{
        "show": true,
        "height": 30,
        "xAxisIndex": [
            0
        ],
        bottom: 30,
        "start": 40,//起始位置
        "end": 80,
        handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        handleSize: '110%',//灰色条的比例
        handleStyle:{
            color:"#d3dee5",
            
        },
           textStyle:{
            color:"#fff"},
           borderColor:"#90979c"
        
        
    }, {
        "type": "inside",
        "show": true,
        "height": 15,
        "start": 1,
        "end": 35
    }],
    "series": [{
            "name": "变电总量",
            "type": "bar",
            "stack": "总量",
            "barMaxWidth": 35,
            "barGap": "10%",
            "itemStyle": {
                "normal": {
                    "color": "rgba(255,144,128,1)",
                    "label": {
                        "show": true,
                        "textStyle": {
                            "color": "#fff"
                        },
                        "position": "inside",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
               254,
                274 ,
                337,
                463 ,
                477 ,
                487,
                487,
                629, 
                729,
                881,
                1048 ,
                1214,
                1366,
                1486 ,
                1772 ,
                1984 ,
                2320 ,
                3076 ,
                4316 ,
                4789,
                5416 ,
                6000 ,
                7411 ,
                8227 ,
                10155 ,
                11128 ,
                11368 ,
                12078,
                13385,
                15447 ,
                16837 ,
                19144 ,
                20878 ,
                25901 ,
                29793 ,
                31702 ,
                35936 ,
                38314,
                40972,
                41350 



            ],
        },

         {
            "name": "人口总量",
            "type": "line",
            yAxisIndex: 1,
           // "stack": "总量",
            symbolSize:10,
            symbol:'circle',
            "itemStyle": {
                "normal": {
                    "color": "rgba(252,230,48,1)",
                    "barBorderRadius": 0,
                    "label": {
                        "show": true,
                        "position": "top",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
                806,
                815,
                822,
                833,
                843,
                848,
                854,
                862,
                874,
                887,
                898,
                908,
                919,
                927,
                936,
                947,
                960,
                971,
                980,
                989,
                997,
                1003,
                1013,
                1019,
                1028,
                1044,
                1059,
                1082,
                1103,
                1112,
                1124,
                1139,
                1149,
                1163,
                1173,
                1188,
                1196,
                1210,
                1221,
                1250
            ]
        },
    ]
}