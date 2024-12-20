var all = {"data":[[103837,0,0,47149,106691,35247,29427,32791,44271,43230,190505,75805,126964,37197,23774,0,13000,18422,0,0,0,0],[174145,0,96317,35142,228665,80470,33499,30448,22832,154642,220745,95043,324173,68679,40982,0,161943,20437,0,4000,2500,0],[296341,4713,25582,64741,34710,131693,60064,94636,54329,178210,223296,98279,264370,126341,54627,0,0,0,0,0,0,263569],[266373,5437,731,78643,104744,126196,58249,108479,68715,120634,216780,64280,384250,127430,54355,0,0,0,0,0,0,116043],[344610,5817,35509,71603,64961,100127,55716,66492,69479,98069,169623,67075,243279,80350,50230,33500,0,0,0,4000,474,106916],[366625,3282,59017,69603,76849,122720,51041,48608,95053,107822,208836,88307,214589,99707,55769,23103,728,0,53,4609,905,10906],[352681,4621,58180,83848,76326,104349,48510,59362,78433,92712,184421,86942,205815,117872,42516,60000,0,0,5200,3000,2130,0],[391112,4606,63231,73416,90379,188742,28545,62279,74111,92902,101756,72796,109934,144819,32714,60000,0,0,0,4000,6000,0],[283086,2462,36126,56271,24721,36329,50174,47398,56450,59501,54210,42668,24982,85968,28890,40000,0,0,0,4000,6000,0]],"provinces":["四川","西藏","云南","贵州","广西","广东","福建","浙江","安徽","江西","湖南","湖北","河南","陕西","甘肃","山西","山东","江苏","绥元","宁夏","青海","其他"],"years":["1937年","1938年","1939年","1940年","1941年","1942年","1943年","1944年","1945年"]};

option = {
	timeline: {
		axisType: 'category',
		autoPlay: true,
		playInterval: 5000,
		data: all.years
	},
	options: [{
			title: {
				text: all.years[0] + '抗战劳工籍贯分布',
				left: 'center'
			},
			tooltip: {
				trigger: 'axis'
			},
			toolbox: {
				show: true,
				orient: 'vertical',
				x: 'right',
				y: 'center',
				feature: {
					mark: {
						show: true
					},
					dataView: {
						show: true,
						readOnly: false
					},
					magicType: {
						show: true,
						type: ['line', 'bar']
					},
					restore: {
						show: true
					},
					saveAsImage: {
						show: true
					}
				}
			},
			calculable: true,
			grid: {
				y: 100,
				y2: 100
			},
			xAxis: [{
				type: 'category',
				axisLabel: {
					interval: 0
				},
				data: all.provinces
			}],
			yAxis: [{
				type: 'value',
				name: '单位: 人'
			}],
			series: [{
				name: '人数',
				type: 'bar',
				markLine: {
					symbol: ['arrow', 'none'],
					symbolSize: [4, 2],
					itemStyle: {
						normal: {
							lineStyle: {
								color: 'orange'
							},
							barBorderColor: 'orange',
							label: {
								position: 'left',
								formatter: function (params) {
									return Math.round(params.value);
								},
								textStyle: {
									color: 'orange'
								}
							}
						}
					},
					data: [{
						type: 'average',
						name: '平均值'
					}]
				},
				data: all.data[0]
			}]
		},
		{
			title: {
				text: all.years[1] + '抗战劳工籍贯分布'
			},
			series: [{
				data: all.data[1]
			}]
		},
		{
			title: {
				text: all.years[2] + '抗战劳工籍贯分布'
			},
			series: [{
				data: all.data[2]
			}]
		},
		{
			title: {
				text: all.years[3] + '抗战劳工籍贯分布'
			},
			series: [{
				data: all.data[3]
			}]
		},
		{
			title: {
				text: all.years[4] + '抗战劳工籍贯分布'
			},
			series: [{
				data: all.data[4]
			}]
		},
		{
			title: {
				text: all.years[5] + '抗战劳工籍贯分布'
			},
			series: [{
				data: all.data[5]
			}]
		},
		{
			title: {
				text: all.years[6] + '抗战劳工籍贯分布'
			},
			series: [{
				data: all.data[6]
			}]
		},
		{
			title: {
				text: all.years[7] + '抗战劳工籍贯分布'
			},
			series: [{
				data: all.data[7]
			}]
		},
		{
			title: {
				text: all.years[8] + '抗战劳工籍贯分布'
			},
			series: [{
				data: all.data[8]
			}]
		}
	]
};
