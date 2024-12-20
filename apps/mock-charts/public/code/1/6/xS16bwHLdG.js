

option = {
    title: {
        text: '检查项问题排名情况Top10',
        textStyle:{
             fontSize: '15'
        }
    },
    legend: {
        data:['发现违法违规问题数'],
        align: 'left',
        left: 10,
        top:30
    },
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
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
            data : ['检查项1','检查项2','检查项3','检查项4','检查项5','检查项6','检查项7','检查项8','检查项9','检查项10'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            // type : 'category',
            // data : ['10','20','30','40'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    series : {
        name:'发现违法违规问题数',
        type:'bar',
        barWidth: '40%',
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
        },
        data:[83, 73, 62, 53, 44, 42,31,27,22,17]
    },
   
    
};