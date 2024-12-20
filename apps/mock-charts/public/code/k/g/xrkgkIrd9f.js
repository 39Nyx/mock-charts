var colors = ['#2978aa',  '#3470a3'];

var xData = function() {
    var data = [];
    for (var i = 1; i < 14; i++) {
        data.push(i+'月');
    }
    return data;
}();
option = {
    backgroundColor:'#FFFFFF',
    title: {
        text: '安全体系建设覆盖数升降趋势',
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
       right:'40%',
        bottom:'65%'
    }, 
    legend: {
        data:['明厨亮灶实施数'],
        align: 'left',
        left: 30,
        top:40
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
            textStyle:{
                fontSize:15
            }
        },
        "data": xData,
    }],
    yAxis: [
        {
            type: 'value',
            name: '',
            min: 0,
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
        
    ],
    series: [
       /* {name:'不合格问题批次数',
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
        */
        {
        name:'明厨亮灶实施数',
         color:'#4594dd' ,
            type:'line',
            itemStyle : {
                normal : {
                    lineStyle:{
                        width:2,//折线宽度
                    }
                }
            },
        data:[234,230,240,250,269,260,321,321,300,281,271,270]
    }]
};
