option = {
    title: {
        text: '堆叠区域图'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['邮件营销']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    }],
    yAxis: [{
        type: 'value'
    }],
    series: [{
        name: '邮件营销',
        type: 'line',
        stack: '总量',
        areaStyle: {
            normal: {
                color: "rgba(147,93,161,0.15)"
            }
        },
        data: [120, 132, 101, 134, 90, 230, 290],
        smooth: false,
        itemStyle: {
            normal: {
                lineStyle: {
                    width: 3,
                    type: 'dotted' //'dotted'虚线 'solid'实线
                },
                label: {
                    show: true,
                    position: "top",
                    formatter: '{c}',
                    borderColor: 'red',
                    borderWidth: 1,
                    padding: [3,3,3,3],
                    color: 'blue'
                }
            }
            
        },
        lineStyle: {
            normal: {
                width: 2,
                color: "red"
            }
        },
        symbol: 'circle',
        symbolSize: [8, 8],
    }]
};