// ECharts 水球图插件，需要额外插件脚本，参见上方“脚本”
// 完整配置参数参见：https://github.com/ecomfe/echarts-liquidfill

var option = {
    title: {
        text: '水球图修改颜色和不透明度',
        subtext: '整体的设置项'
    },
    series: [{
        type: 'liquidFill',
        data: [0.5, 0.4, 0.3],
        color: ['red', '#0f0', 'rgb(0, 0, 255)'],
        itemStyle: {
            normal: {
                opacity: 0.6
            },
            emphasis: {
                opacity: 0.9
            }
        }
    }]
};