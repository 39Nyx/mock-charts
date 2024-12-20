let dataPie = [
    {
        value: 2,
        name: '一级告警',
    },
    {
        value: 3,
        name: '二级告警',
    },
    {
        value: 5,
        name: '三级告警',
    },
];
let colorWrap = ['#b60606', '#002e49', '#173852'];
let colorPie = ['#b60606', '#ff7723', '#ffea5b'];
let colorPie2 = ['#680a10', '#884620', '#89823d'];
let baseDataPie = [],
    baseDataPie2 = [],
    legendData = [];
for (var i = 0; i < dataPie.length; i++) {
    legendData.push(dataPie[i].name);
    baseDataPie.push(
        {
            value: dataPie[i].value,
            name: dataPie[i].name,
            itemStyle: {
                normal: {
                    color: colorPie[i],
                    borderWidth: 10,
                    borderColor: colorPie[i],
                },
            },
            labelLine: {
                show: false,
                length: 50,
            },
            label: {
                show: true,
                formatter: function (params) {
                    // console.log(params);
                    let arr = '';
                    if (params.name == '一级告警') {
                        arr = '{one|' + params.data.name + '}' + '\n' + params.data.value;
                    } else if (params.name == '二级告警') {
                        arr = '{two|' + params.data.name + '}' + '\n' + params.data.value;
                    } else if (params.name == '三级告警') {
                        arr = '{three|' + params.data.name + '}' + '\n' + params.data.value;
                    }

                    return arr;
                },
                lineHeight: 20,
                color: '#fff',
                fontStyle: 'Microsoft YaHei',
                rich: {
                    one: {
                        color: '#ee2a2a',
                        backgroundColor: {
                            image: 'https://i.loli.net/2021/04/26/kK1LJtmiPwETMjQ.png',
                        },
                        padding: [5, 0, 0, 0],
                        width: 50,
                        height: 30,
                    },
                    two: {
                        color: '#ff7723',
                        backgroundColor: {
                            image: 'https://i.loli.net/2021/04/26/Q3NEwol6cVXAjbY.png',
                        },
                        padding: [5, 0, 0, 0],
                        width: 50,
                        height: 30,
                    },
                    three: {
                        color: '#ffea5b',
                        backgroundColor: {
                            image: 'https://i.loli.net/2021/04/26/hXSmvBbN2F3sVk1.png',
                        },
                        padding: [5, 0, 0, 0],
                        width: 50,
                        height: 30,
                    },
                },
            },
        },
        {
            value: 0.3,
            name: '留白',
            itemStyle: {
                normal: {
                    color: 'transparent',
                    borderWidth: 10,
                    borderColor: 'transparent',
                },
            },
            label: {
                show: false,
            },
        }
    );
    baseDataPie2.push(
        {
            value: dataPie[i].value,
            name: dataPie[i].name + '内框',
            itemStyle: {
                normal: {
                    color: colorPie2[i],
                    borderWidth: 10,
                    borderColor: colorPie2[i],
                },
            },
        },
        {
            value: 0.3,
            name: '留白',
            itemStyle: {
                normal: {
                    color: 'transparent',
                    borderWidth: 10,
                    borderColor: 'transparent',
                },
            },
        }
    );
}

option = {
    backgroundColor: '#021228',
    graphic: {
        elements: [
            {
                type: 'image',
                style: {
                    image: 'https://i.loli.net/2021/04/26/eN8npPuLZ2dcfCy.png',
                    width: 24,
                    height: 24,
                },
                left: 'center',
                top: 'center',
            },
        ],
    },
    tooltip: {
        show: true,
        trigger: 'item',
        formatter: '{a}：{b} <br/>占比：{d}%',
    },

    grid: {
        left: '1%', // 与容器左侧的距离
        right: '1%', // 与容器右侧的距离
        top: '1%', // 与容器顶部的距离
        bottom: '1%', // 与容器底部的距离
    },
    series: [
        {
            name: '外框',
            type: 'pie',
            clockWise: false,
            hoverAnimation: false,
            center: ['50%', '50%'],
            radius: ['55%', '59%'],
            tooltip: {
                show: false,
            },
            label: {
                show: false,
            },
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 1,
                colorStops: [
                    {
                        offset: 0,
                        color: '#762536', // 0% 处的颜色
                    },
                    {
                        offset: 0.5,
                        color: '#47372e', // 100% 处的颜色
                    },
                    {
                        offset: 1,
                        color: 'transparent', // 100% 处的颜色
                    },
                ],
                global: false, // 缺省为 false
            },
            data: [{ name: '外框', value: 10 }],
        },
        {
            name: '告警',
            type: 'pie',
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            center: ['50%', '50%'],
            radius: ['46%', '49%'],
            tooltip: {
                show: false,
            },

            data: baseDataPie,
        },
        {
            name: '',
            type: 'pie',
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            center: ['50%', '50%'],
            radius: ['43%', '46%'],
            tooltip: {
                show: false,
            },
            label: {
                show: false,
            },
            data: baseDataPie2,
        },
    ],
};
