var data = [70, 34, 60, 78, 69,80,65]
var titlename = ['有定期到账_增持', '有定期到账_减持', '有定期到账_纯减持', '最后一笔定期到账', '无定期到账','仅持有活期类','留存老用户整体'];
var valdata = [683, 234, 234, 523, 345,340]
var myColor = ['#0098d9', '#c12e34', '#aaaaaa', '#e87c25', '#00ad4e','#6AC5EC','#ffc000'];
option = {
    backgroundColor: '#ffffff',
    xAxis: {
        show: true
    },
    yAxis: [{
        show: true,
        data: titlename,
        inverse: true,
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            //color: '#fff',
            formatter: function(value, index) {
                return [
                    '{lg|' + (index + 1) + '}' + '{title|' + value + '} '
                ].join('\n')
            },
            rich: {
                lg: {
                    //backgroundColor: '#339911',
                    color: '#fff',
                    borderRadius: 15,
                    // padding: 5,
                    align: 'center',
                    width: 15,
                    height: 15
                },
            }
        },


    }, {
        show: true,
        inverse: true,
        data: valdata,
        axisLabel: {
            textStyle: {
                fontSize: 12,
                //color: '#fff',
            },
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },

    }],
    series: [{
        name: '条',
        type: 'bar',
        yAxisIndex: 0,
        markLine: {
                data: [{
                    type: 'average',
                    name: '平均值',
                    color:'00ad4e'
                }]
            },
        data: data,
        barWidth: 50,
        itemStyle: {
            normal: {
                barBorderRadius: 30,
                color: function(params) {
                    var num = myColor.length;
                    return myColor[params.dataIndex % num]
                },
            }
        },
        label: {
            normal: {
                show: true,
                position: 'inside',
                formatter: '{c}%'
            }
        },
    }, ]
};