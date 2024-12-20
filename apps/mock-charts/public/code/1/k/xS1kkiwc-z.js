option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    series: [{
        type: 'line',
        data: [220, 182, 191, 234, 290, 330, 310]
    }]
}; < !DOCTYPE html >
    <
    html >
    <
    head >
    <
    meta charset = "utf-8" >
    <
    title > ECharts < /title>
    <!-- 引入 echarts.js -->
    <
    script src = "echarts.min.js" > < /script> <
    /head> <
    body >
    <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
    <
    div id = "main"
style = "width: 1000px;height:600px;" > < /div> <
    script type = "text/javascript" >
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));

var option = {
        // 白色背景
        backgroundColor: '#FFFFFF',
        textStyle: {
            // 蓝色字体
            color: 'rgba(0, 0, 255, 0.9)'
        },
        series: [{
            name: '各个电商平台销售额占比',
            type: 'pie',
            radius: '35%',
            data: [{
                value: 40,
                name: '天猫'
            }, {
                value: 37,
                name: '京东'
            }, {
                value: 30,
                name: '苏宁易购'
            }, {
                value: 28,
                name: '1号店'
            }, {
                value: 35,
                name: '亚马逊'
            }],
            roseType: 'angle',

            itemStyle: {
                emphasis: {
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(0, 0, 255, 0.9)'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(0, 0, 255, 0.2)'
                    }
                }
            }
        }]
    }
    // 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);

<
/script> <
/body> <
/html>