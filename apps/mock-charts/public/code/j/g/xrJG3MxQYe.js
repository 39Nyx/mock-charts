option = {
    title : {
        text: '小学数学教案质量统计饼状图（学科维度）',
        subtext: '年级：一年级-六年级     单位：份    学科：数学\n',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} {b} :{d}%",
         textStyle: {
                    fontSize:14
                }
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['优秀','通过','建议修改']
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    grid: [
        {x: '7.5%',y: '65%', width: '88%', height: '30%'},
    ],
    xAxis: [
        {gridIndex: 0,
        type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            data: ['一年级数学','二年级数学','三年级数学','四年级数学','五年级数学','六年级数学']},
    ],
    yAxis: [
        {gridIndex: 0,name:'年级',show:false
        },
    ],
    series : [
        {
            name: '全校数学教案',
            type: 'pie',
           // roseType:'radius',
            radius : '45%',
            center: ['50%', '33%'],
            data:[
                {value:28, name:'优秀'},
                {value:299-28-11, name:'通过'},
                {value:11, name:'建议修改'},
                /*{value:335, name:'3'},
                {value:1548, name:'4'},
                {value:1548, name:'5'}*/
            ],
            label: {
            normal: {
                position: 'outside',
                formatter: '{a} :{b} {c}份',
                 textStyle: {
                    color: '',
                    fontSize: 14
                }
            }
        },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        },
        {
            name: '',
            type: 'pie',
            //roseType:'radius',
            radius : '22%',
            center: ['15%', '81%'],
            data:[
                {value:3, name:'优秀'},
                {value:49-3, name:'通过'},
                {value:0, name:'建议修改'},
                /*{value:335, name:'3'},
                {value:1548, name:'4'},
                {value:1548, name:'5'}*/
            ],
            label: {
            normal: {
                position: 'outside',
                formatter: '{c}份',
                 textStyle: {
                    color: '',
                    fontSize: 14
                }
            }
        },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        },
        {
            name: '',
            type: 'pie',
            radius : '22%',
            center: ['29.5%', '81%'],
            data:[
                {value:0, name:'优秀'},
                {value:39-0, name:'通过'},
                {value:0, name:'建议修改'},
                /*{value:335, name:'3'},
                {value:1548, name:'4'}*/
            ],
            label: {
            normal: {
                position: 'outside',
                formatter: '{c}份',
                 offset: [,100],
                 textStyle: {
                    color: '',
                    fontSize: 14
                }
            }
        },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        },
        {
            name: '',
            type: 'pie',
            //roseType:'radius',
            radius : '22%',
            center: ['44%', '81%'],
            data:[
                {value:7, name:'优秀'},
                {value:53-7-4, name:'通过'},
                {value:4, name:'建议修改'},
                /*{value:335, name:'3'},
                {value:1548, name:'4'},
                {value:1548, name:'5'}*/
            ],
            label: {
            normal: {
                position: 'inner',
                formatter: '{c}份',
                 textStyle: {
                    color: '#ffffff',
                    fontSize: 14
                }
            }
        },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        },
        {
            name: '',
            type: 'pie',
            //roseType:'radius',
            radius : '22%',
            center: ['58.5%', '81%'],
            data:[
                {value:10, name:'优秀'},
                {value:58-10-4, name:'通过'},
                {value:4, name:'建议修改'},
                /*{value:335, name:'3'},
                {value:1548, name:'4'},
                {value:1548, name:'5'}*/
            ],
            label: {
            normal: {
                position: 'inner',
                formatter: '{c}份',
                 textStyle: {
                    color: '#ffffff',
                    fontSize: 14
                }
            }
        },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        },
        {
            name: '',
            type: 'pie',
            radius : '22%',
            center: ['73.5%', '81%'],
            data:[
                {value:6, name:'优秀'},
                {value:53-6-2, name:'通过'},
                {value:2, name:'建议修改'},
                /*{value:335, name:'3'},
                {value:1548, name:'4'}*/
            ],
            label: {
            normal: {
                position: 'inner',
                formatter: '{c}份',
                 offset: [,100],
                 textStyle: {
                    color: '#ffffff',
                    fontSize: 14
                }
            }
        },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        },
        {
            name: '',
            type: 'pie',
            //roseType:'radius',
            radius : '22%',
            center: ['88%', '81%'],
            data:[
                {value:2, name:'优秀'},
                {value:47-2-1, name:'通过'},
                {value:1, name:'建议修改'},
                /*{value:335, name:'3'},
                {value:1548, name:'4'},
                {value:1548, name:'5'}*/
            ],
            label: {
            normal: {
                position: 'outside',
                formatter: '{c}份',
                 textStyle: {
                    color: '',
                    fontSize: 14
                }
            }
        },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        },

    ]
};