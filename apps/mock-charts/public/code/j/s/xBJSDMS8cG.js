option = {
    backgroundColor: '#ffffff',
    title:{
        text:'违法违规问题排名Top10',
         subtext: '市级',
        left:'left'
    },
    
    grid: {
        left: '30%',
        right: '30%',
        top:100,
        bottom: '20%',
        containLabel: true
    },

    tooltip: {
        show: "true",
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    xAxis: {
       name:'问题数',
        type: 'value',
        axisTick: {
            show: true
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#000',
            }
        },
        splitLine: {
            show: true
        },
    },
    yAxis: [{
            type: 'category',
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#000000',
                }
            },
            "axisLabel": {
            interval: {default: 0},
            rotate:0,
            formatter : function(params){
               var newParamsName = "";// 最终拼接成的字符串
                var paramsNameNumber = params.length;// 实际标签的个数
                var provideNumber = 8;// 每行能显示的字的个数
                var rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整
                /**
                 * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                 */
                // 条件等同于rowNumber>1
                if (paramsNameNumber > provideNumber) {
                    /** 循环每一行,p表示行 */
                    var tempStr = "";
                    tempStr=params.substring(0,8);
                    newParamsName = tempStr+"...";// 最终拼成的字符串
                } else {
                    // 将旧标签的值赋给新标签
                    newParamsName = params;
                }
                //将最终的字符串返回
                return newParamsName
            }

        },
        data: ['经营资质', '经营条件', '食品标签等外观质量状况', '食品安全管理机构和人员', '从业人员管理',
        '经营过程控制情况', '超市', '食用农产品批发市场', '市场开办者、柜台出租者和展销会举办者', '食品储存']

        },

    ],
    series: [{
            name: '事项申请数',
            type: 'bar',

            itemStyle: {
                normal: {
                    show: true,
                    color: '#81d0d7',
                    //barBorderRadius: 50,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            barGap: '0%',
            barCategoryGap: '50%',
            data: [70,90,100,110,122,130,135,150,157,195]
        }]
};