var uploadedDataURL = "/asset/get/s/data-1479695496245-Skec2C1Gg.png";

option = {
		tooltip: {
			trigger: 'axis',
			show: false
		},
		animation:false,
		grid: {
			show: false,
			zlevel: 0,
			z: 2,
			left: 0,
			top: 0,
			right: 0,
			bottom: 0,
			width: 'auto',
			height: 'auto'

		},
		xAxis: {
			type: 'value',
			axisLabel: {
				inside: false,
				textStyle: {
					color: '#fff'
				}
			},
			max:100,
			axisTick: {
				show: false
			},
			axisLine: {
				show: false
			},
			splitLine: {
				show: false
			},
			z: 10
		},
		yAxis: {
			type: 'category',
			data: [''],
			axisLabel: {
				show: false,
				inside: false,
				textStyle: {
					color: '#fff'
				}
			},
			axisTick: {
				show: false
			},
			axisLine: {
				show: false
			},
			splitLine: {
				show: false
			},
			z: 10
		},
		series: [{
		    stack:'g1',
			type: 'bar',
			barWidth: '30',
			barGap:0,

			itemStyle: {
				normal: {
					barBorderRadius: [15,0,0,15],
					color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: '#4C9BB0'
					}, {
						offset: 0.5,
						color: '#CABB49'
					}, {
						offset: 1,
						color: '#DF7650'
					}])
				}
			},
			label:{
			    normal:{
			        show:true,
			        color:'#e0e1e5',
			        fontSize:12,
			        formatter:'no',
			        position:'insideLeft'
			    }
			},
			data: [50]
		}, 
		{
		    stack:'g1',
			type: 'bar',
			barWidth: '30',
			barGap:0,
			itemStyle: {
				normal: {
					barBorderRadius: [0,15,15,0],
					color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: '#DF7650'
					}, {
						offset: 0.5,
						color: '#CABB49'
					}, {
						offset: 1,
						color: '#4C9BB0'
					}])
				}
			},
			label:{
			    normal:{
			        show:true,
			        color:'#e0e1e5',
			        fontSize:12,
			        formatter:'like',
			        position:'insideRight'
			    }
			},
			data: [50]
		},
			{
			type: 'bar',
			barWidth: '60',
			barGap:0,
			itemStyle: {
				normal: {
					color:'#f0f1f5'
				}
			},
			label:{
			    normal:{
			        show:true,
			        color:'#e00000',
			        fontSize:12,
			        formatter:'Introduce for first',
			        position:'insideTop'
			    }
			},
			data: [100]
		},{
			type: 'line',
			symbol: 'image://'+uploadedDataURL,
			symbolSize: 20,
			symbolOffset:[0,-2*90/2-10 + 0*90],
			itemStyle: {
				normal: {
					barBorderRadius: 5
				}
			},
			data: [36]
		},{
		    stack:'g2',
			type: 'bar',
			barWidth: '30',
			barGap:0,

			itemStyle: {
				normal: {
					barBorderRadius: [15,0,0,15],
					color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: '#4C9BB0'
					}, {
						offset: 0.5,
						color: '#CABB49'
					}, {
						offset: 1,
						color: '#DF7650'
					}])
				}
			},
			label:{
			    normal:{
			        show:true,
			        color:'#e0e1e5',
			        fontSize:12,
			        formatter:'no',
			        position:'insideLeft'
			    }
			},
			data: [50]
		}, 
		{
		    stack:'g2',
			type: 'bar',
			barWidth: '30',
			barGap:0,
			itemStyle: {
				normal: {
					barBorderRadius: [0,15,15,0],
					color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: '#DF7650'
					}, {
						offset: 0.5,
						color: '#CABB49'
					}, {
						offset: 1,
						color: '#4C9BB0'
					}])
				}
			},
			label:{
			    normal:{
			        show:true,
			        color:'#e0e1e5',
			        fontSize:12,
			        formatter:'love',
			        position:'insideRight'
			    }
			},
			data: [50]
		},
			{
			type: 'bar',
			barWidth: '60',
			barGap:0,
			itemStyle: {
				normal: {
					color:'#f0f1f5'
				}
			},
			label:{
			    normal:{
			        show:true,
			        color:'#e00000',
			        fontSize:12,
			        formatter:'Introduce for second',
			        position:'insideTop'
			    }
			},
			data: [100]
		},{
			type: 'line',
			symbol: 'image://'+uploadedDataURL,
			symbolSize: 20,
			symbolOffset:[0,-2*90/2-10 + 1*90],
			itemStyle: {
				normal: {
					barBorderRadius: 5
				}
			},
			data: [36]
		}]
	};