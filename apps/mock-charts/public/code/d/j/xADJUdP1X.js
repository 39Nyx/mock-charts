 option = {
		title: {
			text: '支付宝2019年度消费账单（单位:元）',
			subtext: 'From Alipay',
			sublink: 'https://www.alipay.com'
		},
		tooltip : {
			trigger: 'axis',
			axisPointer : {            // 坐标轴指示器，坐标轴触发有效
				type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
			},
			formatter: function (params) {
				var tar = params[0];
				return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
			}
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		xAxis: {
			type : 'category',
			splitLine: {show:false},
			data : ['总支出','生活用品','餐饮美食','转账充值','服饰休闲','交通通讯','医疗保健','其他']
		},
		yAxis: {
			type : 'value'
		},
		series: [
			{
				name: '辅助',
				type: 'bar',
				stack:  '总量',
				itemStyle: {
					normal: {
						barBorderColor: 'rgba(0,0,0,0)',
						color: 'rgba(0,0,0,0)'
					},
					emphasis: {
						barBorderColor: 'rgba(0,0,0,0)',
						color: 'rgba(0,0,0,0)'
					}
				},
				data: [0, 99608.28,65898.98, 49334.28, 40132.6, 32377.46, 28952.53, 0]
			},
			{
				name: '消费',
				type: 'bar',
				stack: '总量',
				label: {
					normal: {
						show: true,
						position: 'inside'
					}
				},
				data:[138242.52, 38634.24, 33709.3, 16564.7, 9201.68, 7755.14, 3424.93, 28952.53]
			}
		]
	};


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);

