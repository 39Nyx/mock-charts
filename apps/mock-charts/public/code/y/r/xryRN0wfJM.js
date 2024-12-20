app.title = '坐标轴刻度与标签对齐';

option = {
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },

    textStyle: {
        color: '#00f6ff'
    },


    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        axisTick: {
            alignWithLabel: true
        },
        textStyle: {
            color: 'red'
        }

    }],
    yAxis: [{
        // type : 'category',
        // data : ['10','20','30','40'],
        axisTick: {
            alignWithLabel: true
        }
    }],
    series: [{
            name: '访问量',
            type: 'bar',
            barWidth: '20%',
            data: [11111, 1113, 3332, 4443, 5224, 3233, 431, 3, 3, 2, 3, 2]
        },

    ],
    label: {
        normal: {
            show: true,
            position: 'top',
            formatter: '{c}'
        }
    },
    itemStyle: {
        normal: {

            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(17, 168,171, 1)'
            }, {
                offset: 1,
                color: 'rgba(17, 168,171, 0.1)'
            }]),
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            shadowBlur: 10

        }
    }
};