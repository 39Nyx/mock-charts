var colorList = [];
var data1= ["134","210","256","331","385"];
var data2= ["416","416","416","416","416"];
option = {
    color: ['#00B6A4'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        top: '28',
        left: '20%',
        right: '6%',
        bottom: '0%',
        containLabel: false
    },
    xAxis: [{
        type: 'value',
        position: 'top',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#d2d2d2',
                type: 'dashed',
                width: 1
            }
        },

    }],
    yAxis: [{
            type: 'category',
           data: ["丰台","海淀","朝阳","东城","西城"],
            axisTick: {
                show: false
            }
        },
        //辅助x轴
        {
            type: 'category',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitArea: {
                show: false
            },
            splitLine: {
                show: false
            },
            data: ["丰台","海淀","朝阳","东城","西城"]
        }
    ],
    series: [{
            name: '已使用寿命(%)',
            type: 'bar',
            barWidth: 16,
            itemStyle: {
                normal: {
                    color: function(params) {
                        return colorList[params.dataIndex]
                    }
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'insideBottomLeft',
                    offset:[50,-15],
                   
                     textStyle:{
                       color:'red'
                   },
                     formatter:function(params){
                        return data1[params.dataIndex] + "/" + data2[params.dataIndex];  
                },
              
              }
            },
            data: ["88.4","58.8","42.0","33.6","15.6"]
        },
        //背景
        {
            name: '成绩',
            type: 'bar',
            barWidth: 16,
            yAxisIndex: 1,
          label:{
            normal:{
              show:true,
              position:'insideTopRight',
              offset:[0,-5],
              textStyle:{
                color:'red'  
              },
            formatter:function(params){
                return (data1[params.dataIndex]/data2[params.dataIndex]*100).toFixed(2)+"%";
               
            },
           }
          },
            //颜色透明度
             itemStyle: {
                normal: {
                    color: 'rgba(101, 101, 101,0.1)'
                }
            }, 
          /*  label:{
                 normal: {
                     show: true,
                   position:'insideTopRight',
                   offset:[0,-5],
                  formatter: '{c}%',
                   textStyle:{
                       color:'red'
                   }
                }
            },*/
            //背景值
            data: ["100","100","100","100","100"]
        },
    ]

};
for (var i in ["88.4","58.8","42.0","33.6","15.6"]) {
    colorList[i] = ["88.4","58.8","42.0","33.6","15.6"][i] > 70 ? '#FF4552' : '#7EC0EE';
};