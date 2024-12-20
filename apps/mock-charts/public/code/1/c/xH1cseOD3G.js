 option = {
     backgroundColor:'#FFFFFF',
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                series : [
                        /*第一个小饼*/
                    {
                        name: '高血压患病率',
                        type: 'pie',
                        radius: ['18%','28%'],
                        center: ['42%', '35%'],
                        color:['#36e4bb','#eeeeee'],
                        data: [
                            {value: 28, name:'有病'},
                            {value:10, name: '没病'}
                        ],
                        itemStyle : {  //图形样式
                            normal : { //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
                                label : {  //饼图图形上的文本标签
                                    show : false  //平常不显示
                                },
                            },
                        },
                    }
                ]
            };