var colors = [ '#81d0d7'];
var data1=[345,274,382,278,345,274,382,278,345,274,382,278,];
var data2=[917,889,1264,727,917,889,1264,727,917,889,1264,727];
option = {
    backgroundColor:'#fff',
    title:{
        text:'受理事项同比',
        textStyle:{
             fontSize: '18'
        }
    },
    color: colors,

    tooltip: {
        trigger: 'axis',
        axisPointer: {type: 'cross'}
    },
     grid: {
        top:80,
        left:'10%',
       right:'47%',
        bottom:'65%'
    },
    
    legend: {
        data:['受理事项数','同比率'],
        align: 'left',
        left: '10%',
        top:45
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true,
                
            },
            boundaryGap: ['0%', '0%'],
        /*"axisLabel": {
            interval: {default: 0},
            rotate:50,
            textStyle: {
                fontSize: 10
            },
            formatter : function(params){
               var newParamsName = "";// 最终拼接成的字符串
                var paramsNameNumber = params.length;// 实际标签的个数
                var provideNumber = 4;// 每行能显示的字的个数
                var rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整
                /**
                 * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                 */
                // 条件等同于rowNumber>1
                //if (paramsNameNumber > provideNumber) {
                    /** 循环每一行,p表示行 */
                    //var tempStr = "";
                  //  tempStr=params.substring(0,4);
                   // newParamsName = tempStr+"...";// 最终拼成的字符串
               // } else {
                    // 将旧标签的值赋给新标签
               //     newParamsName = params;
              //  }
                //将最终的字符串返回
              //  return newParamsName
          // }

       // },*/
             data: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '',
            min: 0,
            max: 1500,
            position: 'left',
            axisLine: {
                lineStyle: {
                    color:  '#1f6770'
                }
            },
            axisLabel: {
                formatter: '{value} '
            }
        },{
            type: 'value',
            name: '',
            position: 'right',
            axisLine: {
                lineStyle: {
                    color: '#1f6770'
                }
            },
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],
    series: [
        {
            name:'受理事项数',
            type:'bar',
            barWidth:'30%',
            data:data2
        },
        {
        name:'同比率',
         color: '#66d282',
         yAxisIndex: 1,
            type:'line',
            itemStyle : {
                normal : {
                    lineStyle:{
                        width:3,//折线宽度
                    },
                    
                },
                
            },
        data:[-1, 2, 4,2, 0, 3, 2,1, -1,0,-2, 4]
    }
    ]
};
