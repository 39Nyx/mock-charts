option = {
    color: ['#6efcd5', '#41c2fa'],
    grid: {
        show: true,
        left: '3%',
        right: '3%',
        top: '30%',
        bottom: '5%',
        borderWidth: 0,
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            shadowStyle: {
                color: 'transparent'
            }
        },
        textStyle: {
            fontSize: 14
        },
        backgroundColor: 'rgba(0,0,0,0.5)',
        formatter: function(params) {
            let text = ''
            for (let val of params) {
                text += `
                    <div style="z-index:999;">
                        <span style="color:#b3bdcb;">${val.seriesName}：</span>
                        <span style="color:white;">${val.data.value}${val.data.unit}</span>
                    </div>
                `
            }
            return text
        }
    },
    xAxis: {
        type: 'category',
        data: ['2018-08'],
        axisTick: {
            show: false
        },
        axisLabel: {
            color: '#b3bdcb',
            fontSize: 14,
            interval: 0,
            rotate: 20,
            align: 'center',
            margin: 20
        },
        axisLine: {
            show: false
        }
    },
    yAxis: [{
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#b3bdcb',
                fontSize: 14
            },
            axisLine: {
                show: false
            },
            // // 设置网格的线条颜色
            splitLine: {
                show: false
            }
        },
        {
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#b3bdcb',
                fontSize: 14
            },
            axisLine: {
                show: false
            },
            // // 设置网格的线条颜色
            splitLine: {
                show: false
            }
        }
    ],
    series: [{
            name: '笔数',
            type: 'line',
            data: [{
                value: 1,
                unit: ''
            }],
            yAxisIndex: 1,
            lineStyle: {
                type: 'dotted'
            }
        },
        {
            name: '金额',
            type: 'bar',
            data: [{
                value: 200,
                unit: '万'
            }],
            yAxisIndex: 0,
            barWidth: '20%'
        }
    ]
};