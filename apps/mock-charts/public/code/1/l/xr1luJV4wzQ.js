app.title = '堆叠条形图';

option = {
    animation:false,
    grid: [{
        left:10,
        width:100,
        height:150,
        bottom:30,
        containLabel: false
    },{
        left: 300,
        right:200,
        bottom:30,
        height:150,
        containLabel: false
    }],
    xAxis:  [{
        type: 'value',
        show:false
    },{
        type: 'value',
        max:9,
        min:1,
        interval:2,
        gridIndex:1,
        splitLine:{
            show:false
        },
        axisLine:{
            lineStyle:{
                color:'#aaa'  
            }
        },
        axisTick:{
            show:false
        }
    }],
    yAxis: [{
        type:'category',
        offset:-100,
        axisTick:{
          show:false  
        },
        data:['共识','响应','创新','学习','整合'],
        axisLabel:{
            fontSize:16
        }
    },{
        type: 'category',
        gridIndex:1,
        show:false
    }],
    series: [
        {
             type: 'bar',
            barWidth: '30',
             yAxisIndex:1,
             silent:true,
            xAxisIndex:1,
            stack: '总量',
            animation:false,
             itemStyle:{
                color:'#f0f1f5',
                borderWidth:0
            },
            data:[1,1,1,1,1]
        },
        {
            type: 'bar',
            barWidth: '30',
            yAxisIndex:1,
             silent:true,
            xAxisIndex:1,
            stack: '总量',
            animation:false,
            itemStyle:{
                color:'#f0f1f5',
                borderColor:'#777',
                borderWidth:1
            },
            label:{
                normal:{
                            color:'#333',
                            show:true,
                            position:'left',
                            distance:15,
                            fontSize:'12',
                        }
                    },
            data: [
                {
                    value:0,
                    label:{
                        normal:{
                            formatter:'目标分歧、关系紧张、氛围消极'
                        }
                    }    
                },
                {
                    value:0,
                    label:{
                        normal:{
                            formatter:'低奉献、拖延执行、逃避问题'
                        }
                    }    
                },
                { 
                    value:0,
                    label:{
                        normal:{
                            formatter:'照本宣科、墨守成规、人云亦云'
                        }
                    }    
                },
                {
                    value:0,
                    label:{
                        normal:{
                            formatter:'厌恶学习、迷信权威、依样葫芦'
                        }
                    }    
                },
                {
                    value:0,
                    label:{
                        normal:{
                            formatter:'头痛医头、锢聪塞明、不懂借力'
                        }
                    }    
                }]
        },
        {
            type: 'bar',
            barWidth: '30',
            stack: '总量',
            yAxisIndex:1,
             silent:true,
            xAxisIndex:1,
            animation:false,
            itemStyle:{
                color:'#f0f1f5',
                borderColor:'#777',
                borderWidth:1
            },
            label:{
                normal:{
                            color:'#333',
                            show:true,
                            distance:15,
                            position:'right',
                            fontSize:'12',
                        }
                    },
            data: [
                {
                    value:8,
                    label:{
                        normal:{
                            formatter:'目标一致、关系和谐、氛围积极'
                        }
                    }    
                },
                {
                    value:8,
                    label:{
                        normal:{
                            formatter:'高奉献、快速反应、直面问题'
                        }
                    }    
                },
                {
                    value:8,
                    label:{
                        normal:{
                            formatter:'举一反三、开放包容、独立清醒'
                        }
                    }    
                },
                {
                    value:8,
                    label:{
                        normal:{
                            formatter:'主动学习、触类旁通、学无常师'
                        }
                    }    
                },
                {
                    value:8,
                    label:{
                        normal:{
                            formatter:'高瞻远瞩、物善其用、目达耳通'
                        }
                    }    
                }]
        },
        {
            type:'line',
            yAxisIndex:1,
            xAxisIndex:1,
            symbolSize:'15',
            symbol:'circle',
             label:{
                show:true,
                position:'inside',
                color:'#f0f1f5',
                fontSize:9
            },
            lineStyle:{
              color:'red'  
            },
            data:[7,3,5,6,3]
            
        },
        {
            type:'line',
            yAxisIndex:1,
            xAxisIndex:1,
            symbolSize:'15',
            symbol:'circle',
            label:{
                show:true,
                position:'inside',
                color:'#f0f1f5',
                fontSize:9
            },
            lineStyle:{
              color:'#343434',
            },
            data:[3,1,5,6,3]
            
        }
    ]
};