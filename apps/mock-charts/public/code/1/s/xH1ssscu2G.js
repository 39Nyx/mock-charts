app.title = '极坐标系下的堆叠柱状图';

option = {
    angleAxis: {
        type: 'category',
        data: ['0:00-2:00',
 '2:00-4:00',
 '4:00-6:00',
 '6:00-8:00',
 '8:00-10:00',
 '10:00-12:00',
 '12:00-14:00',
 '14:00-16:00',
 '16:00-18:00',
 '18:00-20:00',
 '20:00-22:00',
 '22:00-24:00'],
        z: 10
    },
    toolbox: {
        show: true,
    　　feature: {
　　　　    saveAsImage: {
　　　　        show:true,
                excludeComponents :['toolbox'],
                pixelRatio: 2
　　　　    }
　　    }
    },
    radiusAxis: {
    },
    polar: {
    },
    series: [{
        type: 'bar',
        data: [0, 0, 67, 326, 282, 222, 141, 232, 456, 320, 157, 60],
        coordinateSystem: 'polar',
        name: '刷卡',
        stack: 'a'
    }, {
        type: 'bar',
        data: [0, 0, 18, 88, 76, 57, 38, 58, 126, 86, 43, 15],
        coordinateSystem: 'polar',
        name: '投币',
        stack: 'a'
    }],
    legend: {
        show: true,
        data: ['刷卡', '投币']
    }
};