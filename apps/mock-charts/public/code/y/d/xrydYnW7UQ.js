option = {
    title: {
        text: '一把尺子',
        subtext: "花自飘凌水自流"
    },
    color: [],
    xAxis: [
    {
        type: 'value',
        scale: true,
        interval: 1,
        offset:-300,
        axisTick: {
            inside: true
        },
        axisLabel: {
            inside: true,
            interval: 1,
        },
        splitLine: {
            show: false
        }
    }, 
    {
        type: 'value',
        scale: true,
        interval: 60,
         offset:-300,
        axisTick: {
            inside: true
        },
        axisLabel: {
            inside: true,
            interval: 1,
        },
        splitLine: {
            show: false
        }
    }, 
    
    
    ],
    yAxis: {
        type: 'category',
        axisLabel: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']
    },
    series: [{
        name: '2011年',
        type: 'bar',
        data: [1, 2.5, 0, 4, 5, 6]
    },{
        name: '2012年',
        type: 'bar',
        xAxisIndex:1,
        data: [100,200,300,400,500,600]
    }]
};