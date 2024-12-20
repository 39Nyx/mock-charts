option = {
    backgroundColor:"#fff",
    color:["#c4c4c4","#146fb9",],
    title: {
        text: '总体满意度趋势',
        left:'center'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:[{name:"邮件营销",icon:"rect"},{
            name:"联盟广告",icon:"rect"
        }],
        align:"left",
        left:"right"
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {},
            
        },
        show:false
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2016-06','2016-06','2016-06','2016-061','2016-062','2016-063','2016-06'],
        axisLine:{
            show:false
        },
            axisTick:{
            show:false
        },
    },
    yAxis: {
        type: 'value',
        axisLine:{
            show:false
        },
        axisTick:{
            show:false
        },
        splitLine:{
            lineStyle:{
                color:["#edeaea"]
            }
        }
    },
    series: [
          {
            name:'联盟广告',
            type:'line',
        
            data:[150,150,150,150,150,150,150],
              symbolSize:0,
              markPoint:{
                  symbol:"diamond",
                   symbolSize:1,
                   symbolOffset:[0,-20],
                  label:{
                      show:true,
                      normal:{
                          color:"#000",
                          fontSize:20,
                          formatter:function(){
                              return "2017年平均分75%"
                          }
                      }
                  },
                  data:[
                      {
        name: '某个坐标',
        coord: ["2016-063", 150]
    }, 
                      ]
              },
                lineStyle:{
                normal:{
                    color:'rgb(86,167,69)'
                }
            }
        },
        {
            name:'邮件营销',
            type:'line',
         
            data:[120, 132, 101, 134, 90, 230, 210],
            symbolSize:15,
              label:{
                normal:{
                    show:true
                }
                
            },
            lineStyle:{
                normal:{
                    color:"#146fb9",
                    width:3
                }
            }
        },
        {
            name:'联盟广告',
            type:'line',
            label:{
                normal:{
                    show:false
                }
                
            },
            data:[220, 182, 191, 234, 290, 330, 310],
             symbolSize:15,
                lineStyle:{
                normal:{
                    width:3,
                    color:"#c4c4c4"
                }
            }
        }
    ]
};
