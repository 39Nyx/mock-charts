app.title = '堆叠柱状图';

option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    backgroundColor:'RGB(255,255,255)',
    legend: {
        data:['单吨蒸汽耗天然气','蒸汽产出合计']
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
            data : ['早','中','晚']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'单吨蒸汽耗天然气',
            type:'bar',
            data:[320, 332, 301]
        },
        {
            name:'蒸汽产出合计',
            type:'bar',
            stack: '广告',
            data:[120, 132, 101]
        }
    ]
};
