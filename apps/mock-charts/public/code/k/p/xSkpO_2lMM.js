

option = {
    //color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        backgroundColor:'rgba(255,255,255,0.8)',
        extraCssText: 'box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);',
        textStyle:{
            color:'#6a717b',
        },
         
    }, 
    title: {
            text: "榆林产妇坠楼事件 网民话题分析图（数据单位:%）",
        },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    yAxis: [{
        type: 'category',
        data: ['质疑家属拒绝剖腹产','讨论医院、家属的责任归属','关注女性群体的人身权利','建议推广无痛分娩','期待完善医疗法律法规','其他'],
        
        axisTick: {
            alignWithLabel: true,
           
          
        },
         axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 12,
                color:'#94999f'
                }
        },
         axisLine: {
            lineStyle: {
                color: '#dbe0e6'
            }
         },
         
    }],
    xAxis: [{
        type: 'value',
         axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 12,
                color:'#94999f'
                }
        },
         axisLine: {
            lineStyle: {
                color: '#fff'
            }
         },
         splitLine: {
            lineStyle: {
                color: '#dbe0e6'
            }
        }
         
         
        
    }],
    backgroundColor: '#000000',
    series: [{
        name: 'Top 10',
        type: 'bar',
        barWidth:30,
        data: [31, 25, 18, 12, 9, 5],
        label: {
            normal: {
                show: true,
                position: 'insideRight',
                textStyle: {
                    color: 'white' //color of value
                }
            }
        },
        
      
        itemStyle: {
            
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: '#64bdc8' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#00c484' // 100% 处的颜色
                }], false),
                barBorderRadius: [0, 15,15, 0],
                shadowColor: 'rgba(0,0,0,0.1)',
                shadowBlur: 3,
                shadowOffsetY: 3
            }
        }
    }]
};