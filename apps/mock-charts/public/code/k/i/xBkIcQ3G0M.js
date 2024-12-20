 option = {
        title: {
            text: '案件类别排名',
            x:'center',
            textStyle: {
                fontWeight: 'normal',
                color: '#fff',
                fontSize: '14'
            }
        },
        tooltip: {
            show: true,
            trigger: 'item',
            formatter: "{c}%"
        },
        toolbox: {
            show : true,
            feature : {
                mark : {
                    show: true
                },
//                magicType : {
//                    show: true,
//                    type: ['line', 'bar']},
            }
        },
        calculable : true,
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                axisLine: {
                    lineStyle: {
                        type: 'solid',
                        color: '#28316d',//左边线的颜色
                        width:'1'//坐标线的宽度
                    }
                },
                axisLabel: {
                    interval: 0,
                    rotate: 0,
                    show: true,
                    splitNumber: 15,
                    textStyle: {
                        //fontFamily: "微软雅黑",
                        fontSize: 12,

                    }
                },
                data :  ['民事','刑事','婚姻','劳动','交通','刑侦','其他'],
                axisTick: {

                    alignWithLabel: true
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                name:'',
                splitLine: {  //分割线
                    show: false,
                    lineStyle: {
                        color: '#28316d'
                    }
                },


            },

        ],
        series : [
            {
                name:'',
                type:'bar',
                data:[2800, 1700, 1200, 1000, 900, 600, 400 ],
                itemStyle: {
                    normal: {
                        color: function(params) {
                            // build a color map as your need.
                            var colorList = [
                                '#f37a00','#dd6a06','#fcb98f','#ffcdb4','#74533f',
                                '#ac2503','#743819'];
                            return colorList[params.dataIndex]
                        },
                        label: {
                            show: false,
                            position: 'top',
                            formatter: '{c}%'
                        }
                    }
                }
            },
        ]
    };