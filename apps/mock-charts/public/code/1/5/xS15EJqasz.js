option = {
    backgroundColor:'#fff',
     tooltip: { },
    series: [{
        name: '食品生产环节抽检不合格率',
        type: 'pie',
        radius: ['18%', '22%'],
        center:['10%','50%'],
        color:'#00CDCD',
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 79,
            name: '生产环节不合格批次数',
            label: {
                normal: {
                    formatter: '{d} %',
                    textStyle: {
                        fontSize: 18
                    }
                }
            },
            tooltip:{
                 trigger: 'item',
                 formatter: "{a}<br/>=({b}/不合格批次数)*100%<br/> 不合格批次数 : {c}"
            }
            
        }, {
            value: 59,
            name: '生产环节合格批次数',
            label: {
                normal: {
                    formatter: '\n食品生产环节\n抽检不合格率',
                    textStyle: {
                        color: '#555',
                        fontSize: 13
                    }
                }
            },
            tooltip:{
                 trigger: 'item',
                 formatter: "{a}<br/>=(生产环节不合格批次数/不合格批次数)*100%<br/> {b} : {c}"
            },
            itemStyle: {
                normal: {
                    color: '#aaa'
                },
                emphasis: {
                    color: '#aaa'
                }
            },
        }]
    },{
        name: '食品流通环节抽检不合格率',
        type: 'pie',
        radius: ['18%', '22%'],
        center:['30%','50%'],
        color:'#00CDCD',
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 79,
            name: '流通环节不合格批次数',
            label: {
                normal: {
                    formatter: '{d} %',
                    textStyle: {
                        fontSize: 18
                    }
                }
            },
            tooltip:{
                 trigger: 'item',
                 formatter: "{a}<br/>=({b}/不合格批次数)*100%<br/> 不合格批次数 : {c}"
            }
            
        }, {
            value: 59,
            name: '流通环节合格批次数',
            label: {
                normal: {
                    formatter: '\n食品流通环节\n抽检不合格率',
                    textStyle: {
                        color: '#555',
                        fontSize: 13
                    }
                }
            },
            tooltip:{
                 trigger: 'item',
                 formatter: "{a}<br/>=(流通环节不合格批次数/不合格批次数)*100%<br/> {b} : {c}"
            },
            itemStyle: {
                normal: {
                    color: '#aaa'
                },
                emphasis: {
                    color: '#aaa'
                }
            },
        }]
    },{
        name: '餐饮服务环节抽检不合格率',
        type: 'pie',
        radius: ['18%', '22%'],
        center:['50%','50%'],
        color:'#00CDCD',
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 79,
            name: '餐饮服务不合格批次数',
            label: {
                normal: {
                    formatter: '{d} %',
                    textStyle: {
                        fontSize: 18
                    }
                }
            },
            tooltip:{
                 trigger: 'item',
                 formatter: "{a}<br/>=({b}/不合格批次数)*100%<br/> 不合格批次数 : {c}"
            }
            
        }, {
            value: 59,
            name: '餐饮服务合格批次数',
            label: {
                normal: {
                    formatter: '\n餐饮服务环节\n抽检不合格率',
                    textStyle: {
                        color: '#555',
                        fontSize: 13
                    }
                }
            },
            tooltip:{
                 trigger: 'item',
                 formatter: "{a}<br/>=(餐饮服务不合格批次数/不合格批次数)*100%<br/> {b} : {c}"
            },
            itemStyle: {
                normal: {
                    color: '#aaa'
                },
                emphasis: {
                    color: '#aaa'
                }
            },
        }]
    }]
};