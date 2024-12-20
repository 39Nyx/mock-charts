option = {
    title: {
        text: '报道量变化图',
        subtext: '纯属虚构'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    toolbox: {
        show: true,
        feature: {
            saveAsImage: {}
        }
    },
    xAxis:  {
        type: 'category',
        boundaryGap: false,
        data: ['7月20日', '7月24日', '8月11日', '8月20日', '9月5日', '10月1日', '10月15日', '11月11日', '', '11月22日', '11月23日', '12月3日', '12月10日',]
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} '
        },
        axisPointer: {
            snap: true
        }
    },
    visualMap: {
        show: false,
        dimension: 0,
        pieces: [{
            lte: 6,
            color: 'green'
        }, {
            gt: 6,
            lte: 8,
            color: 'green '
        }, {
            gt: 8,
            lte: 14,
            color: 'green'
        }, {
            gt: 14,
            lte: 17,
            color: 'green '
        }, {
            gt: 17,
            color: 'green'
        }]
    },
    series: [
        {
            name:'报道量',
            type:'line',
            smooth: true,
            data: [251000, 254000, 224000, 189000, 204000, 221000, 210000, 217000, 211000, 219000, 216000, 210000],
            markArea: {
                data: [ [{
                    name: '出现',
                    xAxis: '7月20日'
                }, {
                    xAxis: '7月24日'
                }], [{
                    name: '反转',
                    xAxis: '11月22日'
                }, {
                    xAxis: '11月23日'
                }] ]
            }
        }
    ]
};
