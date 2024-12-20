option = {
    title: {
        text: '多资产单指标动态示意图',
    },
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
        data:['gei1-1', 'gei1-2', 'gei1-3']
    },
    toolbox: {
        show: true,
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    dataZoom: {
        show: false,
        start: 0,
        end: 100
    },
    xAxis: [
        {
            name:'时间',
            type: 'category',
            boundaryGap: false,
            data: (function (){
                var now = new Date();
                var res = [];
                var len = 10;
                while (len--) {
                    res.unshift(now.toLocaleString().replace(/^\D*/,''));
                    now = new Date(now - 2000);
                }
                return res;
            })()
        }
    ],
    yAxis: [
        {
            type: 'value',
            scale: true,
            name: '字节数',
            max: 30,
            min: 0,
            boundaryGap: false
        }
    ],
    series: [
        {
            name:'gei1-1',
            type:'line',
                        markLine: {
                label: {
                    normal: {
                        formatter: '闲'
                    }
                },
                data: [{
                    yAxis: '6'
                }]
                
            },
            data:(function (){
                var res = [];
                var len = 10;
                while (len--) {
                    res.push((Math.random()*10 + 5).toFixed(1) - 0);
                }
                return res;
            })()
        },
        {
            name:'gei1-2',
            type:'line',
                        markLine: {
                label: {
                    normal: {
                        formatter: '忙'
                    }
                },
                data: [{
                    yAxis: '14'
                }]
                
            },
            data:(function (){
                var res = [];
                var len = 0;
                while (len < 10) {
                    res.push((Math.random()*10 + 5).toFixed(1) - 0);
                    len++;
                }
                return res;
            })()
        },
        {
            name:'gei1-3',
            type:'line',
            data:(function (){
                var res = [];
                var len = 0;
                while (len < 10) {
                    res.push((Math.random()*10 + 5).toFixed(1) - 0);
                    len++;
                }
                return res;
            })()
        }
    ]
};

app.count = 11;
setInterval(function (){
    axisData = (new Date()).toLocaleString().replace(/^\D*/,'');

    var data0 = option.series[0].data;
    var data1 = option.series[1].data;
    var data2 = option.series[2].data;
    data0.shift();
    data0.push((Math.random()*10 + 5).toFixed(1) - 0);
    data1.shift();
    data1.push((Math.random() * 10 + 5).toFixed(1) - 0);
    data2.shift();
    data2.push((Math.random() * 10 + 5).toFixed(1) - 0);
    option.xAxis[0].data.shift();
    option.xAxis[0].data.push(axisData);


    myChart.setOption(option);
}, 1100);