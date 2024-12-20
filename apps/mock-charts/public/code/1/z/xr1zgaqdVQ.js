option = {
    "backgroundColor": "#fff",
    "top": "2%",
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['最高气温']
    },
    xAxis:  {
        type: 'category',
        boundaryGap: false,
        data: ['1101教室','1102教室','1103教室','1104教室','1105教室','1106教室','1107教室','1108教室','1109教室','1110教室','1111教室','1112教室','1113教室','1114教室','1115教室']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value}'
        }
    },
    series: [
        {
            name:'故障数',
            type:'line',
            data:[30, 20, 5, 2, 1, 1, 1,2, 6, 9, 1, 6, 13, 10,15],
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            }
        }
    ]
};
