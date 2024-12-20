app.title = '网友的态度';

option = {
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '30%',
        right: '30%',
        bottom: '10%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['支持政府', '支持俱乐部', '评说', ],
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
            name:'直接访问',
            type:'bar',
            barWidth: '60%',
            data:[14,45 , 241, ]
        }
    ]
};
