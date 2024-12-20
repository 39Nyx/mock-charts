var month = [];
for(var i=1;i<13;i++){
    month.push(i+'月')
}
var color1 = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    offset: 0,
    color: '#75CBFD'
}, {
    offset: 1,
    color: '#04A3FF'
}]);
var color2 = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    offset: 0,
    color: '#FFFFC2'
}, {
    offset: 1,
    color: '#F8F876'
}]);
option = {
    backgroundColor: '#000',
    color:[color1,color2],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['2016年', '2017年'],
        align: 'left',
        left: 'center',
        textStyle:{
            fontSize:20,
            color:'#fff'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: month,
        axisLine:{show:false},
        axisTick:{show:false},
        axisLabel: {
            textStyle:{
                fontSize:22,
                color:'#fff'
            }
        },
        splitLine:{
            show:false
        },
        splitArea:{
            show:false
        }
    }],
    yAxis: [{
        type: 'value',
        min:0,
        axisTick:{show:false},
        axisLine:{show:false},
        axisLabel: {
            formatter: '{value}',
            textStyle:{
                fontSize:22,
                color:'#fff'
            }
        },
        splitLine:{
            show:false
        },
        splitArea:{
            show:false
        }
    },{
        type:'category',
        axisTick:{show:false},
        axisLine:{show:false},
        axisLabel: {
            formatter: '{value}',
            textStyle:{
                fontSize:22,
                color:'#fff'
            }
        },
        splitLine:{
            show:false
        },
        splitArea:{
            show:false
        },
        data:['0.00%','-5.00%','-10.00%','-15.00%','-20.00%','-25.00%','-30.00%']
    }],
    series: [{
        name: '2016年',
        type: 'bar',
        barGap:'5%',
        data: [3801, 1996, 4003, 2857, 3047, 3022, 3281, 3530, 3645, 3693, 4758, 6897]
    }, {
        name: '2017年',
        type: 'bar',
        barGap:'5%',
        data: [5026, 3865, 7264, 5332, 5763, 7416]
    }]
};
