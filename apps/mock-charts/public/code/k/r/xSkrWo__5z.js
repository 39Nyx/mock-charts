var colors = ['#AEEEEE',  '#53868B'];

var xData = ['餐饮服务食品安全监督检查通用规程','小餐饮','学校食堂日常监督检查','大中型餐饮（含专间）日常监督检查','日常监管餐饮服务简单版','小餐饮店','无专间库房普通小餐饮店','网络餐饮专项检查','秋季开学学校食品安全专项检查','餐饮服务食品安全监督检查通用规程'];
option = {
    title: {
        text: '检查模板使用次数',
        textStyle:{
             fontSize: '15' 
        }
    },
    backgroundColor:'#fff',
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow",
            textStyle: {
                color: "#fff"
            }

        },
        formatter:'{b}<br/>{a0}:{c0}'
    },
       grid: {
        top:'10%',
        bottom:'70%',
        right:'60%'
    },   
    legend: {
        data:['检查模板使用次数'],
        align: 'left',
        left: 10,
        top:25
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
            "interval": 0,
            rotate:50,//倾斜度
            textStyle:{
                fontSize:12,
                color:'#000'
            },formatter : function(params){
               var newParamsName = "";// 最终拼接成的字符串
                var paramsNameNumber = params.length;// 实际标签的个数
                var provideNumber = 6;// 每行能显示的字的个数
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
        
        "data": xData,
    }],
    yAxis: [
        {
            type: 'value',
            name: '',
            /*min: 0,
            max: 100,*/
            axisLine: {
                lineStyle: {
                    color: '#000'
                }
            },
            axisLabel: {
                formatter: '{value} ',
                textStyle:{
                fontSize:10
            }
            },
            position: 'top'
        },
        {
            type: 'value',
            name: '',
            position: 'right',
            axisLine: {
                lineStyle: {
                    color: '#000'
                }
            },
            axisLabel: {
                formatter: '{value} %',
                textStyle:{
                fontSize:15
            }
            }
        }
    ],
    series: [
        {name:'检查模板使用次数',
            type:'bar',
           color: colors[0],
            barWidth : '30%',
            data:[31,28,28,24,21,20,17,13,9,4]},
        ]
};
