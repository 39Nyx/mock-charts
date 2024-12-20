option = {
    color: ['#82d075'],
			tooltip : {
				trigger: 'axis',
				axisPointer : { type : 'shadow',}
			},
			grid: {
				top:'13%',
				left: '-10',
				right: '4%',
				bottom: '3%',
				containLabel: true,
			},
			xAxis : [
				{
					type : 'category',
					boundaryGap: true,
					axisTick: { 
					    inside:true,
						alignWithLabel: true,//在 boundaryGap 为 true 的时候有效，可以保证刻度线和标签对齐
					},
					axisLine:{show:false,},
					splitLine:{
						show: false,
						lineStyle:{
							color:'#e1e3e4',
							type:'solid'
						}
					},
					data : ['策略1', '策略2', '策略3', '策略4', '策略5', '策略6', '策略6', '策略8', '策略9', '策略10', '策略11', '策略12'],				
				}
			],
			yAxis : [
				{
					type : 'value',
					splitNumber:10,
					axisTick:{show:false},
 					axisLine:{show:false},
 					axisLabel:{show:false},
					splitLine:{ 
						show:true,
						lineStyle:{ 
							color:'#e1e3e4',
  						    type:'solid'
						},
				},	    
				}
			],
			series : [
				{

					name:'命中次数',
					type:'bar',
					barWidth: '28%',
					label: {
		                normal: {
		                    show: true,
		                    position: 'top',
		                    color:'#3e4956'
		                }
		            },
					data:[234, 198, 178, 136, 109,101,94,89,81,68,47,32 ]
				}
			]
};