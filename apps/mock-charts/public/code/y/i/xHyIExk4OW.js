option = {
					title: {
						text: '折线图',
				    },
				    tooltip: {
				        trigger: 'axis'
				    },
				    legend: {
				        data:['总分','排名']
				    },
				    toolbox: {
				    	show : true,
				        feature : {
				            dataView : {show: true, readOnly: false},
				            magicType : {show: true, type: ['stack', 'tiled','line', 'bar']},
				            restore : {show: true},
				            saveAsImage : {show: true}
				        }
				    },
				    xAxis:  {
				        type: 'category',
				        boundaryGap: false,
				        data: ['2012','2013','2014','2015','2016']
				    },
				    yAxis: [
				        {
				        name:'总分',
				        type: 'value'
				    },
				     {
				         name:'排名',
				        type: 'value'
				    }
				    ],
				    series: [
				        {
				            
                            name:'总分',
                            type:'line',
                            smooth: true,
                            data:[, , 0, 96, 92]
                            
                        },
                        {
                            yAxisIndex: 1,
                            name:'排名',
                            type:'line',
                            smooth: true,
                            data:[0, 0, 0, 10, 11]
                        }
				    ]
			};