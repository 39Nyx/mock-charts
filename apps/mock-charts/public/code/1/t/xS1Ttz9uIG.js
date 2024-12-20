
var data = [
    {name:'2016/12/18 6:38:08', value:['2016/12/18 6:38:08', 80]},
    {name:'2016/12/18 16:18:18', value:['2016/12/18 16:18:18', 60]},
    {name:'2016/12/18 19:18:18', value:['2016/12/18 19:18:18', 90]}
    ];
var anchor = [
    {name:'2016/12/18 04:00:00', value:['2016/12/18 04:00:00', 0]},
    {name:'2016/12/18 20:00:00', value:['2016/12/18 20:00:00', 0]}
    ];

option = {
    title: {
        text: '动态数据 + 时间坐标轴'
    },
    tooltip: {
        trigger: 'axis',
        formatter: function (params) {
            params = params[0];
            var date = new Date(params.name);
            return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
        },
        axisPointer: {
            animation: false
        }
    },
    xAxis: {
        type: 'time',
        minInterval: 1,
        maxInterval: 3600 *  1000,
        splitLine: {
            show: false
        },
        axisLabel:{
        formatter:function (value)
        {
            return echarts.format.formatTime('hh:ss', new Date(value));
        }
    }
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
            show: false
        }
    },
    series: [{
        name: '模拟数据',
        type: 'line',
        showSymbol: false,
        hoverAnimation: false,
        data: data
    },
    {
        name:'.anchor',
        type:'line', 
        showSymbol:false, 
        data:anchor,
        tooltip: {
            show: false
        },
        itemStyle:{normal:{opacity:0}},
        lineStyle:{normal:{opacity:0}}
    }]
};