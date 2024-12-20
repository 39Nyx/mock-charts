option = {
					title: {
						text: '折线图',
                        subtext: '本周预算执行数'
				    },
				    tooltip: {
				        trigger: 'axis'
				    },
				    legend: {
				        data:['折线']
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
				        data: ['2013','2014','2015','2016','2017']
				    },
				    yAxis: {
				        type: 'value'
				    },
				    series: [
				        {
                            name:'折线',
                            type:'line',
                            data:[0, 0, 0, 0, 1.2]
                        }
				    ]
			};