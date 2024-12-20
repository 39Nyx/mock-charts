// ECharts 水球图插件，需要额外插件脚本，参见上方“脚本”
// 完整配置参数参见：https://github.com/ecomfe/echarts-liquidfill

option = {
    backgroundColor:"#091c3d",
    series: [{
        type: 'liquidFill',
        data: [0.6, 0.5, 0.4, 0.3],
        radius: '30%',
        label:{
            normal:{
                formatter:"15",
                textStyle: {
                    fontSize: 50,
                    color: '#D94854'
                }
            }
        }
    }]
};
