option = {
		title : {
			text: '今日风险数据统计',
			x:'center'
		},
		tooltip : {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		legend: {
			orient: 'horizontal',
			top:'15%',
			//left: 'right',
			x: 'center',
			data: ['检修线路数','影响光缆数','检修光缆数','影响线路数']
		},
		series : [
			{
				name: '今日风险数据统计',
				type: 'pie',
				radius : '55%',
				center: ['50%', '60%'],
				data:[
					{value:335, name:'检修线路数'},
					{value:310, name:'影响光缆数'},
					{value:234, name:'检修光缆数'},
					{value:135, name:'影响线路数'}
				],
				itemStyle: {
					emphasis: {
						shadowBlur: 10,
						shadowOffsetX: 0,
						shadowColor: 'rgba(0, 0, 0, 0.5)'
					}
				}
			}
		]
	};