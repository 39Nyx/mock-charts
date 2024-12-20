//个人项目，需要用到3*3的方格图，来显示完成度与未完成度的需求，
//为了使用echart的效果，使用heatmap图，我只好再heatmap的基础上
//进行更改，代码的主题是参考ID“草禺金兑”大佬的2048进行的更改，
//本人是前端新手，大佬有什么意见，请及时提出。

// 定义变量
var data = [
    [0, 0, 1],
    [0, 1, 0],
    [0, 2, 1],
    [1, 0, 1],
    [1, 1, 1],
    [1, 2, 1],
    [2, 0, 0],
    [2, 1, 0],
    [2, 2, 1]
];
data = data.map(function(item) {
    return {
        value: [item[0], item[1], item[2]],
        itemStyle: {
            normal: {
                borderColor: '#ffffff', //背景颜色
                borderWidth: 5,
                borderType: 'solid'
            }
        }
    }
});
// 基于准备好的dom，初始化echarts实例
var axisType = {
    type: 'category',
    data: ['0', '1', '2'],
    axisLine: {
        show: false
    },
    axisTick: {
        show: false
    },
    axisLabel: {
        show: false
    }
};
option = {
    title: {
        text: 'Awesome Chart'
    },
    tooltip: {
        formatter: function(params) {
            return '[' + params.value[0] + ', ' + params.value[1] + ']: ' + params.value[2]
        }
    },
    // animation: false,
    grid: {
        top: '10%',
        height: '50%',
        width: '50%'
    },
    xAxis: axisType,
    yAxis: axisType,
    series: {
        name: '2048',
        type: 'heatmap',
        data: data,
        label: {
            normal: {
                //这里是去除模块上显示的数值，如果需要请自行设置
                show: false
            }
        },
        itemStyle: {
            normal: {
                borderWidth: 1,
                borderColor: "#FFF"
            }
        }
    }
};