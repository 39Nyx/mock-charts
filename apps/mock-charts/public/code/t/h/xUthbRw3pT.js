//设置变量
	var data=[];
	var datax=[];
	var datamachine=[];
	var dataShadow = [];
	for(var i=0;i<20;i++){
	    data.push(Math.floor(Math.random()*10))
	    datax.push(Math.floor(Math.random()*10))
	    datamachine.push(Math.floor(Math.random()*10))
	}
var yMax=Math.max(data)
	for(var i = 0; i < data.length; i++) {
		dataShadow.push(yMax);
	}
	
	//网格制作
	var data1 = [];
	var data2 = [];
	for(var i = 1; i < 50; i++) {
		data1.push(i);
	}
	for(var i = 1; i < 25; i++) {
		data2.push(i);
	}

	
	option = {
		tooltip: {
			show: true,
			trigger: 'axis',
			axisPointer: {
				type: 'none'
			},
			formatter: function(a){
	        	return '设备：'+a[0].axisValue+'<br/>报警次数：'+a[0].data+'次';
	        }
		},
		xAxis: [
			{
				name: '设备',
				data: datax,
				axisLabel: {
					rotate: '-90',
					interval: 0
				},
				splitLine: {
					show: false
				}
			},
			{
				type: 'category',
				// 坐标轴值
				axisLabel: {
					show: false
				},
				// 分割线
				splitLine: {
					show: true,
					interval: 0
				},
				// 坐标轴刻度线
				axisTick: {
					show: false,
					alignWithLabel: true
				},
				// 坐标轴
				axisLine: {
					show: false,
					onZero: false
				},
				data: data1
			}
		],
		yAxis: [{
				name: '报警次数（次）',
				splitLine: {
					show: false
				}
			},
			{
				type: 'category',
				// 坐标轴值
				axisLabel: {
					show: false
				},
				// 分割线
				splitLine: {
					show: true,
					interval: 0
				},
				// 坐标轴刻度线
				axisTick: {
					show: false,
					alignWithLabel: true
				},
				// 坐标轴
				axisLine: {
					show: false,
					onZero: false
				},
				data: data2
			}
		],
		grid: {
			show: false,
			left: 20,
			right: 20,
			top: 30,
			bottom: 60,
			containLabel: true
		},
		series: [{
				type: 'bar',
				itemStyle: {
					normal: {
            			color: 'rgba(0,0,0,0.05)'
            		}
				},
				barGap: '-100%',
				barCategoryGap: '40%',
				animation: false
			},
			{
				type: 'bar',
				itemStyle: {
					normal:  {
            			color: new echarts.graphic.LinearGradient(
            				0, 0, 0, 1, [{
            						offset: 0,
            						color: '#ff323c'
            					},
            					{
            						offset: 1,
            						color: '#ffc0c3'
            					}
            				]
            			)
            		}
				},
				barMaxWidth:'64px', 
				data: data
			}
		]
	};