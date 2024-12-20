   const chartData = [
        {
            value: 520,
            name: '温度传感器'
        },
        {
            value: 280,
            name: '湿度传感器'
        },
        {
            value: 100,
            name: 'UPS'
        },
        {
            value: 100,
            name: '门禁'
        },
        {
            value: 100,
            name: '消防'
        },
        {
            value: 100,
            name: '空调'
        },
        {
            value: 100,
            name: '漏水/水浸'
        },
        {
            value: 100,
            name: '烟雾'
        }
    ]
    const colorList = ['#115FEA', '#10EBE3', '#10A9EB', '#EB9C10', '#2E10EB', '#9B10EB']
    const sum = chartData.reduce((per, cur) => per + cur.value, 0)
    const gap = (1 * sum) / 100
    const pieData1 = []
    const pieData2 = []
    const gapData = {
        name: '',
        value: gap,
        itemStyle: {
            color: 'transparent'
        }
    }
    for (let i = 0; i < chartData.length; i++) {
        // 第一圈数据
        pieData1.push({
            ...chartData[i],
            itemStyle: {
                borderRadius: 10
            }
        })
        pieData1.push(gapData)

        // 第二圈数据
        pieData2.push({
            ...chartData[i],
            itemStyle: {
                color: colorList[i],
                opacity: 0.1
            }
        })
        pieData2.push(gapData)
    }
    console.log(pieData2)

    option = {
        backgroundColor: '#FC7D3F',
        tooltip: {
            show: false
            // backgroundColor: 'rgba(255, 255, 255)',
            // textStyle: {
            //     color: '#FC7D3F'#FC7D3F
            // }
        },
        legend: {
            show: true,
            right: '20%',
            top: '10%',
            align: 'left',
            itemGap: 18,
            // icon: 'rect',
            itemWidth: 13,
            itemHeight: 7,
            // symbolKeepAspect: false,
            textStyle: {
                // 个
                color: '#D8DDE3',
                rich: {
                    name: {
                        verticalAlign: 'right',
                        align: 'left',
                        width: 100,
                        fontSize: 18,
                        color: '#D8DDE3'
                    },
                    percent: {
                        padding: [0, 0, 0, 8],
                        color: '#D8DDE3'
                    }
                },
                borderWidth: 53 // 间距的宽度
            },
            formatter: name => {
                console.log(name)
                console.log(chartData)
                const item = chartData.find(i => {
                    return i.name === name
                })
                const p = ((item.value / sum) * 100).toFixed(0)
                return '{name|' + name + '}' + '{percent|' + p + '}' + '个'
            }
        },
        graphic: {
            elements: [
                // {
                //     type: 'image',
                //     z: 3,
                //     style: {
                //         image: imgSrc,
                //         width: 70,
                //         height: 70
                //     },
                //     top: 'middle',
                //     left: 'center',
                //     scale: [1.5, 1.5]
                // }
            ]
        },
        grid: {
            top: 35,
            right: 30,
            bottom: 20,
            left: 30
        },
        color: colorList,
        series: [
            {
                name: '消息来源',
                type: 'pie',
                roundCap: true,
                radius: ['66%', '70%'],
                center: ['26%', '45%'],
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                data: pieData1
            },
            {
                type: 'pie',
                radius: ['66%', '54%'],
                center: ['26%', '45%'],
                gap: 1.71,
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                silent: true,
                data: pieData2
            },
            {
                type: 'pie',
                center: ['26%', '45%'],
                radius: [0, '45.6%'],
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                itemStyle: {
                    color: 'rgba(75, 126, 203,.1)'
                },
                silent: true,
                data: [
                    {
                        value: 100,
                        name: ''
                    }
                ]
            }
        ]
    }
