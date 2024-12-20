option = {
    title: {
        text: '各版块Issue解决率分析'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['2017-06', '2017-07', '2017-08', '2017-09'],
        align: 'right',
        right: 10
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['虎彩影像','IT运维', 'SAP支持', 'OA支持', '虎彩影印(个性C2B)', '服务器运维','数码生产管理系统','移动APP(简印)','出版业务','Unlimax实施']
    }],
    yAxis: [{
        type: 'value',
        name:'百分比(%)',
        axisLabel: {
            formatter: '{value} '
        }
    }],
    series: [{
        name: '2017-06',
        type: 'bar',
        data: [120, 99, 88, 77, 66,100, 99, 88, 77, 66,]
    }, {
        name: '2017-07',
        type: 'bar',
        data: [99, 88, 77, 66,100, 99, 88, 77, 66,55]
    }, {
        name: '2017-08',
        type: 'bar',
        data: [88, 77, 66,100, 99, 88, 77, 66,84,79]
    }, {
        name: '2017-09',
        type: 'bar',
        data: [77, 66,100, 99, 88, 77, 66,84,79,110,86]
    }]
};