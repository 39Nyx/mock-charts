var requiedList = [{
    name: '硕士',
    value: 110
}, {
    name: '博士',
    value: 320
}, {
    name: '其他',
    value: 840
}, ];
var chartColor = [{ // 完成的圆环的颜色
    colorStops: [{
        offset: 0,
        color: '#ff6a6a'
    }, {
        offset: 1,
        color: '#fd4547'
    }]
},{ 
    colorStops: [{
        offset: 0,
        color: '#3f0fd2'
    }, {
        offset: 1,
        color: '#c24ff4'
    }]
}, { 
    colorStops: [{
        offset: 0,
        color: '#3eaec2'
    }, {
        offset: 1,
        color: '#63ecae'
    }]
}, ]
var fontColor = ["#ff9494", "#007eff", '#63ecae','#c24ff4',]
var requiedData = [],
    requiedSeries = [],
    sumVal = 0;
requiedList.forEach((item, idx) => {
    requiedData.push({
        name: item.name,
        textStyle: {
            color: fontColor[idx],
        },
    });
    sumVal += item.value;
})
requiedList.forEach((item, index) => {
    let chartData = [];
    requiedList.forEach((cItem, cIndex) => {
        if (cIndex == index) {
            chartData.push({
                value: cItem.value,
                name: cItem.name,
            
                label: {
                    formatter: cItem.name + '  ' + parseFloat(cItem.value / sumVal).toFixed(4) * 100 + '%'
                ,
                    color:fontColor[cIndex],
                },
            })
        } else {
            chartData.push({
                value: cItem.value,
                name: ' ',
                itemStyle: {
                    color: "rgba(0,0,0,0)"
                }
            })
        }
    })
    if (index != requiedList.length - 1) {
        // 处理每个环的data


        requiedSeries.push({
            name: '达标率',
            type: 'pie', //设为饼图
            radius: ['70%', '75%'], //设置内半径和外半径，形成环状
            startAngle: 90, //设置起始角度
            clockWise: false, //默认逆时针
            avoidLabelOverlap: true, //避免标注重叠
            hoverAnimation: false, //移入放大
            silent: true,
            center: '50%',
            label: {
                emphasis: {
                    //show: false,
                    textStyle: {
                        fontSize: '10',
                        fontWeight: 'bold',
                    }
                }
            },
            data: chartData,
        }, {
            value: 2,
            name: '111',
            type: 'pie', //设为饼图
            radius: ['70%', '75%'], //设置内半径和外半径，形成环状
            startAngle: 90, //设置起始角度
            clockWise: false, //默认逆时针
            avoidLabelOverlap: true, //避免标注重叠
            hoverAnimation: false, //移入放大
            silent: true,
            center: '50%',
            label: {
                emphasis: {
                    show: false,
                    textStyle: {
                        fontSize: '10',
                        fontWeight: 'bold'
                    }
                }
            },
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    color: 'rgba(0, 0, 0, 0)',
                    borderColor: 'rgba(0, 0, 0, 0)',
                    borderWidth: 0
                }
            }
        })

    } else {

        requiedSeries.push({
            name: '达标率',
            type: 'pie', //设为饼图
            radius: ['65%', '70%'], //设置内半径和外半径，形成环状
            startAngle: 90, //设置起始角度
            clockWise: false, //默认逆时针
            avoidLabelOverlap: false, //避免标注重叠
            hoverAnimation: false, //移入放大
            silent: true,
            center: '50%',
            label: {
                emphasis: {
                    //show: false,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            data: chartData,
        })

    }
    console.log(JSON.stringify(requiedSeries))
})


option = {
    legend: { //配置图例
        orient: 'vertical',
        //orient: 'horizontal', //布局方式，默认水平布局，另可选vertical
        x: 'left',
        y: 'center', //垂直放的位置，可以写top，center，bottom，也可以写px或者百分比。x轴方向同理，默认center
        //icon: "circle",

        selectedMode: false, //选中哪个图例 false后图例不可点击
        textStyle: {
            fontSize: 14,
        },
        data: requiedData,


    },
    color: chartColor, //环形的颜色
    graphic: [{ //环形图中间添加文字
        type: 'text', //通过不同top值可以设置上下显示
        left: 'center',
        top: 'center',
        style: {
            text: '学历数', //（自己设置显示内容）,
            textAlign: 'center',
            fill: '#000', //文字的颜色
            width: 30,
            height: 30,
            fontSize: 18,
            color: "#4d4f5c",
            fontFamily: "Microsoft YaHei"
        }
    }, ],
    series: requiedSeries

};