option = {
    title : {
        text: '2014年中国耕地质量',
        left: 'center',
        textStyle: {

            color: '#1a1b4e',

            fontStyle: 'normal',

            fontSize: 24
        },
        subtext: '数据来源：国土资源部'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{b}: {c}"
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : false,
    series : [
        {
            name:'耕地等级',
            type:'treemap',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        formatter: "{b}"
                    },
                    borderWidth: 1,
                    borderColor: '#ccc'
                },
                emphasis: {
                    label: {
                        show: true
                    },
                    color: '#cc99cc',
                    borderWidth: 3,
                    borderColor: '#996699'
                }
            },
            data:[
                {
                    name: '低等地',
                    itemStyle: {
                        normal: {
                            color: '#99cccc',
                        }
                    },
                    value: 2389.25,
                    children: [
                        {
                            name: '13等地',
                            value: 1125.5
                        },
                        {
                            name: '14等地',
                            value: 765.63
                        },
                        {
                            name: '15等地',
                            value: 498.12
                        }
                    ]
                },
                {
                    name: '中等地',
                    itemStyle: {
                        normal: {
                            color: '#99ccff',
                        }
                    },
                    value: 7138.52,
                    children: [
                        {
                            name: '9等地',
                            value: 1410.69
                        },
                        {
                            name: '10等地',
                            value: 1790.55
                        },
                        {
                            name: '11等地',
                            value: 2045.43
                        },
                        {
                            name: '12等地',
                            value: 1891.85
                        }
                    ]
                },
                {
                    name: '高等地',
                    itemStyle: {
                        normal: {
                            color: '#9999cc',
                        }
                    },
                    value: 3584.6,
                    children: [
                        {
                            name: '5等地',
                            value: 366.48
                        },
                        {
                            name: '6等地',
                            value: 886.22
                        },
                        {
                            name: '7等地',
                            value: 1143.89
                        },
                        {
                            name: '8等地',
                            value: 1188.01
                        }
                    ]
                },
                {
                    name: '优等地',
                    itemStyle: {
                        normal: {
                            color: '#ccff99',
                        }
                    },
                    value: 397.38,
                    children: [
                        {
                            name: '1等地',
                            itemStyle: {
                                normal: {
                                    color: '#ccccff',
                                }
                            },
                            value: 48.84
                        },
                        {
                            name: '2等地',
                            itemStyle: {
                                normal: {
                                    color: '#99ccff',
                                }
                            },
                            value: 59.93
                        },
                        {
                            name: '3等地',
                            itemStyle: {
                                normal: {
                                    color: '#9999cc',
                                }
                            },
                            value: 115.85
                        },
                        {
                            name: '4等地',
                            itemStyle: {
                                normal: {
                                    color: '#99cccc',
                                }
                            },
                            value: 172.76
                        }
                    ]
                }
            ]
        }
    ]
};