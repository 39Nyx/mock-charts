option = {
    // backgroundColor:'#FAFBFE',
   
    tooltip: {
        trigger: 'axis',
        backgroundColor:'#Fff',
        textStyle:{
            color:'#3B53A2',
            fontSize:12,
        },
        extraCssText: 'box-shadow: 0 0 5px rgba(205,217,240);',
        borderColor:'#DAE1F4',
        borderWidth:1,
        formatter: "{b} <br/>{a0} : {c0}元<br/>{a1} : {c1}元<br/>{a2} : {c2}元"
    },
    legend: {
        data:['2018-07-31','2018-08-01','2018-08-02'],
        textStyle:{
            color:'#3B53A2'
        },
        inactiveColor:'#CDD9F0',
        top:20,
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    // toolbox: {
    //     feature: {
    //         saveAsImage: {}
    //     }
    // },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00'],
    
        axisLabel: {
              color: '#3B53A2',
              fontSize: '11',
              interval: 0,
          },
          axisLine: {
            lineStyle: {
              color: '#3B53A2'
            }
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: '#3B53A2'
            }
          }
    },
    yAxis: {
        type: 'value',
       
        axisLabel: {
              color: '#3B53A2',
              fontSize: '11',
              interval: 0,
              formatter: '{value}元'
          },
          axisLine: {
            lineStyle: {
              color: '#3B53A2'
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#CDD9F0'
            }
          }
    },
    series: [
        {
            name:'2018-07-31',
            type:'line',
             lineStyle:{
                color:'#0F74DA' //连线颜色
            },
            itemStyle:
            {
                color:'#0F74DA' //连线颜色
            },
            smooth: true,
            data:[20.00, 3132.12, 1101.00, 2134.12, 590.54, 4230.01, 1210.23, 730.23, 810.23, 5182.23, 2191.10, 2234.43, 2210.08, 1330.14, 61.01, 82.00]
        },
        {
            name:'2018-08-01',
            type:'line',
            lineStyle:{
                color:'#FF3663' //连线颜色
            },
            itemStyle:
            {
                color:'#FF3663' //连线颜色
            },
            smooth: true,
            data:[220.23, 1823.32, 19.00, 1234.12, 390.31, 230.12, 3100.01, 18.22, 1191.99, 5034.00, 2701.12, 534.65, 1900.98, 1230.00, 210.32, 182.12]
        },
        {
            name:'2018-08-02',
            type:'line',
            lineStyle:{
                color:'#5B53E6' //连线颜色
            },
            itemStyle:
            {
                color:'#5B53E6' //连线颜色
            },
            smooth: true,
            data:[15.00, 1232.12, 3201.01, 754.03, 1190.01, 2330.99, 4410.32, 2182.12, 491.43, 234.12, 2290.66, 2330.10, 1310.32,290.01, 330.00,32.00 ]
        },
      
    ]
};