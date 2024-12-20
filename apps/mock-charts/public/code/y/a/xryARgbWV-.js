/**
* coloData:自定义图形和llegend颜色   你可以去掉color配置项 则默认为echarts颜色盘
* legendData:显示legend 但是它的内容 要和serise.name一一对应   legend的颜色也和colorData一一对应
* seriseData:显示数据
* 一般xaxis.data是固定的   如果是变化的你也可以写成参数
**/ 
function lar(colorData,legendData,seriseData){
    return {
            title: {
                text: '根据数据显示条形图的个数'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            color:colorData,
            legend: {
                data: legendData,
                align: 'right',
                right: 10
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [{
                name:'类别',
                type: 'category',
                data: ['万里通','信托','养老险','好房','平安符','汽车','租赁','科技','金科']
            }],
            yAxis: [{
                type: 'value',
                name: '修复率',
                axisLabel: {
                    formatter: '{value}'
                }
            }],
            series:seriseData 
        }
}

// 例如
var colorData=['pink','yellow','lightblue','cyan'];
var legendData=['2016.03', '2016.04', '2016.05', '2016.06'];
var seriseData=[{
                name: '2016.03',
                type: 'bar',
                data: [0.4, 0.24, 0.62, 0.68, 0.62,0.2, 0.4, 0.1, 0.18]
            }, {
                name: '2016.04',
                type: 'bar',
                data: [0.2, 0.4, 0.1, 0.18, 0.6, 0.24, 0.62, 0.68, 0.62]
            }, {
                name: '2016.05',
                type: 'bar',
                data: [0.12, 0.2, 0.4,0.6, 0.2,0.4, 0.6, 0.3, 0.5]
            }, {
                name: '2016.06',
                type: 'bar',
                data: [0.2, 0.4, 0.6, 0.3, 0.5,0.12, 0.2, 0.4,0.6]
            }]
    option=lar(colorData,legendData,seriseData)