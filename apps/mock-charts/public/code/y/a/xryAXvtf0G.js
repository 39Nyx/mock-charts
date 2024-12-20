var option = {
    legend: { //配置legend，这里的data，要对应type为‘bar’的series数据项的‘name’名称，作为图例的说明
        data: ['第一阶段'],
        selectedMode: false, //图例禁止点击
        top: 20,
        itemWidth: 23,
        itemHeight: 6,
        textStyle: {
            color: '#707070',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontFamily: 'sans-serif',
            fontSize: 12
        }
    },
    grid: {
        z: 1, //grid作为柱状图的坐标系，其层级要和仪表图层级不同，同时隐藏
        show: false,
        left: '-30%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
        splitLine: {
            show: false //隐藏分割线
        },
    },
    xAxis: [ //这里有很多的show，必须都设置成不显
        {
            type: 'category',
            data: [],
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            splitArea: {
                interval: 'auto',
                show: false
            }
        }
    ],
    yAxis: [ //这里有很多的show，必须都设置成不显示
        {
            type: 'value',
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
        }
    ],
    toolbox: {
        show: false,
    },
    series: [{
            name: '刻度盘',
            type: 'gauge',
            startAngle: 180,
            endAngle: 0,
            center: ["50%", "80%"], //整体的位置设置
            z: 3,
            min: 0,
            max: 12,
            splitNumber: 12,
            radius: '90%',
            axisLine: {
                show: false, // 坐标轴线
                lineStyle: { // 属性lineStyle控制线条样式
                    width: 50,
                    color: [

                        [0.5, '#3b4569']
                    ],
                }

            },
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            axisTick: {
                show: false,
            },
            pointer: {
                itemStyle: {
                    color: "#fff",
                    opacity: 0.5
                },
            },
            itemStyle: {
                color: "#000",
                opacity: 0.5
            },
            data: [{
                value: '12',
                name: '当前阶段'
            }]
        },
        {
            name: '灰色内圈',
            type: 'gauge',
            z: 2,
            radius: '90%',
            startAngle: 180,
            endAngle: 0,
            center: ["50%", "80%"], //整体的位置设置
            splitNumber: 4,
            axisLine: { // 坐标轴线
                lineStyle: { // 属性lineStyle控制线条样式
                    color: [
                        [1, '#ccc']
                    ],
                    width: 50,
                    opacity: 1,
                }
            },
            splitLine: { //分隔线样式
                show: false,
            },
            axisLabel: { //刻度标签
                show: false,
            },
            axisTick: { //刻度样式
                show: false,
            },
            detail: {
                show: false,
                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    fontSize: 12
                }
            },
        },
        {
            name: '第一阶段',
            type: 'bar',
            barWidth: '60%', //不显示，可以随便设置
            data: [0],
            itemStyle: {
                normal: {
                    color: '#41C468', //这里的图例要注意，颜色设置和仪表盘的颜色对应起来
                }
            }
        }
    ]
}