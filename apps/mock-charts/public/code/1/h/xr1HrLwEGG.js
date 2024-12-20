option = {
    backgroundColor: '#fff',
    
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    
    legend: {
        data:['当年玉米库存量', '当年玉米总供给量', '当年玉米消费量']
        
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    
    xAxis : [
        {
            type : 'value'
        }
    ],
    yAxis : [
        {
            type : 'category',
            axisTick : {show: false},
            data : ['2012年','2013年','2014年','2015年','2016年']
        }
    ],
    series : [
        {
            name:'当年玉米库存量',
            type:'bar',
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            itemStyle:{
                normal: {
                    show: true,
                    color: '#EC7357',
                }
            },
            data:[8779.53, 14172.23, 20701.58, 27760.58, 29339.58,]
        },
        {
            name:'当年玉米总供给量',
            type:'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true
                }
               // formatter: '{}万吨'
            },
            itemStyle:{
                normal: {
                    show: true,
                    color: '#FDD692',
                }
            },
            data:[26558.53,31199.23,36702.83,44395.98,48653.98]
        },
        {
            name:'当年玉米消费量',
            type:'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            itemStyle:{
                normal: {
                    show: true,
                    color: '#754F44',
                }
            },
            data:[-17771, -17025, -16000, -16635, -19380]
        }
    ]
};
