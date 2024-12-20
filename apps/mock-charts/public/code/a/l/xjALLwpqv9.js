options = [{
    backgroundColor: '#ffff',
    "title": {
        "text": "开发时间成本分析",
        "left": "center",
        "textStyle": {
            "color": "#000",
            "fontSize": "24",
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
            color: '#fafafa'
        }

    },
    legend: {
        x: '10%',
        top: '12%',
        data: ['组件开发时间', 'FE开发时间', '样式优化时间', '联调时间(固定值)']
    },

    calculable: true,
    yAxis: [{
        name: '类别',
        type: 'category',
        data: ['方案1', '方案2'],
        "splitLine": {
            "show": false
        },
        "axisLine": {
            lineStyle: {
                color: '#333'
            }
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,
        },
        "splitArea": {
            "show": false
        },

        "axisLabel": {
            show: true,
            "interval": 0,
            textStyle: {
                color: "#000",
                fontWeight: '700',
                fontSize: "20"
            }
        }
    }],
    xAxis: [{
        name: '单位(天)',
        type: 'value',
        "axisLine": {
            lineStyle: {
                color: '#333'
            }
        },
        "splitLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "splitArea": {
            "show": false
        },
        "axisLabel": {
            show: true,
            "interval": 0,
            textStyle: {
                color: "#000",
                fontSize: "15"
            }
        },


        "axisLabel": {
            show: true,
            "interval": 0,
            textStyle: {
                color: "#000",
                fontSize: "15"
            }
        },

    }],

    series: [{
            name: '组件开发时间',
            type: 'bar',
            barMaxWidth: 80,
            stack: '总量',
            itemStyle: {
                normal: {

                    label: {
                        show: true,
                        position: 'inside',
                        textStyle: {
                            color: "#fff",
                            fontSize: "15"
                        }
                    },
                    color: '#f50'
                }
            },
            data: [40, 3]
        },
        {
            name: '样式优化时间',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {
                    textStyle: {
                        color: "#fff",
                        fontSize: "15"
                    },
                    label: {
                        show: true,
                        position: 'inside',
                        textStyle: {
                            color: "#fff",
                            fontSize: "15"
                        }
                    },
                    color: '#9254de'
                }
            },
            data: [3, 1]
        },
        {
            name: 'FE开发时间',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {
                    textStyle: {
                        color: "#fff",
                        fontSize: "15"
                    },
                    label: {
                        show: true,
                        position: 'inside',
                        textStyle: {
                            color: "#fff",
                            fontSize: "15"
                        }
                    },
                    color: '#05BFF1'
                }
            },
            data: [12, 11]
        },
        {
            name: '联调时间(固定值)',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {
                    textStyle: {
                        color: "#fff",
                        fontSize: "15"
                    },
                    label: {
                        show: true,
                        position: 'inside',
                        textStyle: {
                            color: "#fff",
                            fontSize: "15"
                        }
                    },
                    color: '#52c41a'
                }
            },
            data: [5, 5]
        }
    ]
}];