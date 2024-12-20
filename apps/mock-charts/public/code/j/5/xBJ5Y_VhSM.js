option = {
    backgroundColor:'#020933',
    title: {
        text: '世界人口总量',
        textStyle:{
            color:'white',
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: [{
            name:'数量',
        }],
        textStyle:{
            color:'white'
        }
        
    },
    grid: {
        top:'30%',
        left: '30%',
        right: '40%',
        bottom: '30%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        splitLine:{
          show:false,  
        },
        axisLabel:{
            color:'white',
        }
    },
    yAxis: {
        type: 'category',
        data: [{
            value:'可用',
            textStyle:{
                color:'white'
            }
        },{
            value:'故障',
            textStyle:{
                color:'white'
            }
        },{
            value:'健康',
            textStyle:{
                //color:'white'
            }
        },],
        axisLabel:{
            color:'white',
        }
    },
    series: [
        {
            name: '数量',
            type: 'bar',
            label:{
                    normal:{
                        show:true,
                        position:'right',
                        textStyle:{
                            color:'white'
                        }
                    }
                },
            itemStyle:{
                normal:{
                 color:function(params){
                     var colorList = ['blue','red','green'];
                     return colorList[params.dataIndex]
                 }
                },
            },
            barWidth:25,
            data: [{
                name:'3',
                value:3,
                label:{
                    normal:{
                        show:true,
                        position:'right',
                        textStyle:{
                            color:'white'
                        }
                    }
                },
                itemStyle:{
                    normal:{
                        //color:'red',
                }
            }
            }, 1, 5]
        }
    ]
};
