app.title = '  条形图';

option = {
    title: {
        text: '性少数在社会服务环境下是否介意披露自己的身份',
         top: '5%',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['很介意', '视情况而定','不介意']
         
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['医疗卫生服务','心理健康服务','其他社会服务']
    },
    series: [
        {
            name: '很介意',
            type: 'bar',
            data: [23.2, 10.0, 23.2]
        },
        {
            name: '视情况而定',
            type: 'bar',
            data: [58.0, 46.9, 68.1]
        },
  {
            name: '不介意',
            type: 'bar',
            data: [18.8, 43.1, 8.6]
        }
    ]
  
    
};
