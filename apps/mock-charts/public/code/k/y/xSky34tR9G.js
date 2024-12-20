options = [{
    backgroundColor:'#FFF',
    title:{
        text:'食品生产环节抽检不合格率'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
    },
    legend: {
        /*orient: 'vertical',
        left: 50,
        top:30,*/
        data: ['食品生产环节抽检不合格率']
    },
    series: [{
        name: '食品生产环节抽检不合格率',
        type: 'pie',
        radius: ['35%', '50%'],
        //center:['15%','22%'],
        color:'#33CCFF',
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 8005,
            name: '合格批次数',
            
            label: {
                normal: {
                    formatter: '{d} %',
                    textStyle: {
                        fontSize: 14
                    }
                }
            }
        }, {
            value:888 ,
            name: '不合格批次数',
            label: {
                normal: {
                    formatter: '\n食品生产环节\n抽检不合格率',
                    textStyle: {
                        color: '#555',
                        fontSize: 6
                    }
                }
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
},{
    backgroundColor:'#FFF',
    title:{
        text:'食品流通环节抽检不合格率'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
    },
    legend: {
        /*orient: 'vertical',
        left: 50,
        top:30,*/
        data: ['食品流通环节抽检不合格率']
    },
    series: [{
        name: '食品流通环节抽检不合格率',
        type: 'pie',
        radius: ['35%', '50%'],
        //center:['15%','22%'],
        color:'#33CCFF',
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 8005,
            name: '合格批次',
            
            label: {
                normal: {
                    formatter: '{d} %',
                    textStyle: {
                        fontSize: 18
                    }
                }
            }
        }, {
            value:523 ,
            name: '不合格批次',
            label: {
                normal: {
                    formatter: '\n食品流通环节\n抽检不合格率',
                    textStyle: {
                        color: '#555',
                        fontSize: 10
                    }
                }
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
},{
    backgroundColor:'#FFF',
    title:{
        text:'餐饮服务环节抽检不合格率'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
    },
    legend: {
        /*orient: 'vertical',
        left: 50,
        top:30,*/
        data: ['餐饮服务环节抽检不合格率']
    },
    series: [{
        name: '餐饮服务环节抽检不合格率',
        type: 'pie',
        radius: ['35%', '50%'],
        //center:['15%','22%'],
        color:'#33CCFF',
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 8005,
            name: '合格批次',
            
            label: {
                normal: {
                    formatter: '{d} %',
                    textStyle: {
                        fontSize: 18
                    }
                }
            }
        }, {
            value:400 ,
            name: '不合格批次',
            label: {
                normal: {
                    formatter: '\n餐饮服务环节\n抽检不合格率',
                    textStyle: {
                        color: '#555',
                        fontSize: 10
                    }
                }
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
}];