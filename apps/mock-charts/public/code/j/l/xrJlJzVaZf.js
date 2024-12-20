option = {
    
    xAxis: {
        type:'value',
        axisTick:{
            show:false,
        },
        axisLine:{
            lineStyle:{
                color:'#fff',
            }
        },
        axisLabel:{
            textStyle:{
                fontSize:30,
                color:'#fff'
            }
        },
        splitLine:{
            show:false
        }
    },
    yAxis: {
        data: ['出租房屋', '自住房屋', '工地工棚'],
        axisTick:{
            show:false,
        },
        axisLine:{
            lineStyle:{
                color:'#fff',
            }
        },
        axisLabel:{
            textStyle:{
                fontSize:30,
                color:'#fff'
            }
        }
    },
    tooltip:{
        show:true,
        formatter:'{b}:{c}人',
    },
    series: [{
        xAxisIndex:0,
        type: 'bar',
        data:[44826,33120,200],
        itemStyle:{
            normal:{
                color: function(params) {
                    var colors = [
                        '#477ab9',
                        '#8cb140',
                        '#bd4642'
                    ];
                    return colors[params.dataIndex];
                },
                
            }
            
        },
        barWidth:50
    }]
};