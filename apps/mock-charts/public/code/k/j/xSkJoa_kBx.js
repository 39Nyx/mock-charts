// ECharts 水球图插件，需要额外插件脚本，参见上方“脚本”
// 完整配置参数参见：https://github.com/ecomfe/echarts-liquidfill

option = {
    title: {
        text: '水波图背景配置'
    },
    series: [{
        type: 'liquidFill',
        data: [0.6, 0.5, 0.4, 0.3],
        backgroundStyle: {
            borderWidth: 5,
            borderColor: 'red',
            color: 'yellow'
        }
    }]
};
