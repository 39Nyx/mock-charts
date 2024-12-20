
/*
    @songcxa
    @2017/9/14
    @方便使用，暂存
    @单曲线图
    @qq546803970
*/
option = {
    tooltip: {
        trigger: 'axis',
        formatter: '{b}:{c}',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'none' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '5%',
        right: '5%',
        bottom: '4%',
        top: '9%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        //data: tmpData.XFZS.xAxis_data,
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        axisTick: {
            alignWithLabel: true,
            length: 0
        },
        axisLine: { // 坐标轴线
            lineStyle: { // 属性lineStyle控制线条样式
                color: '#072543',
                width: 1,
            }
        },
        axisLabel: {
            textStyle: {
                color: "#00A5FF"
            }
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#072543' // 使用深浅的间隔色
            }
        }
    },
    yAxis: {
        name: '%',
        type: 'value',
        min: 1,
        axisLine: { // 坐标轴线
            lineStyle: { // 属性lineStyle控制线条样式
                color: '#072543',
                width: 1,
            }
        },
        axisTick: {
            length: 1
        },
        axisLabel: {
            textStyle: {
                color: "#00A5FF"
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                // 使用深浅的间隔色
                color: '#072543'
            }
        },
        minInterval: 1, //避免小数
        splitNumber: 5
    },
    series: [{
        name: '价格指数',
        type: 'line',
        smooth: true,
        symbolSize: 13,
        symbol: 'pin',
        lineStyle: {
            normal: {
                color: '#E8B10C',
                width:0.9
            }
        },
        data: [2, 2.5, 3, 4, 5.5, 5.6, 4.3, 2.1, 3.7, 2.4, 2.1, 3.7]
            //data: tmpData.XFZS.series_data
    }]
};