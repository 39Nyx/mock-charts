var data = {info:{xaxis:['中国山东','中国河北','美国纽约','美国洛杉矶','法国巴黎'],'unit':'',cn:[12,33,0,0,0],us:[0,0,22,5,0],fn:[0,0,0,0,18]}}
option = {
                    title : {
                        text: '',
                    },
                    tooltip : {
                        trigger: 'axis',
                        axisPointer:{type:'shadow'},
                        formatter:function (param) {
                            console.log(param);
                            for(var k in param) {
                                if (param[k].name.indexOf(param[k].seriesName) > -1) {
                                    return `<div style="background-color: ${param[k].color};height: 10px;width: 10px;border-radius: 5px;display:inline-block"></div>${param[k].name}：${param[k].data}封`;
                                }
                            }
                        }
                    },
                    legend: {
                        data:['中国','美国','法国']
                    },
                    grid:{
                      left:15,
                      right:15,
                      bottom:'3%',
                      containLabel:true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : data.info.xaxis,
                            axisLabel:{
                                interval:0,
                                rotate:10,
                                align:'center',
                                margin:15
                            }
                        }
                    ],
                    yAxis : [
                        {
                            name:`邮件数（${data.info.unit}封）`,
                            type : 'value',
                            splitNumber:4
                        }
                    ],
                    series : [
                        {
                            name:'中国',
                            type:'bar',
                            barGap:'-100%',
                            barWidth:24,
                            data:data.info.cn

                        },
                        {
                            name:'美国',
                            type:'bar',
                            barWidth:24,
                            data:data.info.us
                        },
                        {
                            name:'法国',
                            type:'bar',
                            barGap:'-100%',
                            barWidth:24,
                            data:data.info.fn
                        },
                    ]
                };;