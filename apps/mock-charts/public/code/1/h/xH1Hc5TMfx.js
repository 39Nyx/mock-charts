app.title = '双向柱状图';

var itemStyle = {
    normal: {
      	label: {
        	show: false
        }
    },
    emphasis: {
        barBorderWidth: 1,
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: 'rgba(0,0,0,0.5)'
    }
};

option = {
    backgroundColor: '#eee', 
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    xAxis: {
        inverse: true,
        splitArea: {show: false}
    },
    yAxis: {
        data: [],
        silent: false,
        axisLine: {onZero: true},
        splitLine: {show: false},
        splitArea: {show: false}
    },
    grid: {
        left: 100
    }, 
    series: [
        {
            name: 'bar',
            type: 'bar',
            stack: 'one',
            itemStyle: itemStyle,
            data: [35, 145, 22, 138, 94, 45, 132, 107, 151, 19]
        },
        {
            name: 'bar2',
            type: 'bar',
            stack: 'one',
            itemStyle: itemStyle,
            data: [-26, -75, -14, -18, -76, -51, -23, -23, -12, -72]
        }
    ]
};