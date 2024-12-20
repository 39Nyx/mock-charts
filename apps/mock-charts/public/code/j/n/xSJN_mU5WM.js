option = {
    title: {
        text: '2017上半年电影内地总票房漏斗图',
        subtext: '数据来源：国家电影专资办'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        feature: {
            dataView: {
                readOnly: false
            },
            restore: {},
            saveAsImage: {}
        }
    },
    legend: {
        data: ['内地总票房', 'Top10省（市）总票房', '北上广深总票房', '广东省票房'],
        left:'center',
        right: '66%',
        bottom: '90%',
    },
    calculable: true,
    series: [{
        name: '漏斗图',
        type: 'funnel',
        left: '10%',
        top: 60,
        //x2: 80,
        bottom: 60,
        width: '80%',
        // height: {totalHeight} - y - y2,
        min: 0,
        max: 100,
        minSize: '0%',
        maxSize: '100%',
        sort: 'descending',
        gap: 2,
        label: {
            normal: {
                show: true,
                position: 'inside'
            },
            emphasis: {
                textStyle: {
                    fontSize: 20
                }
            }
        },
        labelLine: {
            normal: {
                length: 10,
                lineStyle: {
                    width: 1,
                    type: 'solid'
                }
            }
        },
        itemStyle: {
            normal: {
                borderColor: '#fff',
                borderWidth: 1
            }
        },
        data: [{
            value: 64.75,
            name: 'Top10省（市）总票房'
        }, {
            value: 26.26,
            name: '北上广深总票房'
        }, {
            value: 14.32,
            name: '广东省票房'
        }, {
            value: 100,
            name: '内地总票房'
        }]
    }]
};