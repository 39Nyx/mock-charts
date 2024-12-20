option = {
    title:{
      text:'2个维度一个数值'  
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['男','女']
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
            data : ['深圳','上海','北京','广州','长沙','武汉','成都']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'男',
            type:'bar',
            data:[7, 1, 4, 1, 1, 1, 1]
        },
        {
            name:'女',
            type:'bar',
            data:[1, 0, 1, 5, 2, 5, 3]
        }
    ]
};
