option = {
    backgroundColor: '#fff',
    title: {
        text: '入库量趋势图',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 16,
            color: '#3e4956'
        },
        left: '6%'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#57617B'
            }
        }
    },
    legend: {
        icon: 'rect',
        itemWidth: 14,
        itemHeight: 5,
        itemGap: 13,
        data: ['今天', '近7天', '近30天'],
        right: '4%',
        textStyle: {
            fontSize: 12,
            color: '#3e4956'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#57617B'
            }
        },
        data: ['03.21', '03.22', '03.23', '03.24', '03.25', '03.26', '03.27']
    }],
    yAxis: [{
        type: 'value',
        axisTick: {
            show: false
        },
        
        axisLine: {
            show:false,
            lineStyle: {
                color: '#57617B'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14
            }
        },
        splitLine: {
            lineStyle: {
                color: '#57617B'
            }
        }
    }],
    series: [{
        name: '今天',
        type: 'line',
        smooth: true,
        lineStyle: {
            normal: {
                width: 2
            }
        },
   
        itemStyle: {
            normal: {
                color: 'rgb(137,189,27)'
            }
        },
        data: [15.2,18.4,13.5,20.6,19.1,16.8,18.6]
    }, 
    
    {
        name: '近7天',
        type: 'line',
        smooth: true,
        lineStyle: {
            normal: {
                width: 2
            }
        },
       
        itemStyle: {
            normal: {
                color: '#f1c40f'
            }
        },
        data: [13.3,16.2,12.3,15.0,10.6,14.6,17.0]
    }, 
    
    {
        name: '近30天',
        type: 'line',
        smooth: true,
        lineStyle: {
            normal: {
                width: 2
            }
        },
      
        itemStyle: {
            normal: {
                color: 'rgb(219,50,51)'
            }
        },
        data: [14.2,11.0,17.5,12.1,15.7,18.5,15.9]
    }, ]
};