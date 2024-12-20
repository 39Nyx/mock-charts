option = {
    title: {
        text: '广西自治区各食品大类处罚情况',
        subtext: '数据来自网络'
    },
    backgroundColor:'#ffffff',
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['产品控制','排查整改', '行政出发']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis:  {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: ['粮食及粮食制品','调味品','肉制品','乳制品','饮料','方便食品','饼干','罐头','冷冻饮品']
    },
    series: [
        {
            name: '产品控制',
            type: 'bar',
            stack: '生产',
            
            data: [126, 231, 121, 231, 142, 256, 241,102,122]
        },
        {
            name: '排查整改',
            type: 'bar',
            
            data: [120, 63, 101, 134, 90, 230, 210,231,73]
        },
        {
            name: '行政出发',
            type: 'bar',
            
            data: [138, 82, 136, 123, 76, 249, 258,34,124]
        }
        
    ]
};