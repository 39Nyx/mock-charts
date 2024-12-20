var data = [70, 34, 60, 78, 69,80]
var titlename = ['新用户', '首投老用户', '留存用户', '回流用户', '流失用户','整体'];
var valdata = [683, 234, 234, 523, 345]
var myColor = ['#c12e34', '#e87c25', '#0098d9', '#ffc000', '#aaaaaa','#6AC5EC'];
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