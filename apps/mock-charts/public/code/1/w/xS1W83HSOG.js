var colors = ['#e288ef','#e6aaef','#4c83c1','#289328'];
options = [{
    title:{
        text:'主体业态大类',
        textStyle:{
             fontSize: '18'
        }
    },
  
    grid: {
        left: '3%',
        right: '44%',
        bottom:'1%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {type: 'cross'}
    },
    legend: {
        data:['实有许可证书数','新增环比','注销环比'],
        align: 'left',
        left: 10,
        top:30
    },
    xAxis: [
        {
            type: 'category',
            
            axisTick: {
                alignWithLabel: true
            },
            data: ['食品销售经营者','餐饮服务经营者','单位食堂']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '',
            min: 0,
            max: 1000,
            position: 'left',
            axisLine: {
                lineStyle: {
                    color:'#016797',
                }
            },
            axisLabel: {
                formatter: '{value} '
            }
        },
        {
            type: 'value',
            name: '',
            position: 'right',
            axisLine: {
                lineStyle: {
                    color: '#1ea49f',
                }
            },
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],
    series: [
        {
            name:'实有许可证书数',
            stack: '总量',
            color: '#0c819e',
            barWidth : 30,
            type:'bar',
             data:[602,578,679]
        },
        {
            name:'新增环比',
            type:'line',
            color: '#e15f49',
            yAxisIndex: 1,
            data:[10,13,8]
        },
        
        {
            name:'注销环比',
            type:'line',
            color: '#e6e303',
            yAxisIndex: 1,
            data:[5,3,4]
        }
    ]
},
{
    title:{
        text:'主体业态子类（食品销售经营者）',
        textStyle:{
             fontSize: '18'
        }
    },
    grid: {
        left: '3%',
        right: '44%',
        bottom:'1%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {type: 'cross'}
    },
    legend: {
        data:['实有许可证书数','新增环比','注销环比'],
        align: 'left',
        left: 10,
        top:30
    },
    xAxis: [
        {
            type: 'category',
            
            axisTick: {
                alignWithLabel: true
            },
            data: ['互联网经营','其他']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '',
            min: 0,
            max: 1000,
            position: 'left',
            axisLine: {
                lineStyle: {
                    color:'#016797',
                }
            },
            axisLabel: {
                formatter: '{value} '
            }
        },
        {
            type: 'value',
            name: '',
            position: 'right',
            axisLine: {
                lineStyle: {
                    color: '#1ea49f',
                }
            },
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],
    series: [
        {
            name:'实有许可证书数',
            stack: '总量',
            color: '#639ba9',
            barWidth : 30,
            type:'bar',
            data:[602,578]
        },
        {
            name:'新增环比',
            type:'line',
            color: '#e15f49',
            yAxisIndex: 1,
            data:[10,13]
        },
        
        {
            name:'注销环比',
            type:'line',
            color: '#e6e303',
            yAxisIndex: 1,
            data:[5,3]
        }
    ]
},
{
    title:{
        text:'主体业态子类（餐饮服务经营者）',
        textStyle:{
             fontSize: '18'
        }
    },
    grid: {
        left: '3%',
        right: '40%',
        bottom:'1%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {type: 'cross'}
    },
    legend: {
        data:['实有许可证书数','新增环比','注销环比'],
        align: 'left',
        left: 10,
        top:30
    },
    xAxis: [
        {
            type: 'category',
            
            axisTick: {
                alignWithLabel: true
            },
            data: ['互联网经营','内设中央厨房','集体用餐配送单位','其他']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '',
            min: 0,
            max: 1000,
            position: 'left',
            axisLine: {
                lineStyle: {
                    color:'#016797',
                }
            },
            axisLabel: {
                formatter: '{value} '
            }
        },
        {
            type: 'value',
            name: '',
            position: 'right',
            axisLine: {
                lineStyle: {
                    color: '#1ea49f',
                }
            },
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],
    series: [
        {
            name:'实有许可证书数',
            stack: '总量',
            barWidth : 30,
            color: '#639ba9',
            type:'bar',
            data:[602,578,678,478]
        },
        {
            name:'新增环比',
            type:'line',
            color: '#e15f49',
            yAxisIndex: 1,
            data:[10,13,3,6]
        },
        
        {
            name:'注销环比',
            type:'line',
            color: '#e6e303',
            yAxisIndex: 1,
            data:[5,3,6,2]
        }
    ]
},
{
    title:{
        text:'主体业态子类（单位食堂）',
        textStyle:{
             fontSize: '18'
        }
    },
    grid: {
        left: '3%',
        right: '44%',
        bottom:'1%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {type: 'cross'}
    },
    legend: {
        data:['实有许可证书数','新增环比','注销环比'],
        align: 'left',
        left: 10,
        top:30
    },
    xAxis: [
        {
            type: 'category',
            
            axisTick: {
                alignWithLabel: true
            },
            data: ['学校食堂','其他']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '',
            min: 0,
            max: 1000,
            position: 'left',
            axisLine: {
                lineStyle: {
                    color:'#016797',
                }
            },
            axisLabel: {
                formatter: '{value} '
            }
        },
        {
            type: 'value',
            name: '',
            position: 'right',
            axisLine: {
                lineStyle: {
                   color: '#1ea49f',
                }
            },
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],
    series: [
        {
            name:'实有许可证书数',
            stack: '总量',
            barWidth : 30,
            color: '#639ba9',
            type:'bar',
            data:[602,578]
        },
        {
            name:'新增环比',
            type:'line',
            color: '#e15f49',
            yAxisIndex: 1,
            data:[10,13]
        },
        
        {
            name:'注销环比',
            type:'line',
            color: '#e6e303',
            yAxisIndex: 1,
            data:[5,3]
        }
    ]
}];
