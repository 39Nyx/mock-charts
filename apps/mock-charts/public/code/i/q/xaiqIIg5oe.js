const list1 = [30, 150, 140, 100];
const list2 = [25, 80, 70, 30];
const list3 = [30, 30, 40, 50];
option = {
    title: {
        text: '堆叠柱状图（author:zxh）',
    },
    calculable: true,
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
        formatter: function (params) {
            if (params[0].dataIndex === 0) {
                return `张三<br />收入：${params[0].value} <br />支出：${params[1].value}  <br />积蓄：${params[2].value} `;
            } else if (params[0].dataIndex === 1) {
                return `李四<br />收入：${params[0].value} <br />支出：${params[1].value}  <br />积蓄：${params[2].value} `;
            } else if (params[0].dataIndex === 2) {
                return `王五<br />收入：${params[0].value} <br />支出：${params[1].value}  <br />积蓄：${params[2].value} `;
            } else if (params[0].dataIndex === 3) {
                return `陈六<br />收入：${params[0].value} <br />支出：${params[1].value}  <br />积蓄：${params[2].value} `;
            }
        },
    },
    xAxis: {
        type: 'category',
        data: ['张三', '李四', '王五', '陈六'],
        axisTick: { show: false },
        axisLine: {
            lineStyle: {
                color: '#ccc',
                type: 'dashed', // solid、dashed、dotted
            },
        },
        axisLabel: {
            color: '#333',
            fontSize: '16',
        },
    },
    yAxis: [
        {
            axisTick: { show: false },
            nameGap: 10,
            nameTextStyle: {
                color: '#333',
                fontSize: 14,
            },
            splitLine: {
                lineStyle: {
                    color: '#ccc',
                    type: 'dashed',
                },
            },
            axisLine: {
                lineStyle: {
                    // color: "#ccc",
                    type: 'dashed',
                    opacity: '0.25',
                },
            },
        },
        {
            axisTick: { show: false },
            splitLine: {
                lineStyle: {
                    color: '#ccc',
                    type: 'dashed',
                },
            },
            axisLine: {
                lineStyle: {
                    color: '#ccc',
                    type: 'dashed',
                },
            },
        },
    ],
    series: [
        {
            name: '张三',
            type: 'bar',
            stack: '1',
            data: list1,
            // 设置柱子的宽度
            barWidth: 60,
            label: {
                show: true,
                position: 'top',
                color: '#333',
                formatter: function (param) {
                    return '';
                },
            },
            // 配置样式
            itemStyle: {
                // 通常情况下：
                normal: {
                    // 每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                    color: function (params) {
                        var colorList = ['#306eec', '#42f1a2', '#ff9c00', '#ff6a6a'];
                        return colorList[params.dataIndex];
                    },
                },
            },
        },
        {
            name: '李四',
            type: 'bar',
            stack: '1',
            data: list2,
            // 设置柱子的宽度
            barWidth: 60,
            label: {
                show: true,
                position: 'top',
                color: '#333',
                formatter: function (param) {
                    return '';
                },
            },
            // 配置样式
            itemStyle: {
                // 通常情况下：
                normal: {
                    // 每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                    color: function (params) {
                        var colorList = ['#009ef9', '#42f1ca', '#ffba00', '#ff9a9a'];
                        return colorList[params.dataIndex];
                    },
                },
            },
        },
        {
            name: '王五',
            type: 'bar',
            stack: '1',
            data: list3,
            // 设置柱子的宽度
            barWidth: 60,
            label: {
                show: true,
                position: 'top',
                color: '#333',
                formatter: function (param) {
                    if (param.name === '张三') {
                        return 50;
                    } else if (param.name === '李四') {
                        return 100;
                    } else if (param.name === '王五') {
                        return 80;
                    } else if (param.name === '陈六') {
                        return 70;
                    }else {
                        return '';
                    }
                },
            },
            // 配置样式
            itemStyle: {
                // 通常情况下：
                normal: {
                    // 每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                    color: function (params) {
                        var colorList = ['#00cdf9', '#a0fae6', '#fad367', '#ffd6d6'];
                        return colorList[params.dataIndex];
                    },
                },
            },
        },
    ],
};
