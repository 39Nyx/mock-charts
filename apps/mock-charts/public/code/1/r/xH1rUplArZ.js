// 图表背景色 bar-line  从柱状图到折线图排列
var colorData= ['cyan','yellow','red','orange','green','pink','blue','red' ];
// x轴坐标
var xData=['攻击力','防御','移速','攻速','法强','暴击率','冷却'];
// 柱状图的数据
var barData=[
    {name:'李白',value:[8,1,4,5,5,30,40]},
    {name:'李元芳',value:[60,5,3,6,5,0,4]},
    {name:'曹操',value:[4,6,40,3,0,3,4]},
    {name:'项羽',value:[1,8,3,2,5,5,3]},
    {name:'刘禅',value:[1,7,4,3,15,2,5]},
    {name:'妲己',value:[10,10,0,30,8,3,40]},
    ]
// 折线图数据
var lineData=[
    {name:'铠',value:[3,6,4,4,2,6,5]},
    {name:'露娜',value:[6,4,4,2,6,5,8]}
    ]

// series
var data=[];
// legend
var legendData=[];
// 下面两个for循环  求出series data值   和legend值
for(var i=0;i<barData.length;i++){
    data.push({
            name:barData[i].name,
            type:'bar',
            data:barData[i].value,
            stack:true
        })
    legendData.push(barData[i].name)
}
for(var i=0;i<lineData.length;i++){
    data.push({
            name:lineData[i].name,
            type:'line',
            yAxisIndex: 1,
            symbol:'circle',
            data:lineData[i].value,
        })
    legendData.push(lineData[i].name)
}

option = {
    color: colorData,
    tooltip: {
        trigger: 'axis',
        axisPointer: {type: 'cross'}
    },
    grid: {
        right: '5%'
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data:legendData
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            data: xData
        }
    ],
    yAxis: [
        {
            type: 'value',
            min: 0,
            max: 100,
            position: 'left',
            axisLine: {
                lineStyle: {
                    color: '#5793f3'
                }
            },
            axisLabel: {
                formatter: '{value}%'
            }
        },
        
        {
            type: 'value',
            // min: 0,
            // max: 30,
            position: 'right',
            axisLine: {
                lineStyle: {
                    color: '#675bba'
                }
            },
            axisLabel: {
                formatter: '{value}'
            }
        },
        {
            show:false
        }
    ],
    series: data
};

