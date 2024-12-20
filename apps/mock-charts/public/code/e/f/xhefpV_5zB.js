option = {
    backgroundColor:"#ee5c5c",
      title: {
        text: '单位:组',
        textStyle:{
            fontSize: 10,
            color:'#e8e8dc',
        },
    },
    grid:{
        y2:'20',
        x:'20',
        y:'45',
        // x2:'15',
    },
    legend: {
        show: true,
        data:['本月','上月'],
        x:40,
        itemWidth: 15,
        itemHeight:'10',
        data: [
            {
                name:'本月',
                textStyle:{fontWeight:'bold', color:'#e8e8dc',fontSize: '10'},
            },            {
                name:'上月',
                textStyle:{fontWeight:'bold', color:'#e8e8dc',fontSize: '10',}, 
            },
        ]
    },
    xAxis: {
        boundaryGap:false,
        axisTick:false,
        type: 'category',
        data: ['2.1-2.3', '2.4-2.10', '2.11-2.17', '2.18-2.24', '2.25-2.28'],
        axisLabel: {
            show: true,
            interval:1,
            textStyle: {
                color: '#d2d4da',
                fontSize:8
            }
        },
    },
    yAxis: {
        boundaryGap:false,
        show:true,
        axisLine:false,
        axisLine: {show:true,
        },
        type: 'value',
        splitLine: {
            lineStyle: {
                color:'#1f3054'
            },
        },
        axisLabel:{
            textStyle: {
                color: 'none'
            }
      },
    },
    series: [{
        name:'上月',
        data: [30, 30, 40, 30, 0],
        type: 'line',
         symbol:'circle',
        borderColor:'#aaff25',
        symbolSize :8,
       itemStyle: {
    normal: {
        color:'#aaff25',
        label: {
            show: true,
            position: "top",
        },
        labelLine: {
            show: false
        }
    } ,

}
    },
    {
        name:'本月',
        data: [10, 10, 20, 15, 30],
        type: 'line',
         symbol:'circle',
        borderColor:'#0dddfd',
        symbolSize :8,
       itemStyle: {
    normal: {
        color:'#0dddfd',
        label: {
            show: true,
            position: "top",
        },
        labelLine: {
            show: false
        }
    } ,

}
    }]
};
;