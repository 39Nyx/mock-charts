option = {

    backgroundColor: '#f7f8fa',
    //    color: ['#dd4444', '#fec42c', '#80F1BE'],



    title: {
        text: '本周空气质量指数',
        link: 'http://www.163.com',
        subtext: '三个主要城市',
        sublink: 'http://www.pm25.in',
        left: 'center',
        textStyle: {
            color: '#6c6c6c'
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        //        orient: 'vertical',
        //        left: 'left',
        top: '10%',
        data: ['上海', '濮阳', '北京']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        name: '上海',
        type: 'line',
        smooth: true,
        symbolSize: 8,
      	symbol: 'circle',
        //            stack: '总量',
        data: [120, 132, 101, 134, 90, 230, 210]
    }, {
        name: '濮阳',
        type: 'line',
        //            stack: '总量',
        data: [220, 182, 191, 234, 290, 330, 310]
    }, {
        name: '北京',
        type: 'line',
        //            stack: '总量',
        data: [150, 232, 201, 154, 190, 330, 410]
    }]
};