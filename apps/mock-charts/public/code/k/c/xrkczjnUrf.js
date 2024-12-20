option = {

    tooltip : {
        trigger: 'axis'
    },
legend: {
        data:['变电站','线路']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '6%',
        containLabel: true
    },
    xAxis : [
        {axisLabel: {
            textStyle: {
                "fontSize": 20
            },
            show: true
        },
            type : 'category',
            boundaryGap : false,
            data : ['2014年','2015年','2016年','2017年','2018年']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {itemStyle: {
            normal: {
                color: '#76EE00',
                label: {
                    //show: false,
                    textStyle: {
                        color: '#000000',
                        fontSize: 16
                    }
                },
                areaStyle: {
                    type: 'default'
                }
            }
        },
            name:'变电站',
            type:'line',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: {normal: {}},
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        { itemStyle: {
            normal: {
                color: '#6495ED',
                label: {
                    //show: false,
                    textStyle: {
                        color: '#000000',
                        fontSize: 16
                    }
                },
                areaStyle: {
                    type: 'default'
                }
            }
        },
            name:'线路',
            type:'line',
            stack: '总量',
            label: {
                normal: {
                    show: true
                   // position: 'top'
                }
            },
            areaStyle: {normal: {}},
            data:[220, 182, 191, 234, 290, 330, 310]
        }
    ]
};
