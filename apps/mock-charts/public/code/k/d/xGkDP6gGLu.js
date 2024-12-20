app.title = '坐标轴刻度与标签对齐';

option = {
    color: ['#1c9a4c'],

    // tooltip: { },
    grid: {
        left: '8%',
        right: '8%',
        default: '8%',
        containLabel: true
    },


    yAxis: {
        
         axisLine: {
            show: false,
        },
        
        data: [
           "操作5", "操作4", "操作3", "操作5", "操作4", "操作3", "操作2",
            "操作1",
        ],
       
        axisTick: {
            show: false
        },
       


    },

    xAxis: [{
         show: false,
        axisTick: {
            show: false
        },
        type: 'value',
        max: 1500,
        splitNumber: 5,
        axisLabel: {
            formatter: '{value}'
        }
    }],






    series: [{
        name: '销量',
        type: 'bar',
        barWidth: '20%',
        label: {
            normal: {
                show: true,
                position: 'right',
                textStyle: {
                    color: 'black'
                }
            }
        },

        data: [347, 347, 654, 347, 347, 654, 873, 897]
    }]
};