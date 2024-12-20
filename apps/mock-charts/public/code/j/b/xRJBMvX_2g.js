const data = {
    title: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    data: [100, 91, 68, 92, 100, 54, 100, 100, 75, 90, 60, 70]
}
option = {
    tooltip: {
        trigger: 'axis'
    },
    backgroundColor: '#263988',
    grid: {
        backgroundColor: '#ffffff',
        borderWidth: 0,
        left: '2%',
        right: '2%',
        bottom: '5%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        name: '',
        boundaryGap: true,
        data: data.title,
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: '#E9EFF4'
            },
            show: true
        }
        // axisLabel: {
        //     formatter: '{value}'
        // }

        // axisLabel: {
        //     show:true,
        //     interval:0,
        //     formatter:function(value)  
        //     {  
        //       return value.split("").join("\n");  
        //   } ,
        //   fontSize:'15'
        // },
    }],
    yAxis: {
        name: '',
        axisLabel: {
            // show: false, // 不显示纵坐标数值
            formatter: '{value}'
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: '#E9EFF4'

            },
            show: true
        }

    },
    series: [{
        type: 'line',
        data: data.data,
        itemStyle: {
            normal: {
                color: '#3366FF',
                borderColor: '#3366FF',
                borderWidth: 2   //圆圈线条大小  
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(12,139,222,0.15)'
                }, {
                    offset: 1,
                    color: 'rgba(58,133,255,0.14)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 5   //圆圈放大
            }
        },
        symbolSize: 10,   //圆圈大小
        label: {
            normal: {
                show: true, // 圆点上显示值
                // distance: 10, // 向position方向偏移，默认5
                color: '',
                position: 'top'
            }
        }
    }]
};