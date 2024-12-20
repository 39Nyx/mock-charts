var colors = [ '#81d0d7'];
var data1=[3,2,5,6,1,1,4,7,4,2];;
var data2=[-1, 2, 4,2, 0, 3, 2,1, -1,0]
option = {
    color: colors,
    backgroundColor:'#FFFFFF',
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
        data:['环节处理平均时长','同比率(同比上期)'],
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
            axisTick: {
                alignWithLabel: true
            },
            boundaryGap: ['0%', '0%'],
       "axisLabel": {
             interval: {default: 0},
             
            rotate:40,//倾斜度
            formatter : function(params){
               var newParamsName = "";// 最终拼接成的字符串
                var paramsNameNumber = params.length;// 实际标签的个数
                var provideNumber = 4;// 每行能显示的字的个数
                var rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整
                /**
                 * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                 */
                // 条件等同于rowNumber>1
                if (paramsNameNumber > provideNumber) {
                    /** 循环每一行,p表示行 */
                    var tempStr = "";
                    tempStr=params.substring(0,6);
                    newParamsName = tempStr+"...";// 最终拼成的字符串
                } else {
                    // 将旧标签的值赋给新标签
                    newParamsName = params;
                }
                //将最终的字符串返回
                return newParamsName
            }
        },
             data: ['网上收件','市局政务窗口初审','政务窗口受理','业务部门经办、审核','审评中心审查办理','现场查看、整改','首席代表审核','政务窗口承办','首席代表审核、签批','局领导审批']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '',
            min: 0,
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
    "dataZoom": [{
        "show": true,
        "height": 20,
        "xAxisIndex": [
            0
        ],
        bottom: '15%',
        "start": 10,
        "end": 80,
        handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        handleSize: '110%',
        handleStyle:{
            color:"#d3dee5",
            
        },
           textStyle:{
            color:"#000"},
           borderColor:"#90979c"
        
        
    }, {
        "type": "inside",
        "show": true,
        "height": 15,
        "start": 1,
        "end": 35
    }],
    series: [
         {
            name:'环节处理平均时长',
            type:'bar',
            barWidth:'30%',
            data:data1
        },
        {
        name:'同比率(同比上期)',
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
        data:data2
    }
    ]
};
