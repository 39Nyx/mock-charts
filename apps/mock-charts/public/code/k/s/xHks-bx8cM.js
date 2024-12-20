option = {
     backgroundColor:'#fff',
    title : {
        text: '投诉举报案件办理情况',
        
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        left: '3%',
        top:'7%',
        data:['投诉举报立案数','投诉举报结案数']
    },
     grid: {
        left: '3%',
        right: '65%',
        top:'11%',
        bottom: '67%',
        containLabel: true
    },
    color:['#a4d8cc','#78d6ef'],
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
             "axisLabel": {
            interval: {default: 0},
            rotate:50,
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
            data: ['崇左市','来宾市','河池市','贺州市','百色市','玉林市','贵港市','钦州市','防城港市','北海市','梧州市','桂林市','柳州市','南宁市']        }
    ],
    yAxis : {
            
            type : 'value'
        }
    ,
    series : [
        {
            name:'投诉举报立案数',
            type:'line',
            areaStyle: {
                
                normal: {type: 'default',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#00af87'
                    }, {
                        offset: 1,
                        color: '#9ee1d2'
                    }], false)
                }
            },
            smooth:true,
            itemStyle: {
                normal: {areaStyle: {type: 'default'}}    
            },
            data:[710, 312, 321,754, 500, 830, 710, 521, 504, 660, 530, 410,530, 410]
        },
        {
            name:'投诉举报结案数',
            type:'line',
            areaStyle: {
                normal: {type: 'default',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#5ebac8'
                    }, {
                        offset: 1,
                        color:'#bce8ef'
                    }], false)
                }
            },
            smooth:true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[410, 312, 221,654,410, 630, 310, 521, 354, 560, 330, 310, 230, 310]
        }
    ]
};