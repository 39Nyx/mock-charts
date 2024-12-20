app.title = '坐标轴刻度与标签对齐';

option = {
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['进水泵房', '臭氧发生间', '加药间', '沉淀池', '碳沙滤池', '膜处理车间', '出水泵房','高配间','排泥水车间','长塘泵房','厂区'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'设备数量',
            type:'bar',
            barWidth: '60%',
            data:[9, 7, 11, 13, 23, 40, 9, 2, 24, 8, 1]
        }
    ]
};
