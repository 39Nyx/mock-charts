//数据
let inputs = {};
inputs.xLabel = ['预算', '实际'];
inputs.name = ['首次加盟收入', '加盟设计费收入', '工程咨询服务收入', '系统安装收入'];
inputs.color = ['#cbb0e3', '#edafda', '#93b7e3', '#a5e7f0'];
inputs.data = [];
inputs.data[0] = [20000, 14000];
inputs.data[1] = [7000, 7200];
inputs.data[2] = [6000, 5000];
inputs.data[3] = [7000, 7200];
//配置
option = {
    xAxis: {
        type: 'category',
        data: inputs.xLabel
    },
    yAxis: {
        type: 'value',
        axisLine: {
            symbol: ['none', 'arrow'], //两端都显示箭头
            symbolOffset: [0, 10] //箭头距离两端的距离,可为负数
        }
        
    },
    grid: {
      top: "5%",
      bottom: "10%",
      left:"15%",
      right:"15%",
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend:{
      x:'30%',
      y:'bottom',
    },
    series: [
    {
        name: inputs.name[0],
        data: inputs.data[0],
        stack:'1',
        type: 'bar',
        barWidth : 120,//柱图宽度
        itemStyle: {
            //通常情况下：
            normal: {
                //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                color: inputs.color[0]
            },
        //鼠标悬停时：
        emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
        },
    },
    {
        name: inputs.name[1],
        data: inputs.data[1],
        stack:'1',
        type: 'bar',
        itemStyle: {
            //通常情况下：
            normal: {
                //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                color: inputs.color[1]
            },
        //鼠标悬停时：
        emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
        },
    },
    {
        name: inputs.name[2],
        data: inputs.data[2],
        stack:'1',
        type: 'bar',
        itemStyle: {
            //通常情况下：
            normal: {
                //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                color: inputs.color[2]
            },
        //鼠标悬停时：
        emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
        },
    },
    {
        name: inputs.name[3],
        data: inputs.data[3],
        stack:'1',
        type: 'bar',
        itemStyle: {
            //通常情况下：
            normal: {
                //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                color: inputs.color[3]
            },
        //鼠标悬停时：
        emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
        },
    },
    ]
};