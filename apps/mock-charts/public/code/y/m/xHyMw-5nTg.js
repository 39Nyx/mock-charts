app.title = '折柱混合';

//  颜色集合
var colorList = [
    '#59c5a7', '#51b8fe', '#fa827d', '#ffa55d', '#9c7de1', '#5d9eff', '#ffdb5d', '#ee82ed', '#8fca5f', '#b995f5'
];
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: 'fff'
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
        data:['我的得分','班级均分','年级均分']
    },
    xAxis: [
        {
            type: 'category',
            data: ['2015——2016学年第一学期期中考试','2015——2016学年第一学期第一次月考','2015——2016学年第一学期期末考试'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '成绩',
            min: 0,
            max: 750,
            interval: 100,
            axisLabel: {
                formatter: '{value} 分'
            }
        },
        {
            type: 'value',
            name: '',
            min: 0,
            max: 750,
            interval: 100,
            axisLabel: {
                formatter: '{value} 分'
            }
        }
    ],
    series: [
        {
            name:'我的得分',
            type:'bar',
            data:[458, 480, 465]
        },
        {
            name:'班级均分',
            type:'bar',
            data:[ 516, 495, 480]
        },
        {
            name:'年级均分',
            type:'line',
            yAxisIndex: 1,
            data:[495, 500, 475]
        }
    ]
};
