values = [100,91,88,92,100,94,100,100,95,90];
option = {
    tooltip: {
        formatter: " {c}"
    },
    grid:{
        backgroundColor:'#ffffff',
        borderWidth:0
    },
    xAxis: [{
        type: 'category',
        name: '',
        boundaryGap: true,
        data: ['商务局','司法局','统计局','审计局','农林水局','民政局','教育局','住建局','食药监','科技局'],
        // axisLabel: {
        //     formatter: '{value}'
        // }
        
        axisLabel: {
            show:true,
            interval:0,
            formatter:function(value)  
            {  
               return value.split("").join("\n");  
           } ,
           fontSize:'15'
        },
    }],
    yAxis: {
        name: '',
        axisLabel: {
            //show: false, // 不显示纵坐标数值
            formatter: '{value}'
        },
        axisTick: {
            show: false
        },
        splitLine: {
            // lineStyle: {
            //     type: 'solid',
            //     color: '#ccc'
                
            // },
            show:false
        }
        
    },
    series: [{
        type: 'line',
        data: values,
        itemStyle: {
            normal: {
                color: '#5EB3F3'
            }
        },
         areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0, 136, 212, 0.8)'
                }, {
                    offset: 1,
                    color: 'rgba(0, 136, 212, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        symbolSize: 10,
        label: {
            normal: {
                show: true, // 圆点上显示值
                //distance: 10, // 向position方向偏移，默认5
                color: '#999999',
                position: 'top'
            }
        }
    }]
};