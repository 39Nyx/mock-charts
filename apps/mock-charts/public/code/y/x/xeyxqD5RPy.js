app.title = '用柱图「仿制」一个图例';

// 用于 option.color，以及自建图例的 data.itemStyle.color
colorList = ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'];

option1 = {
    title: {
        text: '用柱图「仿制」一个图例'
    },
    color: colorList,
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    tooltip: {},
    series: [{
        type: 'bar',
        name: 'seriesA',
        data: [220, 182, 191, 234, 290, 330, 310]
    }, {
        type: 'line',
        name: 'seriesB',
        data: [234, 290, 182, 330, 220, 191, 310]
    }]
};

// 传入原 option，返回新 option
function addLegend(src) {

    let dst = JSON.parse(JSON.stringify(src));

    let legendSymbol = 'roundRect';
    let legendSymbolSize = [40, 25];

    let legendSeries = {
        type: 'line',
        name: 'legendSeries',
        //symbolSize: [40, 25],
        tooltip: {
            show: false
        },
        symbolKeepAspect: true,
        lineStyle: {
            opacity: 0
        },
        label: {
            show: true,
            position: 'right',
            formatter: '{b}'
        },
        hoverAnimation: false,
        data: []
    };

    // 设置一个隐藏的默认图例
    dst.legend = {
        show: false
    };
    
    // 如果原 option 没配置 color ，则直接设置为默认颜色
    typeof dst.color === 'undefined' ?
        dst.color = ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'] :
        null;

    // 根据原 option.grid 的情况，添加自制图例所需的直角坐标
    if (typeof dst.grid === 'object') {

        typeof dst.grid.length === 'undefined' ?
            dst.grid = [dst.grid, {
                top: '5%',
                bottom: '90%',
                left: '60%',
                right: '20%'
            }] :
            dst.grid.push({
                top: '5%',
                bottom: '90%',
                left: '60%',
                right: '20%'
            });
    } else {
        dst.grid = [{},
            {
                top: '5%',
                bottom: '90%',
                left: '60%',
                right: '20%'
            }
        ];
    }

    // 根据原 option.xAxis 的情况，添加自制图例所需的 x 轴
    if (typeof dst.xAxis === 'object') {
        typeof dst.xAxis.length === 'undefined' ?
            dst.xAxis = [dst.xAxis, {
                gridIndex: dst.grid.length - 1,
                type: 'category',
                show: false
            }] :
            dst.xAxis.push({
                gridIndex: dst.grid.length - 1,
                type: 'category',
                show: false
            });
    } else {
        dst.xAxis = [{
            gridIndex: dst.grid.length - 1,
            type: 'category',
            show: false
        }];
    }

    // 根据原 option.yAxis 的情况，添加自制图例所需的 y 轴
    if (typeof dst.yAxis === 'object') {
        typeof dst.yAxis.length === 'undefined' ?
            dst.yAxis = [dst.yAxis, {
                gridIndex: dst.grid.length - 1,
                show: false
            }] :
            dst.yAxis.push({
                gridIndex: dst.grid.length - 1,
                show: false
            });
    } else {
        dst.yAxis = [{
            gridIndex: dst.grid.length - 1,
            show: false
        }];
    }

    legendSeries.xAxisIndex = dst.xAxis.length - 1;
    legendSeries.yAxisIndex = dst.yAxis.length - 1;

    for (let i = 0; i < dst.series.length; i++) {

        if (dst.series[i].type === 'line') {
            legendSymbolSize = [40, 40];
            typeof dst.series[i].symbol !== 'undefined' ?
                legendSymbol = dst.series[i].symbol :
                legendSymbol = 'path://M0 29 L30 29 L30 31 L0 31 Z \
                M100 29 L70 29 L70 31 L100 31 Z \
                M 50 10 A 20 20 0 1 0 50 50 A 20 20 0 1 0 50 10 Z \
                M 50 12 A 18 18 0 1 1 50 48 A 18 18 0 1 1 50 12 Z'; 
                // 线图图例线条太细不容易点中，可以考虑将上面 svg path 的最后一行去掉，
                // 这样就是实心的了。
                
        } else {
            legendSymbolSize = [40, 25];
            legendSymbol = 'roundRect';
        }


        legendSeries.data.push({
            name: dst.series[i].name,
            itemStyle: {
                color: dst.color[i],
            },
            value: [i, 1],
            symbol: legendSymbol,
            symbolSize: legendSymbolSize
        });
    }

    if (typeof dst.series === 'object') {
        typeof dst.series.length === 'undefined' ?
            dst.series = [dst.series, legendSeries] :
            dst.series.push(legendSeries);
    }

    console.log(dst);
    return dst;

}

option = addLegend(option1);

// 监听处理自制图例的点击事件
myChart.on('click', {
    seriesName: 'legendSeries'
}, function(params) {


    if (params.color === '#CCC') {
        myChart.dispatchAction({
            type: 'legendSelect',
            // 图例名称
            name: params.name
        });
        option.series[params.seriesIndex].data[params.dataIndex].itemStyle.color = colorList[params.dataIndex];
        myChart.setOption(option);

    } else {
        myChart.dispatchAction({
            type: 'legendUnSelect',
            // 图例名称
            name: params.name
        });
        option.series[params.seriesIndex].data[params.dataIndex].itemStyle.color = '#CCC';
        myChart.setOption(option);

    }
});

// 监听处理自制图例的鼠标滑过事件
myChart.on('mouseover', {
    seriesName: 'legendSeries'
}, function(params) {

    myChart.dispatchAction({
        type: 'highlight',
        seriesName: params.name
    });
});

myChart.on('mouseout', {
    seriesName: 'legendSeries'
}, function(params) {

    myChart.dispatchAction({
        type: 'downplay',
        seriesName: params.name
    });
});