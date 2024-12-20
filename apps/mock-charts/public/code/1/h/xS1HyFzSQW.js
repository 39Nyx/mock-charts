option = {
    backgroundColor: '#5580A1',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    title: {
        bottom: 10,
        text: '12-16年中国移动游戏用户规模及增长趋势',
        subtext: '数据来源： DataEye2016中国移动游戏行业年度报告'
    }, 
    itemStyle: {
        normal: {
            color: '#68a2a9',
        }
    },
    legend: {
        data: ['用户规模', '增长趋势']
    },
    grid:{
        bottom:100
    },
    xAxis: {
        type:'value',
        name:'规模',
        min:0,
        max:1000
    },
    yAxis: {
       type:'category',
       data:['2016','2015','2014','2013','2012']
    },
    series: [{
        name:'用户规模',
        type:'bar',
        data:[528,396.4,357.5,310.5,89.1]
    }]
};