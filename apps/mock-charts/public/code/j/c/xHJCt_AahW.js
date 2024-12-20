option = {
    tooltip: {
        trigger: 'axis'
    },
    color: ['#0580f2', '#e1575d', ''],
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2010年', '2010年', '2010年', '2010年', '2010年', '2010年', '2010年']
    },
    yAxis: {
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        }
    },
    series: [{
        name: '邮件营销',
        type: 'line',
        stack: '总量',
        data: [120, 132, 101, 134, 90, 230, 210]
    }]
}