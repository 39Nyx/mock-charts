app.title = '极坐标系下的堆叠柱状图';

option = {
    angleAxis: {
        type: 'category',
        data: ['教育局', '教师', '教材', '国家', '学生', '学习'],
        z: 10
    },
    radiusAxis: {
    },
    polar: {
    },
    series: [{
        type: 'bar',
        data: [7, 6, 22, 6, 14, 24],
        coordinateSystem: 'polar',
        name: '正面',
        stack: 'a'
    }, {
        type: 'bar',
        data: [30, 25, 24, 7, 6, 6,],
        coordinateSystem: 'polar',
        name: '中立',
        stack: 'a'
    }, {
        type: 'bar',
        data: [87, 5, 22, 6, 14, 24],
        coordinateSystem: 'polar',
        name: '负面',
        stack: 'a'
    }],
    legend: {
        show: true,
        data: ['正面', '中立', '负面']
    }
};
