var barWidth = 30;
option = {
    grid: {  
        left: '0',  
        bottom: '5%',  
        containLabel: true  
    } ,
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#283b56'
            }
        }
    },
    legend: {
        data:[ 'S2B自营交易额', 'B2B自营交易额', 'B2B平台交易额', '各模式出货量'],
        align: 'left',
        left: 100,
        bottom: 0
    },
    dataZoom: {
        show: false,
        start: 0,
        end: 100
    },
    xAxis: [
        {
            type: 'category',
            data: ['大客户部', '豫南', '豫中', '豫北', '豫东', '豫西', '华北'],
            axisTick: {
                show: false
            },
            axisPointer: {
                type: 'shadow'
            },
            axisLine: {
                lineStyle: {
                    color: '#666'
                }
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            scale: true,
            name: '交易额（元）',
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#666'
                }
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#666'
                }
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#666'
                }
            },
            max: 400,
            min: 0,
            axisLabel: {
                formatter: '{value}万'
            }
        },
        {
            type: 'value',
            name: '出货量',
            scale: true,
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            max: 100,
            min: 0,
            axisLabel: {
                formatter: '{value}吨'
            }
        }
    ],
    series: [
        {
            name:'S2B自营交易额',
            type:'bar',
            barWidth: barWidth,
            barGap: '20%',
            itemStyle:{
                normal:{
                    color:'#a0c0fd'
                }
            },
            data: [290, 200, 180, 160, 150, 200, 180]
        },
        {
            name:'B2B自营交易额',
            type:'bar',
            barWidth: barWidth,
            barGap: '20%',
            itemStyle:{normal:{color:'#9599fd'}},
            data: [190, 100, 80, 95, 88, 80, 95]
        },
        {
            name:'B2B平台交易额',
            type:'bar',
            barWidth: barWidth,
            barGap: '20%',
            itemStyle:{normal:{color:'#fede6a'}},
            data: [90, 110, 180, 25, 10,100,200]
        },
        {
            name:'各模式出货量',
            type:'line',
            itemStyle:{
                normal:{
                    color:'#2cfffe'
                }
            },
            xAxisIndex: 1,
            data: [150, 10, 80, 125, 100, 10, 20],
            symbol: 'circle',
            symbolSize: 10
        },
        {
            name:'各模式出货量',
            type:'line',
            itemStyle:{
                normal:{
                    color:'#2cfffe'
                }
            },
            xAxisIndex: 1,
            data: [[10, 120, 180], [25, 10, 100]],
            symbol: 'circle',
            symbolSize: 10
        }
    ]
};
option.xAxis[1] = {
    type: 'value',
    max: option.xAxis[0].data.length * 100,
    show: false
}
option.series[3].data = option.series[3].data.map((x, i) => {
    // console.log(x, i)
    // return [(i+1) * 100-50-barWidth/2/2-barWidth/2*0.2, x]
    if (i<2) {
        return [i*3, x]
    }
})
// option.series[4].data = option.series[4].data.map((x, i) => {
//     // console.log(x, i)
//     return [(i+1) * 100-50-barWidth/2/2-barWidth/2*0.2, x]
// })









