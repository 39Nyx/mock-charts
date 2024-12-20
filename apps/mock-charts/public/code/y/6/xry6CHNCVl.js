// ECharts 水球图插件，需要额外插件脚本，参见上方“脚本”
// 完整配置参数参见：https://github.com/ecomfe/echarts-liquidfill

var option = {
    title: {
        text: '水球图对单个波的配置'
    },
    series: [{
        type: 'liquidFill',
        radius: '80%',
        data: [0.6, {
            value: 0.5,
            direction: 'left',
            itemStyle: {
                normal: {
                    color: 'red'
                }
            }
        }, 0.4, 0.3]
    }]
};
