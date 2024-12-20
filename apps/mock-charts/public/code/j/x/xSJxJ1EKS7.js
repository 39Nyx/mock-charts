var datav = [8, 12, 25, 60];
var maxdata = [80, 80, 80, 80];
var backgroundImage1 = "/asset/get/s/data-1538983605419-vjzCmKaF7.png";
var backgroundImage2 = "/asset/get/s/data-1538983620994-62zf692O6.png";
var uploadedDataURL1 = "/asset/get/s/data-1514970761653-ByzqAf9XG.png";
option = {
    backgroundColor: '#032640',
    tooltip: {
        trigger: 'item',
        textStyle: {
            fontSize: 12,
        },
        formatter: "攻击源:{b} <br/>攻击数量：{c}"
    },
    grid: {
        top: '10%',
        left: '13%',
        right: '12%',
        bottom: '10',
        containLabel: false
    },
    xAxis: [{
        type: 'value',
        // position: 'top',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false,
        },
    }],
    yAxis: [{
            type: 'category',
            // data: ['俄罗斯', '葡萄牙', '印度', '日本'],
            data: ['211.139.115.87', '211.139.115.87', '211.139.115.87', '211.139.115.87'],
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                color: '#c3dfff',
                fontSize: '14',
                formatter: function(val) {
                    return (val.length > 15 ? (val.slice(0, 14) + "...") : val);
                },
                inside: true,
                padding: [50, 0, 0, -5]
            }
        },
        {
            type: 'category', //辅助y轴
            position: 'left',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                color: '#00C5CD',
                fontSize: 30,
                // backgroundColor: { //这里可以添加你想自定义的图片
                //     image: backgroundImage1,
                // },
            },
            splitArea: {
                show: false
            },
            splitLine: {
                show: false
            },
            data: [{
                value: '   ',
                textStyle: {
                    backgroundColor: { //这里可以添加你想自定义的图片
                        image: backgroundImage1,
                    },
                }
            }, {
                value: '   ',
                textStyle: {
                    backgroundColor: { //这里可以添加你想自定义的图片
                        image: backgroundImage2,
                    },
                }
            }, {
                value: '    ',
                textStyle: {
                    backgroundColor: { //这里可以添加你想自定义的图片
                        image: uploadedDataURL1,
                    },
                }
            }, '4'],
        }
    ],
    series: [{
        name: '辅助',
        type: 'bar',
        barWidth: 8,
        yAxisIndex: 1,
        itemStyle: {
            normal: {
                // borderWidth: 1,
                // borderColor: '#3deaff',
                color: 'rgba(229, 242, 253,0)',
            },
            emphasis: {
                color: 'rgba(229, 242, 253,0.2)',
            }
        },
        label: {
            normal: {
                show: true,
                color: '#38b8e8',
                fontSize: '14',
                position: 'insideRight',
                // offset: [0, -20],
                formatter: function(d) {
                    return datav[d.dataIndex];
                }
            }
        },
        tooltip: {
            show: false
        },
        data: maxdata //背景值

    }, {
        name: '访问数',
        type: 'bar',
        color: {

            colorStops: [{
                offset: 0,
                color: '#0079d0' // 0% 处的颜色
            }, {
                offset: 1,
                color: '#0fd5ff' // 100% 处的颜色
            }],
            globalCoord: false, // 缺省为 false

        },
        barWidth: 18,
        itemStyle:{
            barBorderRadius:[0,4,4,0],
        },
        data: datav,
        z: 10,
    }, ]
};