//职称结构取数
var getsjjg = ['高级', '中级', '初级', '无等级'];
var getsjjgrs = [35, 30, 22, 12];
var syjgdata = [];
for (var i = 0; i < getsjjg.length; i++) {
    syjgdata.push({
        name: getsjjg[i],
        value: getsjjgrs[i]
    })
}
var rich = {
    name: {
        color: "#666666",
        fontSize: 14,
        padding: [0, 5],
        fontWeight:'400',
        align: 'right'
    },
    value: {
        color: "#333",
        fontSize: 15,
        padding: [5, 5],
        fontWeight:'500',
        align: 'right'
    },
    percent: {
        color: "#333333",
        align: 'right',
        fontSize: 15,
        fontWeight:'500',
        padding: [0, 5]
    },
    hr: {
        borderColor: '#DFDFDF',
        width: '100%',
        borderWidth: 1,
        height: 0,
    }
}
//职称结构图表
var colorList = ['#4E7BFE', '#6796FD', '#26D080', '#FFC805'];
option = {
    title: {
        text: '职称' + '\n' + '结构',
        x: 'center',
        y: 'center',
        textStyle: {
            color: '#333333',
            fontSize: 16,
            fontWeight: '400'
        }
    },
    series: {
        itemStyle: {
            normal: {
                color: function(params) {
                    return colorList[params.dataIndex]
                }
            }
        },
        type: 'pie',
        //clockWise: false ,
        //roseType: 'radius',
        radius: ['35%', '50%'],
        center: ["50%", "50%"],
        labelLine: {
            normal: {
                length: 20,
                length2: 60,
                lineStyle: {
                    color: '#DFDFDF'
                }
            }
        },
        label: {
            normal: {
                formatter: params => {
                    return (
                        '{name|' + params.name + '}\n{value|' + params.value + '}\n{percent|' + params.percent.toFixed(0) + '%}'
                    );
                },
                rich: rich,
                padding: [0, -5, 0, -5],
            }
        },
        data: syjgdata
    }
};