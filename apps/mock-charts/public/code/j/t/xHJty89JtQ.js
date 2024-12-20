
option = {
    color: ['', '', 'red', 'bule', 'yellow', '#FF00FF'],
    angleAxis: {
        clockwise: false,
        axisTick: {
            show: false
        },
        axisLine: {
            color: '#fff',
            lineStyle: {
                width: 1,
                type: 'dotted',
                color: '#0157a1',
            }
        },
        splitLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        }
    },
    radiusAxis: {
        type: 'category',
        inverse : true,
        axisLabel: {
            interval: 0,
            margin: -5,
            align: 'left',
            padding: [5,0,0,0]
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
        },
        splitLine: {
            show: false,
        },
        data:["267.20", "0.00", "0.71", "0.00"],
        z: 10
    },
    polar: {
        radius: '20%',
    },
    series: [
        {
            type: 'bar',
            data: [65, 33, 20, 18],
            barWidth:10,
            coordinateSystem: 'polar',
            name: 'A',
            z:2,
            itemStyle:{
                barBorderRadius: [5, 5, 0, 0]
            }
        }, {
            type: 'bar',
            data: [100, 100, 100, 100],
            coordinateSystem: 'polar',
            name: 'B',
            barWidth:1,
            barGap: '-10%',
            z: 1,
            
        },
        {
            type: 'bar',
            name: 'AA',
            coordinateSystem: 'polar',
        },
        {
            type: 'bar',
            name: 'BB',
            coordinateSystem: 'polar',
        },
        {
            type: 'bar',
            name: 'CC',
            coordinateSystem: 'polar',
        },
        {
            type: 'bar',
            name: 'DD',
            coordinateSystem: 'polar',
        },
    ],
    legend: {
        show: true,
        data: ['AA', 'BB', 'CC', 'DD']
    }
};
