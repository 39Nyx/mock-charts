app.title = '堆叠条形图';

option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['广告投放', '会展','走出去','走进来']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis:  {
        type: 'value',
        name: '次数'
    },
    yAxis: {
        type: 'category',
        data: ['2014','2015','2016','2017'],
        name: '年份'
    },
    series: [
        {
            barWidth: '60%',
            name: '广告投放',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [32, 40, 32, 15]
        },
        {
            name: '会展',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [12, 32, 10, 34]
        },
        {
            name: '走出去',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [22, 12, 19, 34]
        },
        {
            name: '走进来',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [15, 21, 20, 15]
        },
    ]
};