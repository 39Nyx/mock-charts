var Name = ['错题率', '正确率'];
var color = ['#f18438', '#de3f0d', '#16B8FB', '#0958D2'];
var data = {
    信息技术应用: [60, 40],
    审计相关知识: [20, 80],
    心理健康问卷调查: [90, 10],
    法律法规: [95, 5],
    通信网络: [50, 50],
};

var xAxisData = [];
var data1 = [],
    data2 = [];
for (var i in data) {
    xAxisData.push(i);
    data1.push(data[i][0]);
    data2.push(data[i][1]);
}

var series = [];
for (var j = 0; j < 2; j++) {
    let symbolOffset = [];
    let colors = [];
    if (j == 0) {
        symbolOffset = ['-85%', '-150%'];
        colors = [color[0], color[1]];
        var dataArr = data2;
        var dataArr1 = data1;
        var color1 = color[2];
    } else if (j == 1) {
        symbolOffset = ['85%', '-150%'];
        colors = [color[2], color[3]];
        var dataArr = data1;
        var dataArr1 = data2;
        var color1 = color[0];
    }

    series.push(
        {
            name: Name[j],
            type: 'bar',
            stack: j,
            xAxisIndex: 0,
            data: dataArr,
            // label: label,
            barWidth: 8,
            barGap: 1.1,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: colors[0],
                        },
                        {
                            offset: 1,
                            color: colors[1],
                        },
                    ]),
                },
            },
            z: 3,
        },
        {
            name: Name[j],
            z: 2,
            type: 'pictorialBar',
            symbolPosition: 'end',
            data: dataArr1,
            symbol: 'rect',
            symbolOffset: symbolOffset,
            symbolSize: [8 * 1.2, 8 * 0.5],
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    color: color1,
                },
            },
        },
        {
            name: Name[j],
            type: 'bar',
            xAxisIndex: 1,
            // barGap: "140%",
            data: [100, 100, 100, 100, 100, 100, 100, 100],
            barWidth: 12,
            itemStyle: {
                normal: {
                    color: 'rgba(3,40,94,.4)',
                },
            },
            z: 1,
        }
    );
}
option = {
    backgroundColor:'blurScope',
    title: {
        text: '错题率/正确率',
        x: '36',
        y: '10',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 12,
            color: '#fff',
        },
    },
    grid: {
        left: '40',
        right: '10',
        bottom: '10',
        top: '20%',
        containLabel: true,
    },
    tooltip: {
        show: 'true',
        trigger: 'axis',
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
            shadowStyle: {
                color: 'rgba(112,112,112,0)',
            },
        },
        // formatter: '{b}<br />{a0}: {c0}%<br />{a1}: {c1}%<br />{a2}: {c2}%',
        formatter: function (params) {
            var unit = params[0].name.substring(params[0].name.indexOf('(') + 1, params[0].name.indexOf(')'));
            return (
                params[0].name +
                ' ：<br />' +
                params[0].seriesName +
                ' ：' +
                params[0].data +
                unit +
                '<br />' +
                // params[1].seriesName +
                // " ：" +
                // params[1].data +
                // unit +
                // "<br />" +
                params[2].seriesName +
                ' ：' +
                params[2].data +
                unit
            );
        },
        backgroundColor: '#005ED8', // 背景
        padding: [8, 10], //内边距
        extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
    },
    legend: {
        show: true,
        top: 20,
        right: 0,
        textStyle: {
            color: '#fff',
        },
        data: Name,
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#393952',
                },
            },
            axisLabel: {
                inside: false,
                textStyle: {
                    color: '#fff',
                    fontWeight: 'normal',
                    fontSize: '12',
                },
                formatter: function (params) {
                    let paramsStr = '';
                    params.length > 4 ? (paramsStr = params.substring(0, 4) + '...') : (paramsStr = params);
                    return paramsStr;
                },
            },
            data: xAxisData,
        },
        {
            type: 'category',
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            splitArea: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            data: xAxisData,
        },
    ],
    yAxis: {
        type: 'value',
        axisTick: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#393952',
            },
        },
        splitLine: {
            show: false,
        },
        axisLabel: {
            textStyle: {
                color: '#909090',
                fontWeight: 'normal',
                fontSize: '12',
            },
            formatter: function (params) {
                return params + '%';
            },
        },
    },
    series: series,
};
