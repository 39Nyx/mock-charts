var obj = {
    totalRequest: 123456,
    totalIDRequest: 123456,
    totalResponse: 123456,
    totalLocaledUser: 123456,
    localRate: "1.2%",
    userMatchRate: "0.2%"
}


option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}%",
        show: false
    },
    legend: {
        data: ['访问', '点击', '总请求次数'],
        show: false
    },
    grid: {
        /*[
            {x: '7%', y: '7%', width: '38%', height: '38%'},
            {x2: '7%', y: '7%', width: '38%', height: '38%'},
            {x: '7%', y2: '7%', width: '38%', height: '38%'}
        ]*/
        bottom: 1000,
        top: 500
    },
    calculable: true,
    series: [{
        name: '漏斗图',
        type: 'funnel',
        left: '5%',
        top: 0,
        //x2: 80,
        //bottom: -290,
        width: '30%',
        // height: {totalHeight} - y - y2,
        min: 40,
        max: 100,
        minSize: '20%',
        maxSize: '100%',
        sort: 'descending',
        gap: 10,
        label: {
            normal: {
                show: true,
                position: 'inside',
                color: "#394256"
            },
            emphasis: {
                textStyle: {
                    //fontSize: 20
                }
            }
        },
        itemStyle: {
            normal: {
                borderColor: '#3598FE',
                borderWidth: 2
            }
        },
        xAxisIndex: 0,
        yAxisIndex: 0,

        data: [{
            value: 60,
            name: '访问',
            label: {
                normal: {
                    color: "#fff"
                }
            }
        }, {
            value: 80,
            name: '点击'
        }, {
            value: 100,
            name: '总请求次数',
            label: {
                normal: {
                    show: true,
                    formatter: [
                        '{term|' + obj.totalRequest + '} ',
                        'red border and grey background.'
                    ].join('\n'),
                    backgroundColor: '#eee',
                    // borderColor: '#333',
                    fontSize: 14,
                    color: "#394256",
                    lineHeight: 30,
                    rich: {
                        term: {
                            fontSize: 18,
                            color: 'rgb(199,86,83)'
                        },
                        fregment1: {
                            backgroundColor: '#000',
                            color: 'yellow',
                            padding: 5
                        },
                        fregment2: {
                            backgroundColor: '#339911',
                            color: '#fff',
                            borderRadius: 15,
                            padding: 5
                        }
                    }
                }
            }
        }],
        color: ["#3598FE", "transparent", "transparent", "transparent"],
    }, {
        name: '漏斗图',
        type: 'funnel',
        left: '30%',
        top: -197,
        //x2: 80,
        bottom: 265,
        width: '30%',
        // height: {totalHeight} - y - y2,
        min: 40,
        max: 100,
        grid: {
            top: "50%"
        },
        minSize: '20%',
        maxSize: '100%',
        sort: 'ascending',
        gap: 10,
        label: {
            normal: {
                show: true,
                position: 'inside',
                color: "#394256"
            },
            emphasis: {
                textStyle: {
                    //fontSize: 20
                }
            }
        },
        labelLine: {
            normal: {
                length: 10,
                lineStyle: {
                    width: 1,
                    type: 'solid'
                }
            }
        },
        itemStyle: {
            normal: {
                borderColor: '#3598FE',
                borderWidth: 1
            }
        },
        data: [{
            value: 60,
            name: '访问',
            label: {
                normal: {
                    color: "#fff"
                }
            },
            silent: true
        }, {
            value: 80,
            name: '点击',
            tooltip: {
                show: false
            }
        }, {
            value: 100,
            name: '总请求次数'
        }],
        color: ["#3598FE", "transparent", "transparent", "transparent"],
    }]
};