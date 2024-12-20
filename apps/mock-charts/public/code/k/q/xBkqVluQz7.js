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
			left: 200,
			right: 200,
			width: 'auto',
			height: '20'

		},
		xAxis: {
			type: 'value',
            min:1,
            max:9,
			show:true,
			position:'top',
			interval:2,
			axisLine:{
			    show:false
			},
			axisTick:{
			    show:false
			}
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
			barWidth: '20',
			barGap:0,
			itemStyle: {
				normal: {
				    	color: 'rgba(255,255,255,0)'
				}
			},
			label:{
			        show:false
			},
			data: [1]
		},{
		    stack:'g1',
			type: 'bar',
			barWidth: '20',
			barGap:0,
			itemStyle: {
				normal: {
				    	color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: 'rgba(150,125,218,0.2)',
					},  {
						offset: 1,
						color: 'rgba(150,125,218,1.0)'
					}])
				}
			},
			
			label:{
			        show:true,
			        distance:10,
			        position:'left',
			           formatter: [
        '{lable|* 对情绪信息不敏感}',
        '{return| }',
        '{lable|* 难以理解情绪成因及转换}',
        '{return| }',
        '{lable|* 常常会做出一些不合时宜的}',
        '{return2| }',
        '{lable|情绪反应}'
    ].join('\n'),
			    rich:{
			        lable:{
			            left:10,
			        color:'#333',
			        fontSize:12
			        },
			        return:{
			            fontSize:6
			        },
			        return2:{
			            fontSize:3
			        }
			    }
			},
			data: [8]
		},
		{
		    stack:'g1',
			type: 'bar',
			barWidth: '20',
			barGap:0,
			label:{
			        show:true,
			        distance:10,
			        position:'right',
			           formatter: [
        '{lable|* 对情绪信息敏感}',
        '{return| }',
        '{lable|* 能很好地感知他人}',
        '{return| }',
        '{lable|* 关注他人及自身的情绪}',
        '{return| }',
        '{lable|* 特别关注情绪线索}'
    ].join('\n'),
			    rich:{
			        lable:{
			            left:10,
			        fontSize:12,
			        color:'#333'
			        },
			        return:{
			            fontSize:6
			        }
			    }
			},
			data: [0]
		}
		,{
            type: 'pictorialBar',
            symbol: 'triangle',
			symbolSize: 10,
			itemStyle: {
				normal: {
				    color:'#2312d8'
				}
			},
			data: [{value:2,symbolOffset:[0,15]},
			{value:2,symbolOffset:[190,15]},
			{value:2,symbolOffset:[30,15]},
			{value:2,symbolOffset:[233,15]},
			{value:2,symbolOffset:[145,15]},
			{value:2,symbolOffset:[65,15]},
			{value:2,symbolOffset:[176,15]},
			{value:2,symbolOffset:[89,15]},
			{value:2,symbolOffset:[81,15]},
			{value:2,symbolOffset:[200,15]}
			]
		}]
	};