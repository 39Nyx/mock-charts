option = {
    dataset: {
        source: [
            ['province', 'aqi'],
            ['上海', 11319],
            ['云南', 127462],
            ['内蒙古', 87859],
            ['北京', 17218],
            ['台湾', 24620],
            ['吉林', 90118],
            ['四川', 209214],
            ['天津', 15802],
            ['宁夏', 81658],
            ['安徽', 209663],
            ['山东', 250856],
            ['山西', 190188],
            ['广东', 185260],
            ['广西', 139152],
            ['新疆', 211656],
            ['江苏', 175727],
            ['江西', 116772],
            ['河北', 186112],
            ['河南', 303247],
            ['浙江', 119425],
            ['海南', 96700],
            ['湖北', 207105],
            ['湖南', 143675],
            ['澳门', 8256],
            ['甘肃', 178811],
            ['福建', 87541],
            ['西藏', 55368],
            ['贵州', 49989],
            ['辽宁', 178146],
            ['重庆', 10646],
            ['陕西', 157892],
            ['青海', 58714],
            ['香港', 6967],
            ['黑龙江', 123785]
        ]
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        }
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {},
    series: [{
        type: 'bar'
    }]
};


myChart.on('click', function(param) {
    var seriesIndex = param.seriesIndex;
    var dataIndex = param.dataIndex;
    option.series[seriesIndex].itemStyle = {
        color: function(params) {
            if (dataIndex === params.dataIndex) {
                return 'red'
            }
            return '#ccc'
        }
    }
    myChart.setOption(option)
});