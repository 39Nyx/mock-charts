colors = ["#4C72B0", "#55A868", "#C44E52", "#8172B2", "#CCB974", "#64B5CD"]
deemph_colors = ['#8DA6CE', '#A0CFAB']
bar_category_gap = '35%'
bar_width = '50%'
axis_line_color = 'rgb(135,135,135)'
average_line_color = 'rgb(128,128,128)'
// 字体取决于图片、屏幕大小
// 标题 小图18，大图20
// 坐标轴 小图12，大图15
title_font_size = 20
subtitle_font_size = 16
subtitle_font_color = '#CCCCCC'
category_font_size = 13
axis_label_color = '#999999'
axis_label_font_size = 15
axis_title_color = '#CCCCCC'
axis_title_font_size = 16

background_color = '#1A1B1C'
grid_line_color = '#2D2D2D'
bar_color = '#507B90'
title_color='#FFFFFF'

label_emph_fontsize = 14,
    label_emph_style = {
        show: true,
        position: 'insideRight',
        formatter: '{c}%',
    }

categories = [
    'Russell 2k', 'S&P 500 Ind.', 'NASDAQ 100', 'Dow Ind.', 'Dollar', 'Gold'
]

data = [
    0.39, 0.23, 0.16, 0.14, -0.06, -0.21
]

source = {
    text: 'Yimian Technology, Inc.',
    textStyle: {
        fontWeight: 'normal',
        fontSize: 12
    },
    bottom: 10,
    left: 100,
};


option = {
    // backgroundColor: 'rgb(255,255,255)',
    title: [{
        text: 'Median Percent Return',
        textStyle: {
            fontSize: title_font_size,
            fontWeight: 'normal',
          	color:'#FFFFFF'
        },
        subtext: 'of assets in study',
        subtextStyle: {
            fontSize: subtitle_font_size,
          	color: subtitle_font_color
        },
        left: 100,
    },
        source
    ],
    grid: {
        left: 130,
        right: 20,
        bottom: 100,
    },
    tooltip: {
        // trigger: 'item',
      trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    yAxis: {
        type: 'category',
        boundaryGap: true,
        data: categories,
        inverse: true,
        axisTick: {
            show: false,
        },
        axisLine: {
            show: true,
        },
        splitLine: {
            show: false,
        },
        axisLabel: {
            textStyle: {
                fontSize: category_font_size,
            },
        },
        name: 'Assets in Study',
        nameLocation: 'middle',
        nameGap: 110,
        nameTextStyle: {
        fontSize: axis_title_font_size,},
    },
    xAxis: {
        axisLine: {
            show: false,
            lineStyle: {
                // color: axis_line_color,
                width: 1.5,
            }
        },
        axisTick: {
            inside: true,
        },
        axisLabel: {
            formatter: '{value}%',
            textStyle: {
                // fontSize: 10,
            },
        },
        splitLine: {
            show: true
        },
        name: 'Median Percent Return',
        nameLocation: 'middle',
        nameGap: 30,
        nameTextStyle: {
        fontSize: axis_title_font_size,},

    },
    series: [{
        type: 'bar',
        data: data,
        barWidth: '95%',
        barCategoryGap: bar_category_gap,
        label: {
            normal: {
                show: true,
                position: 'insideRight',
                formatter: '{c}%',
            }
        },
        itemStyle: {
            normal: {
                color: bar_color
            }
        },

    }]
};