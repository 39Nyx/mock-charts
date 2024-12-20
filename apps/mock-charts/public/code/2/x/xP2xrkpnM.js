//对话框图片
var uploadedDataURL = "/asset/get/s/data-1547533200844-7eBMgp66l.png";

option = {
    	grid: {
							left: -10,
        					right: -10,
							top: 26,
							bottom: 10,
							containLabel: true
						},
						xAxis: {
							type: 'category', 
							data: ['2.20', '2.21', '2.22', '2.23', '2.24', '2.25', '2.26'],
							axisLine: {
								lineStyle:{
									color:'#000000'//x轴线条颜色
								}
							},
							axisPointer: { type: 'shadow'},//展示区域
							axisTick: {//不显示刻度线
								show: false
							},
							axisLabel:{
								textStyle: {
									color: '#101010'//x轴字体颜色
								}
							},
							splitLine:{//设置网格线样式x轴对应的竖线
								show: true,
								lineStyle:{
									color: ['#999999'],
								}   
							} 
							
						},
						yAxis: {
							type: 'value',
							splitLine:{show: false},//不显示横线
							axisLabel : {  show: false,},//y轴不显示数据 
							axisLine: {show: false,},//不显示坐标轴线
							axisTick:{show:false},//不显示坐标轴刻度线
						},
						series: [{
							name:'order',
							data: [14, 21, 22, 10, 18, 12, 15],//订单值
							type: 'line',//折线线条
							symbol: 'circle', //数值点设定为实心点
							itemStyle : {  
								normal : {  
									color: "#02b4fd",//点的颜色
									lineStyle:{  
										color:'#02b3fd'//线的颜色
									} 
								}
							},
							label: {
								show: false,
								distance: 1, 
								formatter: function(params) { 
									var value = params.data; 
									return value;
								},
								emphasis: {
									show: true,
									offset: [1, 0], 
									backgroundColor: {
										image: uploadedDataURL
									},
									color: '#ffffff',
									padding: [6, 6, 6, 6], 
									 
									textStyle: {
										color: '#ffffff'
									},
									
									rich: {
										bg: {
    										backgroundColor: {
                                                image: uploadedDataURL
                                            },
											color: '#ffffff', 
										},
										br: {
											width: '100%',
											height: '100%'
										}

									}
								}
							},
							
						}],
						tooltip: {//指示器展示
							trigger: 'axis', 
							label: {
								show: true
							},
							axisPointer : {  // 坐标轴指示器，坐标轴触发有效
								type : 'shadow',  // 默认为直线，可选为：'line' | 'shadow' 
								shadowStyle : {   // 阴影指示器样式设置
									width: 'auto',   // 阴影大小
									color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ 
										offset: 0,//上半段颜色
											color: 'rgba(254,255,255,0.00)'
										}, {
										offset: .34,//中间段颜色
											color: 'rgba(208,234,252,0.25)'
										},{
										offset: 1,//最下断段颜色
											color: 'rgba(183,223,250,1)'
										}]
									)
								}
							},
							formatter: function(param) {//不展示文本 
								return '';               
							} 
					},
					
				};