app.title = '堆叠条形图';

option = {
    grid: {
        left: '80',
        right:'80',
        bottom: '60',
        containLabel: false
    },
    xAxis:  {
        type: 'value',
        max:10,
        splitLine:{
            show:false
        },
        axisLine:{
            lineStyle:{
                color:'#aaa'  
            }
        },
        axisTick:{
            lineStyle:{
                color:'#aaa'  
            }
        }
    },
    yAxis: {
        type: 'category',
        show:false
    },
    series: [
        {
            type: 'bar',
            barWidth: '40',
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
                            fontSize:'12',
                        }
                    },
            data: [
                {
                    value:0,
                    label:{
                        normal:{
                            formatter:'性格很差'
                        }
                    }    
                },
                {
                    value:0,
                    label:{
                        normal:{
                            formatter:'性格很差'
                        }
                    }    
                },
                {
                    value:0,
                    label:{
                        normal:{
                            formatter:'性格很差'
                        }
                    }    
                },
                {
                    value:0,
                    label:{
                        normal:{
                            formatter:'性格很差'
                        }
                    }    
                },
                { 
                    value:0,
                    label:{
                        normal:{
                            formatter:'性格很差'
                        }
                    }    
                },
                {
                    value:0,
                    label:{
                        normal:{
                            formatter:'性格很差'
                        }
                    }    
                },
                {
                    value:0,
                    label:{
                        normal:{
                            formatter:'性格很差'
                        }
                    }    
                }]
        },
        {
            type: 'bar',
            barWidth: '40',
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
                            position:'right',
                            fontSize:'12',
                        }
                    },
            data: [
                {
                    value:10,
                    label:{
                        normal:{
                            formatter:'性格很好'
                        }
                    }    
                },
                {
                    value:10,
                    label:{
                        normal:{
                            formatter:'性格很好'
                        }
                    }    
                },
                {
                    value:10,
                    label:{
                        normal:{
                            formatter:'性格很好'
                        }
                    }    
                },
                {
                    value:10,
                    label:{
                        normal:{
                            formatter:'性格很好'
                        }
                    }    
                },
                {
                    value:10,
                    label:{
                        normal:{
                            formatter:'性格很好'
                        }
                    }    
                },
                {
                    value:10,
                    label:{
                        normal:{
                            formatter:'性格很好'
                        }
                    }    
                },
                {
                    value:10,
                    label:{
                        normal:{
                            formatter:'性格很好'
                        }
                    }    
                }]
        },
        {
            type:'line',
            symbolSize:'20',
            symbol:'circle',
             label:{
                show:true,
                position:'inside',
                color:'#f0f1f5'
            },
            lineStyle:{
              color:'red'  
            },
            data:[7,3,5,6,8,4,3]
            
        },
        {
            type:'line',
            symbolSize:'20',
            symbol:'circle',
            label:{
                show:true,
                position:'inside',
                color:'#f0f1f5'
            },
            lineStyle:{
              color:'#343434'  
            },
            data:[3,1,5,6,3,6,5]
            
        },
    ]
};