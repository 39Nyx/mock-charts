option = {
    series: [{
        name: '缴费分析',
        type: 'pie',
        radius: ['50%', '75%'],
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: false,
                position: 'center'
            },
            emphasis: {
                show: true,
                textStyle: {
                    fontSize: '15',
                    fontWeight: 'bold'
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: 30,
            name: '微信'
        }, {
            value: 25,
            name: '支付宝'
        }, {
            value: 22,
            name: '现金'
        }, {
            value: 17,
            name: '银联'
        }, {
            value: 7,
            name: '其他'
        }],
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};

var count = 0;
app.timeTicket = setInterval(function() {
    myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0
    });
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: (count++) % 5
    });
}, 1000);