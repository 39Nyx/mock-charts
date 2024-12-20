option = {
			color: ['#3398DB'],
			tooltip : {
				trigger: 'axis',
				axisPointer : { type : 'shadow',}
			},
			grid: {
				top:'10%',
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true,
			},
			xAxis : [
				{
					type : 'category',
					data : ['CVI', 'WI', 'THI', 'BI', 'BAI', 'WBPI', 'OMI'],
					axisTick: { //axisTick
					    inside:true,
						alignWithLabel: true,//在 boundaryGap 为 true 的时候有效，可以保证刻度线和标签对齐
					},
				
				}
			],
			yAxis : [
				{
					type : 'value',
					splitLine:{  //坐标轴在 grid 区域中的分隔线；
					show:true,
					lineStyle:{ //分割线颜色，可设单个，也可以设置数组。
						color:'rgba(204,204,204,0.5)', 
					},
				
				},
				}
			],
			series : [
				{
					name:'直接访问',
					type:'bar',
					barWidth: '60%',
					data:[56, 22, 20, 34, 23, 30, 5]
				}
			]
	 };