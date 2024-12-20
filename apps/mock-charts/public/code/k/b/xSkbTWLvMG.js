app.title = '“榆林产妇坠楼事件”网民话题分析图 - 条形图';

option = {
    title: {
        text: '“榆林产妇坠楼事件”网民话题分析图',
        subtext: '数据来自网络'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['2017年']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['关注女性群体的人身权益1%','期待完善医疗法律法规2.3%','质疑家属拒绝剖腹产32.75','建议推广无痛分娩0.3%','讨论责任归属42%','其他21.7%']
    },
    series: [
        {
            name: '2017年',
            type: 'bar',
            data: [3, 7, 98,1, 126, 65]
        }
    ]
};