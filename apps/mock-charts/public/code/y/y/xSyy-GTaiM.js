option = {
    backgroundColor:'#FFFFFF',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            saveAsImage: {
                show: true
            }
        }
    },
    grid: {
        left: '1%',
        right: '52%',
        containLabel: true,
    },
    xAxis: {
        name:'问题数(个)',
        type: 'value',
        position:'top',
        splitLine: {show: false},
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
         "axisLabel": {
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
        data: ['企业资质', '生产环境条件', '生产环境条件', '生产过程控制', '产品检验',
        '贮存和运输', '标识标签', '食品召回', '人员要求、事故处置', '企业自查']
    },
    series: [
        {
            name: '事项申请数',
            type: 'bar',
            barWidth:'50%',
            barGap: '0%',
            barCategoryGap: '50%',
            itemStyle: {
                normal: {
                    show: true,
                    color: '#81d0d7',
                    //barBorderRadius: 50,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            
            data: [70,90,100,110,122,130,135,150,157,195]
        }
    ]
};
