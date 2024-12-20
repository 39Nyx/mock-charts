
var itemStyle = {
    normal: {
        opacity: 0.8,
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
    }
};

option = {
    backgroundColor: '#404a59',
    color: [
        '#dd4444', '#D39C0C', '#80F1BE', '#6CDAE8'
    ],
    legend: {
        y: 'top',
        data: ['红', '黄' , '绿', '蓝'],
        textStyle: {
            color: '#fff',
            fontSize: 16
        }
    },
    grid: {
        x: '10%',
        x2: 150,
        y: '18%',
        y2: '10%'
    },
    xAxis: {
        type: 'value',
        name: '容量',
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#eee'
            }
        },
    },
    yAxis: {
        type: 'value',
        name: '数值',
        axisLine: {
            lineStyle: {
                color: '#eee'
            }
        },
        splitLine: {
            show: false
        }
    },
    visualMap: [
        {
            left: 'right',
            top: '10%',
            dimension: 1,
            min: 0,
            max: 250,
            itemWidth: 30,
            itemHeight: 120,
            calculable: true,
            precision: 0.1,
            text: ['圆形大小：数值'],
            textGap: 30,
            textStyle: {
                color: '#fff'
            },
            inRange: {
                symbolSize: [10, 80]
            },
            outOfRange: {
                symbolSize: [10, 80],
                color: ['rgba(255,255,255,.2)']
            },
            controller: {
                inRange: {
                    color: ['#c23531']
                },
                outOfRange: {
                    color: ['#444']
                }
            }
        }
    ],
    series: [
        {
            name: '红',
            type: 'scatter',
            itemStyle: itemStyle,
            data: [
                ['30',30],
                ['50',180]
            ]
        },
        {
            name: '黄',
            type: 'scatter',
            itemStyle: itemStyle,
            data: [
                ['30',150],
                ['60',100]
            ]
        },
        {
            name: '绿',
            type: 'scatter',
            itemStyle: itemStyle,
            data: [
                ['50',20],
                ['60',150]
            ]
        },
        {
            name: '蓝',
            type: 'scatter',
            itemStyle: itemStyle,
            data: [
                ['60',110],
                ['80',170]
            ]
        },
    ]
};