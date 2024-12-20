app.title = '极坐标系下的堆叠柱状图';

option = {
    title: {
        text: '消耗的卡路里'
    },
    angleAxis: {
    },
    radiusAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        z: 10
    },
    polar: {
    },
    series: [{
        type: 'bar',
        data: [1, 2, 3, 4, 3, 6, 1],
        coordinateSystem: 'polar',
        name: '走路',
        stack: 'a'
    }, {
        type: 'bar',
        data: [2, 4, 6, 8, 2, 3, 3],
        coordinateSystem: 'polar',
        name: '跑步',
        stack: 'a'
    }, {
        type: 'bar',
        data: [1, 2, 3, 4, 3, 4, 3],
        coordinateSystem: 'polar',
        name: '游泳',
        stack: 'a'
    }],
    legend: {
        show: true,
        data: ['走路', '跑步', '游泳']
    }
};
