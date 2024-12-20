option = {
    title: {
        text: '应用视图',
        textStyle: {
            color: '#a4aac3'
        },
        subtext: '        (近一周)',
        subtextStyle: {
            color: '#a4aac3'
        },
        left: '2%'
    },
    legend: {
        textStyle: {
            color: '#646d8f'
        },
        top: '12%',
        left: '70%',
        data: ['应用个数', '虚拟机个数']
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        top: '20%',
        left: '3%',
        right: '4%',
        bottom: '5%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        },
        top: '11%',
        right: '3%'
    },
    xAxis: [{
        type: 'category',
        axisTick: {
            alignWithLabel: true
        },
        axisLine: {
            lineStyle: {
                color: '#263158'
            }
        },
        axisLabel: {
            color: '#646d8f'
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#1e2540'
            }
        },
        data: ['2017-09-04', '2017-09-05', '2017-09-06', '2017-09-07', '2017-09-08', '2017-09-09', '2017-09-10']
    }],
    yAxis: [{
        type: 'value',
        axisLine: {
            lineStyle: {
                color: '#263158'
            }
        },
        axisLabel: {
            color: '#646d8f'
        },
        splitLine: {
            lineStyle: {
                color: '#1e2540'
            }
        }
    }],
    series: [{
        name: '应用个数',
        type: 'bar',
        barWidth: '50%',
        stack: 'sum',
        itemStyle: {
            normal: {
                color: '#ee700b'
            }
        },
        label: {
            normal: {
                show: true,
                position: 'inside'
            }
        },
        data: [2, 2, 2, 3, 3, 3, 2]
    }, {
        name: '虚拟机个数',
        type: 'bar',
        barWidth: '50%',
        stack: 'sum',
        itemStyle: {
            normal: {
                color: '#0b86cb'
            }
        },
        label: {
            normal: {
                show: true,
                position: 'inside'
            }
        },
        data: [1, 2, 2, 4, 3, 3, 2]
    }],
    color: ['#3398DB'],
    backgroundColor: '#11162c'
};