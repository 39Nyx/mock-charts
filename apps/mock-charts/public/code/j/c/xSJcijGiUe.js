option = {
    legend: {
        x: '370px',
        y: '35px',
        data: ['所在区域']
    },
    tooltip: {
        trigger: 'item',
        formatter: '{b}：{c}人'
    },
    grid: {
        left: '6%',
        right: '2%',
        bottom: '0%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['吴泾', '工业区',
            '七宝', '虹桥',
            '江川路'
        ],
        axisTick: {
            show: false
        }
    },
    yAxis: {
        name: '人数（人）',
        nameLocation: 'end',
        nameGap: 20,
        axisTick: {
            show: false
        }
    },
    series: [{
        name: '所在区域',
        type: 'bar',
        itemStyle: {
            normal: {　　　　　　　　　　　　　　 //好，这里就是重头戏了，定义一个list，然后根据所以取得不同的值，这样就实现了，
                color: function(params) {
                    // build a color map as your need.
                    var colorList = [
                        '#C1232B', '#B5C334', '#FCCE10', '#E87C25', '#27727B',
                        '#FE8463', '#9BCA63', '#FAD860', '#F3A43B', '#60C0DD',
                        '#D7504B', '#C6E579', '#F4E001', '#F0805A', '#26C0C0'
                    ];
                    return colorList[params.dataIndex]
                },
                　　　　　　　　　　　　　　 //以下为是否显示，显示位置和显示格式的设置了
                label: {
                    show: true,
                    position: 'top',
                    //                             formatter: '{c}'
                    formatter: '{b}\n{c}'
                }
            }
        },
        data: [56, 52, 23, 32, 26],
        barMaxWidth: '40px',
        label: {
            normal: {
                show: true,
                position: 'top',
                formatter: '{c}'
            }
        }
    }]
};