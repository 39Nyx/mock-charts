
option = {
        title: {
        text: 'P2解决趋势图'
    },
    tooltip: {
       trigger: 'axis',
                      
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },

    },
    
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data:['解决数','创建数']
    },
    xAxis: [
        {
            type: 'category',
            data: ['1周','2周','3周','4周','5周','6周','7周','8周','9周','10周','11周','12周']
        }
    ],
    yAxis: [
        {
            type: 'value',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
                formatter: '{value} 个'
            }
        }
    ],
    series: [
        {
            name:'解决数',
            type:'bar',
            data:[18, 16, 17, 23, 25, 76, 13, 121, 42, 40, 16, 10],
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
        },
        {
            name:'创建数',
            type:'bar',
            data:[14, 15, 19, 36, 38, 60, 17, 18, 41, 18, 6, 5],
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
        }

    ]
};


if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
