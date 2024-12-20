
option = {
    title: {
        text: '2017年平台发文量统计'
    },
    color: ['#3398DB','#33dbbf','#a7db33'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['简书','博客','公众号']
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
            data : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July','Aug','Sep','Oct','Nov','Dec'],
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
            name:'简书',
            type:'bar',
            barWidth: '20%',
            data:[5, 3, 5, 3, 5, 8, 2,0,2,1,0,0]
        },
        {
            name:'博客',
            type:'bar',
            barWidth: '20%',
            data:[1, 2, 3, 3, 2, 1, 0,3,0,1,0,0]
        },
        {
            name:'公众号',
            type:'bar',
            barWidth: '20%',
            data:[0, 0,0, 0, 0,0, 0,7,9,2,0,0]
        }
    ]
};
