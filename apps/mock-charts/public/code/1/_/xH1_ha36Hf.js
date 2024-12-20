options = [
    
{
    backgroundColor: '#ffffff',
    tooltip: {
        trigger: 'axis',
        axisPointer: {type: 'cross'}
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data:['投诉举报数','同比率']
    },
    xAxis: [
        {
            type: 'category',
            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '投诉举报数',
            min: 0,
            max: 500,
            interval: 50,
            axisLabel: {
                formatter: '{value} '
            }
        },
        {
            type: 'value',
            name: '同比',
            min: -10,
            max: 10,
            interval: 5,
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],
    series: [
        {
            name:'投诉举报数',
            type:'bar',
            data:[321, 139, 221, 321, 287,262, 190, 210, 321, 113, 354, 339]
        },
       
        {
            name:'同比率',
            type:'line',
            yAxisIndex: 1,
            data:[2.0, 2.2, -3.3, 4.5, 6.3, 6.2, 5.3, -4.4, 2.0, 4.5, 5.0, -2.2]
        }
    ]
},
{
    backgroundColor: '#ffffff',
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
            color: '#fafafa'
        }

    },
    title: {
        text: '投诉来源类型统计（一月）',
        subtext: ''
    },
    legend: {
        data: ['一般', '重要']
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['stack', 'tiled']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    calculable: true,
    xAxis: [{
        type: 'category',
        data: ['电话', '网络', '信件', '走访', '其他']
    }],
    yAxis: [{
        name: '投诉举报数',
        type: 'value'
    }],

    series: [

        {
            name: '一般',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'inside'
                    },
                    color: '#2f4554'
                }
            },
            data: [120, 132, 101, 134, 90]
        },
        {
            name: '重要',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'inside'
                    },
                    color: '#d53a35'
                }
            },
            data: [19, 32, 22, 16, 68]
        }

    ]
}
];