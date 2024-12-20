app.title = '堆叠条形图';
option = {

    title: {
        text: '日常生活环境对性少数的接受程度',
        left: '28%',
        top: '5%',
        textAlign: 'center'
    },

    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['接受', '说不清', '不接受']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: ['家人', '初中老师', '大学老师', '上司', '神职人员']
    },
    series: [{
            name: '接受',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [8.1, 3.9, 33.0, 17.1, 15.8]
        }, {
            name: '说不清',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [34.2, 67.6, 53.3, 63.9, 63.4]
        }, {
            name: '不接受',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [57.6, 28.5, 13.7, 19.0, 20.8]
        }

    ]
};
