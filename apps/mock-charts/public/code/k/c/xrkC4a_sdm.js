var data = [70, 34, 60, 78, 69,56,85,43,92]
var titlename = ['福州市', '漳州市', '厦门市', '泉州市', '南平市','莆田市','三明市','宁德市','龙岩市'];
var valdata = [683, 234, 234, 523, 345]
var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6','	#00FF7F','#F4A460','	#FA8072','	#DAA520'];
option = {
    backgroundColor: '#0e2147',
    xAxis: {
        show: false
    },
    grid:{
        width:"40%"
    }
,    yAxis: [{
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
            color: '#fff',
            formatter: function(value, index) {
                return [
                    '{lg|' + (index + 1) + '}' + '{title|' + value + '} '
                ].join('\n')
            },
            rich: {
                lg: {
                    backgroundColor: '#339911',
                    color: '#fff',
                    borderRadius: 15,
                    // padding: 5,
                    align: 'center',
                    width: 15,
                    height: 15
                },
            }
        },


    }, 
    {
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
          show:false
        },


    }, ],
    series: [{
        name: '废水',
        type: 'bar',
        yAxisIndex: 0,
        data: data,
        barWidth: 20,
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
    },
    {
        name: '废气',
        type: 'bar',
        yAxisIndex: 0,
        data: data,
        barWidth: 20,
        barGap:"100%",
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
    }
    , {
        name: '框',
        type: 'bar',
        yAxisIndex: 1,
       // barGap: '-115%',
        data: [100, 100, 100, 100, 100,100,100,100,100],
        barWidth: 25,
        itemStyle: {
            normal: {
                color: 'none',
                borderColor: '#00c1de',
                borderWidth: 3,
                barBorderRadius: 15,
            }
        }
    }, {
        name: '框2',
        type: 'bar',
        yAxisIndex: 1,
       barGap: '60%',
        data: [100, 100, 100, 100, 100,100,100,100,100],
        barWidth: 25,
        itemStyle: {
            normal: {
                color: 'none',
                borderColor: '#00c1de',
                borderWidth: 3,
                barBorderRadius: 15,
            }
        }
    }, ]
};