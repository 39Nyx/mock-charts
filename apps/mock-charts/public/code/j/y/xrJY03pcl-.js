var defaultFontSize = 14,
    defaultTextColor = '#636c72',
    defaultGlobalColor = ['#5d9cec', '#62c87f', '#f15755', '#fc863f', '#7053b6'],
    defaultFontFamily = 'microsoft yahei',
    defaultBackgroundColor = '#fff',
    defaultShadowColor = 'rgba(204, 214, 235, 0.247059)';

option = {
    title: {
        text: '机型排行-昨日数据指标',
        top: 10,
        left: 'center',
        textStyle: {
            fontSize: 18,
            fontWeight: 400
        }
    },
    backgroundColor: defaultBackgroundColor, // 背景色，默认无背景。
    color: defaultGlobalColor,// 调色盘颜色列表。
    textStyle: {// 全局字体样式
        color: defaultTextColor,
        fontSize: defaultFontSize
    },
    legend: {
        bottom: 0,
        left: 'center',
        width: 500,
        itemWidth: 14,
        itemHeight: 14,
        itemBorderRadius: 8,
        textStyle: {
            // color: "#d7d7d7"
        },
        data: ['直接访问', '必应访问', '微博访问', '知乎访问', '百度访问']
    },
    tooltip: {// 提示框组件
        trigger: 'axis', // 触发类型 可选为：'axis' | 'item' | 'none'
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
            shadowStyle: {
                color: defaultShadowColor
            }
        }
    },
    grid: { // 坐标系内绘图网格
        top: 60,
        right: 30,
        bottom: 40,
        left: 10,
        containLabel: true
    },
    yAxis: [{// x轴
        type: 'category',
        data: ['iphone 6', 'iphone 7', 'galaxy s8', 'mi note 2', 'mi 6', 'vivo s7', 'mi 5'],
        //name:'时间', // 坐标轴名称。
        axisTick: { // 坐标轴刻度相关设置。
            alignWithLabel: true
        },
        axisLine: { // 坐标轴轴线相关设置。
            lineStyle: {
                color: '#6a7791'
            }
        },
        axisLabel: { // 坐标轴轴线标签设置。
            textStyle: {
                color: defaultTextColor,
                fontSize: defaultFontSize
            }
        },
        z: 2
    }],
    xAxis: [{// y轴
        type: 'value',
        //name:'人', // 坐标轴名称。
        nameTextStyle:{// name的样式，默认不需要设置，继承全局集体样式。
        },
        nameGap: 15, // 坐标名称跟坐标轴的距离。
        axisTick:{ // 坐标轴刻度相关设置。
            show:false
        },
        axisLine:{ // 坐标轴轴线相关设置。
            show:false
        },
        splitLine:{ // 坐标轴在 grid 区域中的分隔线。
            lineStyle:{
                color: '#eae9e9'
            }
        },
        axisLabel: { // 坐标轴轴线标签设置。
            textStyle: {
                color: defaultTextColor,
                fontSize: defaultFontSize
            }
        }
    }],
    series: [{// 系列列表。每个系列通过 type 决定自己的图表类型
        name: '访问次数', // 系列名称，用于tooltip的显示
        type: 'bar',
        barCategoryGap: '30%',
        data: [235, 278, 124, 332, 112, 532, 623],
        z: 1
    }]
};