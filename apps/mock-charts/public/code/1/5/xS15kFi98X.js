app.title = '世界人口总量 - 条形图';

option = {
    title: {
        text: '世界人口总量',
        subtext: '数据来自网络'
    },
    // tooltip: {
    //     trigger: 'axis',
    //     axisPointer: {
    //         type: 'shadow'
    //     }
    // },
    legend: {
        data: ['2011年', '2012年']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        axisLine:{
            show: false
        },
        axisTick:{
            show: false
        },
        splitLine:{
            show: false
        }
    },
    yAxis: {
        type: 'category',
        axisLine:{
            show: false
        },
        axisTick:{
          show: false  
        },
        data: ['巴西','印尼','美国','印度','中国','世界人口(万)']
    },
    series: [
        {
            name: '2011年',
            type: 'bar',
            barGap: '-100%',
            data: [681807, 681807, 681807, 681807, 681807, 681807],
            itemStyle:{
                barBorderRadius: 50,
                color: 'rgba(0, 0, 255, 0.3)'
            }
        },
        {
            name: '2012年',
            type: 'bar',
            data: [134141, 134141, 134141, 121594, 134141, 681807],
            itemStyle:{
                barBorderRadius: 50
            }
        }
    ]
};