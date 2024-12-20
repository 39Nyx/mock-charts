option = {
    backgroundColor: '#394056',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#57617B'
            }
        }
    },
    xAxis: [{
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#fff'
            },
            interval: 0
        },
        axisTick: {
            show: false
        },
        data: [25, 26, 27, 28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
    }],
    yAxis: [{
        show: false,
        min: function(value) {
            var rr = value.min - (value.max - value.min);
            return Math.max(rr, 0);
        }
    }],
    grid: {
        top: "5%",
        right: "1%",
        left: "1%"
    },
    series: [{
        name: '移动',
        type: 'line',
        smooth: true,
        symbolSize: 10,
        lineStyle: {
            normal: {
                width: 1
            }
        },
        symbol: 'circle',
        showAllSymbol: true,
        itemStyle: {
            normal: {
                color: "rgba(255,247,34,1)"
            }
        },
        areaStyle: {
            normal: {
                color: "rgba(255,247,34,.4)"
            }
        },
        data: [9750747, 9755755, 9770281, 9787469, 9804657, 9821845, 9839033, 9856221, 9873409, 9890597, 9907785, 9924973, 9942161, 9959349, 9976537, 9993725, 10010913, 10028101, 10045289, 10062477, 10079665, 10096853, 10114041, 10131229, 10148417, 10165605, 10182793, 10199981, 10217169, 10225659]
    }]
};