option = {
    
    color: ['#3398DB'],
    // title: {
    //     text: '本周告警量',
    //     textStyle: {
    //          color: '#deeaaa',
    //         fontSize: 16,
    //          fontWeight :'bold',
    //     }
    // },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: "{b} <br> 合格率: {c}"
    },
    /*legend: {
        data: [date]
    },*/
    grid: {
        left: '4%',
        right: '4%',
        bottom: '2%',
        containLabel: true
    },
    yAxis: {
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
        },
        boundaryGap: [0, 0.01],
        min: 0,
        max: 50,
        interval: 10,
        axisLabel: {
            formatter: '{value}',
            textStyle: {
               color: '#bbbecd',
                fontSize: 12,
                
            }
        },
        splitLine: {
            lineStyle: {
                color: '#263477'
            }
        }
    },
    xAxis: {
        type: 'category',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
        },
        data: ['00', '01', '02', '03', '04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','(时)',],
        axisLabel: {
            show: true,
            interval: 0,
            rotate: 0,
            margin: 10,
            inside: false,
            textStyle: {
                color: '#3e4956',
                fontSize: 12,
                // fontWeight: 'bold'
            }
        }
    },
    series: [{
        type: 'bar',
        barWidth: '6',
        // barGap: '50%',
         itemStyle: {
                normal: {
                    color: '#ff2a00'
                }
            },
        label: {
            normal: {
                show: false,
               
                
            }
        },
        data: [22, 32, 22, 22, 14,22, 32, 22, 22, 14,22, 32, 22, 22, 14,22, 32, 22, 22, 14,22, 32, 22, 22,]
    }]
};