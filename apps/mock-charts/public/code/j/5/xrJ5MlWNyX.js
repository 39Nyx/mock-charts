option = {
   
    "legend": {
        show: false,
    },
    "grid": {
        "top": 24,
        "left": "2%",
        "right": 20,
        "bottom": 30,
        "containLabel": true,
        "borderWidth": 0.5
    },
    series: [
        {
            name: '',
            type: 'funnel',
            top:4,
            left: '5%',
            bottom: 8,
            width: '70%',
            gap: 2,
            minSize: '0%',
            maxSize: '100%',
            label: {
                normal: {
                    position: 'right',
                    formatter: function(params){
                        return params.name + ': '+params.value + '%'
                    }
                }
            },
            labelLine: {
                normal: {
                    length: 20,
                    position: 'left',
                    lineStyle: {
                        width: 0
                    }
                }
            },
            itemStyle: {
                normal: {
                   borderWidth: 0
                }
            },
            data: [
                {value: 60, name: '下单', 
                    itemStyle: {
                        normal: {
                            color: 'rgb(39,205,242)'
                        }
                    },
                },
                {value: 40, name: '支付',
                     itemStyle: {
                        normal: {
                            color: 'rgb(31,145,175)'
                        }
                    }
                },
                {value: 20, name: '配送',
                     itemStyle: {
                        normal: {
                            color: 'rgb(26,89,116)'
                        }
                    }
                }
            ]
        },
        {
            name: '',
            type: 'funnel',
            top:4,
            left: '5%',
            bottom: 8,
            width: '70%',
            gap: 2,
            label: {
                normal: {
                    position: 'inside',
                    formatter: '{c}%',
                    textStyle: {
                        color: '#fff'
                    }
                }
              
            },
            labelLine: {
                normal: {
                  
            
                }
            },
            itemStyle: {
                normal: {
                    color: 'transparent',
                    borderWidth:0,
                    opacity: 0
                }
            },
            data: [
                {value: 60, name: '下单'},
                {value: 40, name: '支付'},
                {value: 20, name: '配送'},
            ]
        },
        {
            top:0,
            
            name: '',
            type: 'funnel',
            left: '4%',
            bottom: 1,
            width: '72%',
            minSize: '0%',
            maxSize: '100%',
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            itemStyle: {
                normal: {
                   color: 'transparent',
                    borderWidth:1,
                    borderColor: '#ddd'
                }
            },
            data: [
                {value: 100, name: 'border'}
            ]
        },
    ]
};
