option = {
    title: {
        text: '138w+关注者',
        subtext: '张佳玮知乎关注者（金字塔图和饼图）'
        //爬取张佳玮138w+知乎关注者：数据可视化
        //https://zhuanlan.zhihu.com/p/28890605?refer=c_122608198
    },
    tooltip: {
        trigger: 'item',
        //formatter: "{a} <br/>{b} : {c}%"
        formatter: "{a} <br/>{b}"
    },
    toolbox: {
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    legend: {
        data: ['10w+','1w-10w','1k-1w','100-1k','10-100','1-10','0']
    },
    calculable: true,
    series: [
        {
            name:'漏斗图',
            type:'funnel',
            left: '15%',
            top: 60,
            //x2: 80,
            bottom: 60,
            width: '80%',
            // height: {totalHeight} - y - y2,
            min:0,
            max: 766170,
            minSize: '0%',
            maxSize: '100%',
            sort: 'none',
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
            //总：1380671
            data: [
                {value: 190, name: '10w+：190'},
                {value: 1380, name: '1w-10w：1380'},
                {value: 6948, name: '1k-1w：6948'},
                {value: 33436, name: '100-1k：33436'},
                {value: 169730, name: '10-100：169730'},
                {value: 766170, name: '1-10：766170'},
                {value: 402817 , name: '0：402817'} 
            ]
        },
        {
            name: '占比',
            type: 'pie',
            radius : '20%',
            center: ['20%', '30%'],
            //#总：261277
            data:[
                {value: 190, name: '10w+：0.01%'},
                {value: 1380, name: '1w-10w：0.10%'},
                {value: 6948, name: '1k-1w：0.50%'},
                {value: 33436, name: '100-1k：2.42%'},
                {value: 169730, name: '10-100：12.29%'},
                {value: 766170, name: '1-10：55.49%'},
                {value: 402817 , name: '0：29.18%'}  
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        },
    ]
};