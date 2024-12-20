option = {
    title: {
        text: "人工智能行业趋势", // (热度值、项目数)
        top: "top",
        left: "center"
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data: ['基础层', '技术层', '行业应用层', '通用应用层'],
        top: 30
    },
    toolbox: {
        feature: {
            saveAsImage: {}
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
        boundaryGap: false,
        data: ['三月', '四月', '五月', '六月', '七月', '八月', '九月']
    }],
    yAxis: [{
        type: 'value'
    }],
    series: [{
        name: '基础层',
        type: 'line',
        stack: '总量',
        areaStyle: {
            normal: {}
        },
        data: [120, 132, 101, 134, 90, 230, 210]
    }, {
        name: '技术层',
        type: 'line',
        stack: '总量',
        areaStyle: {
            normal: {}
        },
        data: [220, 182, 191, 234, 290, 330, 310]
    }, {
        name: '行业应用层',
        type: 'line',
        stack: '总量',
        areaStyle: {
            normal: {}
        },
        data: [150, 232, 201, 154, 190, 330, 410]
    }, {
        name: '通用应用层',
        type: 'line',
        stack: '总量',
        label: {
            normal: {
                show: true,
                position: 'top'
            }
        },
        areaStyle: {
            normal: {}
        },
        data: [820, 932, 901, 934, 1290, 1330, 1320]
    }]
};