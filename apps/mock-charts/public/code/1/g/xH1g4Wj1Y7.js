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
        formatter: "{b} <br/>{a0} : {c0}人次<br/>{a1} : {c1}人次<br/>{a2} : {c2}人次"
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
              formatter: '{value}人次'
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
            data:[120, 132, 101, 134, 90, 230, 210, 330, 310, 182, 191, 234, 210, 330, 310, 182]
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
            data:[220, 182, 191, 234, 290, 330, 310, 182, 191, 234, 101, 134, 90, 230, 210, 182]
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
            data:[150, 232, 201, 154, 190, 330, 410, 182, 191, 234, 290, 330, 310,290, 330,132 ]
        },
      
    ]
};