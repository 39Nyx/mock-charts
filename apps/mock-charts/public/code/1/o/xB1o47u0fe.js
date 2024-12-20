option = {
    title: {
        text: '未来一周气温变化',
        subtext: '纯属虚构'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['最高气温','最低气温']
    },
  
    xAxis:  {
        type: 'category',
        boundaryGap: false,
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} °C'
        }
    },
    series: [
        {
            name:'最高气温',
            type:'line',
            data:[1, 2, 2, 5, 3, 2, 0],
            markPoint: {
                data: [
                    {name: '周最低', value: 5,type:'max',
                        symbolSize:2,
                        label: {
                            normal: {
                                position: 'top',
                                formatter: '最高气温:5°C,日期:周四'
                            }
                        }                  
                        
                    }
                ]
            }
        }
    ]
};