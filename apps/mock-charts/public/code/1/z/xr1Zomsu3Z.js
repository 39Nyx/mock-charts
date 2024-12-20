option = {
    title: {
        text: '0-10关注者',
        subtext: '张佳玮知乎关注者（金字塔图'
        //爬取张佳玮138w+知乎关注者：数据可视化
        //https://zhuanlan.zhihu.com/p/28890605?refer=c_122608198
        //http://echarts.baidu.com/gallery/editor.html?c=funnel
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    legend: {
        data: ['0','1','2','3','4','5','6','7','8','9','10']
    },
    calculable: true,
    series: [
        {
            name:'漏斗图',
            type:'funnel',
            left: '10%',
            top: 60,
            //x2: 80,
            bottom: 60,
            width: '80%',
            // height: {totalHeight} - y - y2,
            min:0,
            max: 402817,
            minSize: '0%',
            maxSize: '100%',
            sort: 'ascending',
            gap: 2,
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                },
                emphasis: {
                    textStyle: {
                        fontSize: 20
                    }
                }
            },
            labelLine: {
                normal: {
                    length: 10,
                    lineStyle: {
                        width: 1,
                        type: 'solid'
                    }
                }
            },
            itemStyle: {
                normal: {
                    borderColor: '#fff',
                    borderWidth: 1
                }
            },
            data: [
                {value: 402817, name: '0'},
                {value: 265133, name: '1'},
                {value: 211396, name: '2'},
                {value: 93312, name: '3'},
                {value: 58920, name: '4'},
                {value: 42416, name: '5'},
                {value: 32344, name: '6'},
                {value: 25200, name: '7'},
                {value: 20257, name: '8'},
                {value: 17191, name: '9'},
                {value: 14057, name: '10'}    
            ]
        }
    ]
};
