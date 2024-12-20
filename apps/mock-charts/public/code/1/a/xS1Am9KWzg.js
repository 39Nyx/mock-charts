option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['CSC16110101', 'CSC16110202', 'CSC16110603', 'CSC16110704', 'CSC16110805', 'CSC16110906', 'CSC16111007', 'CSC16111308', 'CSC16111409', 'CSC16111610', 'CSC16111711', 'CSC16111812', 'CSC16112013', 'CSC16112114', 'CSC16112215', 'CSC16112416', 'CSC16112617', 'CSC16112718', ],
        top: 'top',
      orient:'vertical',
        left: 'right'


    },
    grid: {
        left: '3%',
        right: '15%',
        bottom: '3%',
        containLabel: true
    },
    yAxis: {
        type: 'value'
    },
    xAxis: {
        type: 'category',
        data: ['直通率', 'CSC16110202', 'CSC16110603', 'CSC16110704', 'CSC16110805', 'CSC16110906', 'CSC16111007', 'CSC16111308', 'CSC16111409', 'CSC16111610', 'CSC16111711', 'CSC16111812', 'CSC16112013', 'CSC16112114', 'CSC16112215', 'CSC16112416', 'CSC16112617', 'CSC16112718', ]
    },
    series: [{
            name: 'CSC16110101',
            type: 'bar',
            // stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            data: [96.49, ]
        }, {
            name: 'CSC16110202',
            type: 'bar',
            //stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            data: [96.49, ]
        }, {
            name: 'CSC16110603',
            type: 'bar',
            //stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            data: [98.09, ]
        }, {
            name: 'CSC16110704',
            type: 'bar',
            //stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            data: [90.78, ]
        }, {
            name: 'CSC16110805',
            type: 'bar',
            //stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            data: [86.49, ]
        }, {
            name: 'CSC16110906',
            type: 'bar',
            //stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            data: [92.49, ]
        }, 

    ]
};