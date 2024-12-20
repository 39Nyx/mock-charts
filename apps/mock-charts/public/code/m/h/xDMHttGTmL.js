option = {
    
    color: ['#3398DB'],
    title: {
        text: '本周告警量',
        textStyle: {
             color: '#deeaaa',
            fontSize: 16,
             fontWeight :'bold',
        }
    },
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
        max: 100,
        interval: 20,
        axisLabel: {
            formatter: '{value}',
            textStyle: {
               color: '#3e4956',
                fontSize: 12,
                
            }
        }
    },
    xAxis: {
        type: 'category',
        axisTick: {
            show: false
        },
        data: ['个人网银', '对公网银', '手机银行', '瑶瑶缴费', '直销银行'],
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
        barWidth: '20',
        // barGap: '50%',
         itemStyle: {
                normal: {
                    color: '#90f978'
                }
            },
        label: {
            normal: {
                show: false,
               
                
            }
        },
        data: [85, 76, 43, 31, 24]
    }]
};