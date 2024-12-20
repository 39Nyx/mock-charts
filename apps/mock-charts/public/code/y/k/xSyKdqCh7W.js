option = {
    title: {
    },
    tooltip: {
        trigger: 'axis'
    },
    // "calculable" : true,
    legend: {
        data:['电压','电流']
    },
    // grid: {       //直角坐标系内绘图网格

    //         // left: '3%',

    //         // right: '4%',

    //         // bottom: '3%',

    //         containLabel: true

    //     },
    toolbox: {
        show: true,
        // feature: {
        //     dataZoom: {},
        //     dataView: {readOnly: false},
        //     magicType: {type: ['line', 'bar']},
        //     restore: {},
        //     saveAsImage: {}
        // }
    },
    xAxis:  {
        type: 'category',
        boundaryGap: false,
        splitLine:{show: true},//加网格线
        axisLabel:{//data字段太长，遇到空格换行
            formatter:function(val){
                 return val.split(" ").join("\n");
            }
        },
        data: ['周一aaa aaaaaa','周二','周三','周四','周五','周六','周日']
    },
    yAxis: [
        {
        name : '电流UA',
        nameRotate:270,
        type: 'value',
        position:'left',//Y轴位置
         offset:10,
        axisLabel: {
            formatter: '{value}'
        },
        axisLine: {//Y轴样式
                   lineStyle: {
                       type: 'solid',
                       color:'#5693f4',
                       width:'1'
                   }
               }
        },
        {
        name : '电压UV',
        nameRotate:270,
        type: 'value',
        position:'left',
        offset:50,
        axisLabel: {
            formatter: '{value}'
        },
        axisLine: {
                   lineStyle: {
                       type: 'solid',
                       color:'#ffa602',
                       width:'1'
                   }
               }
        }
    ],
    series: [
        {
            name:'电压',
            type:'line',
            data:[110, 110, 150, 130, 120, 103, 100],
            smooth:true,//线条变平滑
            yAxisIndex:1,//每条折线对应不同的Y轴
            itemStyle:{//图例和线条样式
                normal:{
                    color:'#ffa602',
                    lineStyle:{
                        color:'#ffa602'
                    }
                }
            }
        },
        {
            name:'电流',
            type:'line',
            data:[1, 5, 2, 5, 3, 2, 0],
            smooth:true,
            yAxisIndex:0,
            itemStyle:{
                normal:{
                    color:'#5693f4',
                    lineStyle:{
                        color:'#5693f4'
                    }
                }
            }
        }
    ]
};
