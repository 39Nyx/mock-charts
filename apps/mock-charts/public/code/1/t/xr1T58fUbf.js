app.title = '极坐标系下的堆叠柱状图';

option = {
    angleAxis: {
    },
    radiusAxis: {
        type: 'category',
        data: ['家属责任', '医院责任', '产妇责任'],
        z: 10
    },
    polar: {
    },
    series: [{
        type: 'bar',
        data: [132,0,0],
        coordinateSystem: 'polar',
        name: '',
        stack: 'a'
    }, {
        type: 'bar',
        data: [0,81,0],
        coordinateSystem: 'polar',
        name: '',
        stack: 'a'
    }, {
        type: 'bar',
        data: [0,0,24],
        coordinateSystem: 'polar',
        name: '',
        stack: 'a'
    }],
    legend: {
        show: true,
        data: ['A', 'B', 'C']
    }
};
