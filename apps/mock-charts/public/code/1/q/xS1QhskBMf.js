app.title = '堆叠条形图';

option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: [ '产妇跳楼事件（单位：条）',]
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
        data: ['北京','广东','陕西','江苏','山东','上海','河南','四川','浙江','安徽','湖北','河北']
    },
    series: [
        {
            name: '产妇跳楼事件（单位：条）',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [579, 318, 167, 145, 143,122,120,115,112,105,103,98]
        },

    ]
};