option = {
    title: {
        text: '2015年2月各国新闻事件',
        subtext: 'https://www.gdeltproject.org/'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['2015年2月']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['乌克兰','美国','俄罗斯','埃及','英国','中国']
    },
    series: [
        {
            name: '2015年2月',
            type: 'bar',
            data: [716384, 488394, 472086, 363140, 160891, 96430]
        },
    ]
};
