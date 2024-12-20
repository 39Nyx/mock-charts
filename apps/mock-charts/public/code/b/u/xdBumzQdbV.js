let xAxisDAGdata = [],seriesLineData = [];
        let dag = [
            {
                "机柜名称": "16",
                "机柜总容量": "100",
                "机柜已用容量": "10"
            },
            {
                "机柜名称": "A01",
                "机柜总容量": "100",
                "机柜已用容量": "50"
            },
            {
                "机柜名称": "A02",
                "机柜总容量": "100",
                "机柜已用容量": "45"
            },
            {
                "机柜名称": "A03",
                "机柜总容量": "100",
                "机柜已用容量": "99"
            },
            {
                "机柜名称": "A04",
                "机柜总容量": "100",
                "机柜已用容量": "0"
            },

            {
                "机柜名称": "B01",
                "机柜总容量": "100",
                "机柜已用容量": "10"
            },
            {
                "机柜名称": "B02",
                "机柜总容量": "100",
                "机柜已用容量": "10"
            },
            {
                "机柜名称": "B03",
                "机柜总容量": "100",
                "机柜已用容量": "1"
            },
            {
                "机柜名称": "B06",
                "机柜总容量": "100",
                "机柜已用容量": "20"
            },
            {
                "机柜名称": "B07",
                "机柜总容量": "100",
                "机柜已用容量": "0"
            },
            {
                "机柜名称": "B08",
                "机柜总容量": "100",
                "机柜已用容量": "90"
            }
        ];

        let LineData = [{
            name: '容量',
            data: [],
            color: ['#ff0042','yellow','#53a3ff','#54c693']
        }];

        for (let i=0;i<dag.length;i++){
            xAxisDAGdata.push(dag[i]["机柜名称"]);
            LineData[0].data.push(Math.round((Number(dag[i]["机柜已用容量"])/Number(dag[i]["机柜总容量"]))*100));
        }

        for (let i = 0; i < LineData.length; i++) {
            seriesLineData.push({
                name: LineData[i].name,
                type: 'bar',
                barWidth: 5,

                z: 1,
                label: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#c8d8e3'
                    }
                },
                itemStyle: {
                    color: function(params) {
                        let co
                        if (params.data > 79 &&  params.data < 90) {
                            co = LineData[0].color[1]
                        } else if(params.data > 89 ) {
                            co = LineData[0].color[0]
                        } else if(params.data > 20 && params.data < 80 ) {
                            co = LineData[0].color[2]
                        } else{
                            co = LineData[0].color[3]
                        }
                        return co
                    }

                },
                data: LineData[i].data,
            })
        }



option = {
            //  backgroundColor: '#010d14',
            title: {
                text: '容量统计/已用(占比)',
                textStyle: {
                    fontSize: 12,
                    fontWeight: 'normal',
                    color: '#606e76' //标题颜色
                },
                left: '0',
                top: '0px',
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    },
                }
            },
            grid: {
                left: '0px',
                top: '40px',
                right: '0px',
                bottom: '0px',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: xAxisDAGdata,
                axisLabel: {
                    interval: 0, //文字过多
                    // rotate: 15, //倾斜角度
                    show: true,
                    textStyle: {
                        color: '#606e76'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#606e76',
                        width: 0.5, //这里是为了突出显示加上的
                    }
                },
                axisTick:{
                    lineStyle: {
                        color: '#606e76',
                        width: 1, //这里是为了突出显示加上的
                    }
                },
            }],
            yAxis: [{
                type: 'value',
                interval: 20,
                max: 100,
                axisTick:{
                    lineStyle: {
                        color: '#606e76',
                        width: 1, //这里是为了突出显示加上的
                    }
                },
                axisLine: {
                    onZero: false,
                    lineStyle: {
                        color: '#606e76',
                        width: 1, //这里是为了突出显示加上的
                    }
                },
                axisLabel: {

                    show: true,
                    textStyle: {
                        color: '#606e76' //字体颜色
                    }
                },
                splitLine: { //保留网格线
                    show: true,

                    lineStyle: { //y轴网格线设置
                        color: '#606e76',
                        width: 1,
                        type: 'dotted'
                    }
                },
            }],
            series: seriesLineData
        };