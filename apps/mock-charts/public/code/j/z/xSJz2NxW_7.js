option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['公司1(初创类)', '公司2(初创类)','公司3(初创类)','公司4(初创类)','公司5(成长类)','公司6(成长类)','公司7(成长类)','公司8(成长类)','公司9(成长类)','公司10(成熟类)']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis:  {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: ['阶段1','阶段2','阶段3']
    },
    series: [
        {
            name: '公司1(初创类)',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [3, 3, 3]
        },
        {
            name: '公司2(初创类)',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [1.5, 1.3, 1]
        },
        {
            name: '公司3(初创类)',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [2, 1.8, 1.9]
        },
        {
            name: '公司4(初创类)',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [2, 2, 3]
        },
        {
            name: '公司5(成长类)',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [4, 5, 5]
        },
        {
            name: '公司6(成长类)',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [2, 4, 5]
        }
        ,
        {
            name: '公司7(成长类)',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [2, 3, 4]
        }
        ,
        {
            name: '公司8(成长类)',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [2, 3, 4]
        }
        ,
        {
            name: '公司9(成长类)',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [2, 3, 4]
        }
        ,
        {
            name: '公司10(成熟类)',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [1, 2, 3]
        }
    ]
};