var colors = ['#2978aa',  '#3470a3'];
option = {
    backgroundColor:'#fff',
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow",
            textStyle: {
                color: "#fff"
            }

        },
    },
        grid: {
        top:80,
        left:'10%',
       right:'50%',
        bottom:'65%'
    }, 
    legend: {
        data:['超时办理事项数'],
        align: 'left',
        left: 50,
        top:10
    },
     "calculable": true,
    "xAxis": [{
        "type": "category",
        "axisLine": {
            lineStyle: {
                color: '#000'
            }
        },
        "splitLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "splitArea": {
            "show": false
        },
        "axisLabel": {
             interval: {default: 0},
            rotate:50,//倾斜度
            
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
                    tempStr=params.substring(0,4);
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
    }],
    yAxis: [
        {
            type: 'value',
            name: '',
            min: 0,
            
            position: 'left',
            axisLine: {
                lineStyle: {
                    color: colors[0]
                }
            },
            axisLabel: {
                formatter: '{value} '
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
        {name:'超时办理事项数',
            type:'bar',
           itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#60c9ed'
                }, {
                    offset: 1,
                    color: '#a7d8e8'
                }]),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
            barWidth:'50%',
            data:['351','318','265','245','213','185','155','133','104','85','75','63','54','45']},
        ]
};
