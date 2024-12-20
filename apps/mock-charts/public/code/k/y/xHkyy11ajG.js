option = {
    backgroundColor:'#fff',
    tooltip: {},
    series: [{
        name: '投诉受理率',
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
            name: '投诉受理信息数',
            
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
                 formatter: "{a}=({b}/投诉举报信息数)*100%<br/>投诉受理信息数 : {c}"
            }
        }, {
            value: 59,
            name: '投诉不予受理数',
            label: {
                normal: {
                    formatter: '\n投诉受理率',
                    textStyle: {
                        color: '#555',
                        fontSize: 12
                    }
                }
            },
            tooltip:{
                 trigger: 'item',
                 formatter: "{a}=(投诉受理信息数/投诉举报信息数)*100%<br/>{b} : {c}"
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
        name: '投诉立案率',
        type: 'pie',
        radius: ['18%', '22%'],
        center:['30%','50%'],
        color:'#FF4500',
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 38,
            name: '投诉立案数',
            
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
                 formatter: "{a}=({b}/投诉举报受理信息数)*100%<br/> 投诉立案数 : {c}"
            }
        }, {
            value: 41,
            name: '投诉不予立案信息数',
            label: {
                normal: {
                    formatter: '\n投诉立案率',
                    textStyle: {
                        color: '#555',
                        fontSize: 12
                    }
                }
            },
             tooltip:{
                 trigger: 'item',
                 formatter: "{a}=(投诉立案数/投诉举报受理信息数)*100%<br/>  {b}: {c}"
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