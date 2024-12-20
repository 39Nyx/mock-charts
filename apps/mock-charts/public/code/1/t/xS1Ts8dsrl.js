option = {
    title: {
        text: '2016年12月区县合规成本分析'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['包租费','装修费','保洁费','物业费'],
        align: 'right',
        right:10
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
            data : ['长宁区','虹口区','静安区','黄浦区']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'包租费',
            type:'bar',
            data:[320, 332, 301, 334]
        },
        {
            name:'装修费',
            type:'bar',
            data:[120, 132, 101, 134]
        },
        {
            name:'保洁费',
            type:'bar',
            data:[220, 182, 191, 234]
        },
        {
            name:'物业费',
            type:'bar',
            data:[150, 232, 201, 154]
        }
    ]
};