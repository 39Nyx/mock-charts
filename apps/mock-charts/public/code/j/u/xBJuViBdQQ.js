option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: function(a){
            console.log(a);
            return ('检验机构：'+a[0].name
                   +'<br><span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:'+a[0].color+'"></span>'
                   +a[0].seriesName+'：'+a[0].value+'(批次)'
                   +'<br><span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:'+a[1].color+'"></span>'
                   +a[1].seriesName+'：'+a[1].value+'(批次)'
                   +'<br>抽检不合格率='+((a[1].value/a[0].value)*100).toFixed(1)+'%'
                   +'<br>计算公式=（'+a[1].seriesName+'/'+a[0].seriesName+'）*100%'
                   );
        }
    },
    legend: {
        data: ['抽检批次数','抽检不合格批次数'],
        top:'3%'
    },
    grid: {
        left: '3%',
        right: '15%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        name:'（批次）',
        position:'top',
        splitLine: {show: false},
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['萌1','萌2','萌3','萌4','萌5','萌6'],
        
    },
    axisLabel: {
            interval: {default: 0},
            rotate:0,
            formatter : function(params){
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
    series: [
        {
            name: '抽检批次数',
            type: 'bar',
            color:'#2ea5c3',
            data:  [123,132,213,113,112,131]
        },
        {
            name: '抽检不合格批次数',
            type: 'bar',
            color: '#CD0000',
            data: [23,32,13,13,12,31]
        }
    ]
};