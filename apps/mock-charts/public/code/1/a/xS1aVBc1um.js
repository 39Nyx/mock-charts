app.title = '折柱混合';

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data:['财务消费','留资量','下发量','留资成本','下发成本']
    },
    xAxis: [
        {
            type: 'category',
            data: ['北京','天津','上海','南京','广州','杭州','深圳','西安','郑州','太原','程度','重庆'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '财务消费',
            min: 0,
            max: 350,
            interval: 50,
            axisLabel: {
                formatter: '{value} 元'
            }
        },
                {
            type: 'value',
            name: '下发量',
            min: 0,
            max: 200,
            interval: 50,
            axisLabel: {
                formatter: '{value} '
            }
        },
        {
            type: 'value',
            name: '留资量',
            min: 0,
            max: 200,
            interval: 50,
            axisLabel: {
                formatter: '{value} 个'
            }
        }
    ],
    series: [
        {
            name:'财务消费',
            type:'bar',
            data:[100.120, 115, 98, 103, 106, 110, 135, 162, 132.6, 120.0, 116]
        },
                {
            name:'留资量',
            type:'bar',
            data:[20.26, 25.29, 29.0, 26.4, 28.7, 27, 31.6, 18.2, 28.7, 28.8, 26.0, 22.3]
        },
                {
            name:'下发量',
            type:'bar',
            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
        },

        {
            name:'留资成本',
            type:'line',
            yAxisIndex: 1,
            data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        },
        {
            name:'下发成本',
            type:'line',
            yAxisIndex: 1,
            data:[10.0, 12.2, 13.3, 14.5, 16.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 16.2]
        }
    ]
};
