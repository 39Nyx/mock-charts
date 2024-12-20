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
        formatter: "{b} <br/>{a0} : {c0}%<br/>{a1} : {c1}%<br/>{a2} : {c2}%"
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
              formatter: '{value}%'
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
            data:[21.3, 12.1, 10.1, 13.4, 0.90, 12.30, 21.0, 13.30, 23.10, 18.2, 19.1, 12.34, 25.0, 32.30, 13.10, 1.82]
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
            data:[12.20, 18.2, 21.91, 23.4, 29.0, 33.0, 43.10, 31.82,31.91, 23.4, 41.01, 13.4, 29.0, 23.01, 21.03, 1.82]
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
            data:[15.0, 2.32, 20.1, 31.54, 19.02, 33.03, 41.0, 18.2, 19.1, 23.44, 32.90, 33.30, 31.19,29.01, 33.37,1.2 ]
        },
      
    ]
};