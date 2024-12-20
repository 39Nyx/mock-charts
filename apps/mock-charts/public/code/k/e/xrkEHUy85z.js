var colors = ['#2978aa',  '#3470a3'];
/*
var xData = function() {
    var data = [];
    for (var i = 1; i < 13; i++) {
        data.push(i+'月');
    }
    return data;
}();*/
option = {
    backgroundColor:'#FFFFFF',
    title: {
        text: '投诉举报信息接收类型同比分析',
        textStyle:{
             fontSize: '15'
        }
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
        grid: {
        top:80,
        left:'10%',
       right:'65%',
        bottom:'71%'
    }, 
    legend: {
        data:['投诉举报数','投诉举报同比率'],
        align: 'left',
        left: 40,
        top:45
    },
     "calculable": true,
    "xAxis": [{
        "type": "category",
        "axisLine": {
            lineStyle: {
                color: '#000'
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
        "data": ['投诉举报','咨询','意见建议'],
    }],
    yAxis: [
        {
            type: 'value',
            name: '',
            min: 0,
            max: 1500,
            position: 'left',
            axisLine: {
                lineStyle: {
                    color: colors[0]
                }
            },
            axisLabel: {
                formatter: '{value} '
            }
        },
        {
            type: 'value',
            name: '',
            position: 'right',
            axisLine: {
                lineStyle: {
                    color: colors[1]
                }
            },
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],
    series: [
        {name:'投诉举报数',
            type:'bar',
           itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#60c9ed'
                }, {
                    offset: 1,
                    color: '#a7d8e8'
                }]),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
            barWidth:'25%',
            data:[756,1227,998]},
        {
        name:'投诉举报同比率',
         color:'#4594dd' ,
         yAxisIndex: 1,
            type:'line',
            itemStyle : {
                normal : {
                    /*lineStyle:{
                        width:3,//折线宽度
                    },
                   */
                }
            },
        data:[4.5,8.2,6.5]
    },]
};
