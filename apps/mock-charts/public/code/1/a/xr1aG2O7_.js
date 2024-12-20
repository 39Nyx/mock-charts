var json = {
    xAxis:['04-18', '04-25', '05-02', '05-09', '05-16'],
    data:[
        [0, -1, 1, 1.8, 2.8],
        [0, -1.8, -1.2, -5, -4],
        [0, -3, -2, -7, -6]
    ],
    legend:['建议模型', '沪深300', '全资产账户'],
    legends:[0,1,2]
};

myChart.on('legendselectchanged', function(params){
            json.legends=[];
			var selected = [];
			var index = 0;
			echarts.util.each(params.selected, function(value, key){
			    index++;
				if(value){
					selected.push(key);
					json.legends.push(echarts.util.indexOf(json.legend, key));
				}
			});
			console.log(json.legends);
		});

option = {
    color:['#367da2','#dda42d','#505e9c'],
							title: {
								text: '账户收益',
								left: 'center',
								textStyle: {
									fontSize: 18,
									fontWeight: 'normal',
									fontFamily:'Microsoft YaHei'
								},
								top:'7%'
							},
							legend: {
								bottom: '5%',
								data: json.legend
							},
							tooltip: {
			trigger: 'axis',
			padding: 0,
			extraCssText:'box-shadow: 0 0 7px rgba(0, 0, 0, 0.6);',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'line' // 默认为直线，可选为：'line' | 'shadow'
			},
			backgroundColor: 'rgba(255,255,255,0)',
			show: true,
			formatter: function(params) {
				var stl = '';
				$(params).each(function(index, serie) {
					if(serie.componentType === 'series' && serie.dataIndex > 0){
						var colors = myChart.getOption().color;
						var color = colors[json.legends[index] % colors.length];
						stl += '<br /> <div style="display:inline-block;width:10px;height:10px;border-radius:5px;background:'+color+';"></div>&emsp;' + serie.seriesName+':&emsp;'+serie.value;
					}
				});
				return stl ? '<div style="background:#fff;padding:15px;color:#999;border-radius:5px;">' + (params[0] ? params[0].name : params.seriesName) + stl + '</div>' : '';
			}
		},
							xAxis: {
								boundaryGap: false,
								axisLine: {
									onZero: false
								},
								axisTick: {
									show: false
								},
								data: json.xAxis
							},
							yAxis: {
								splitNumber: 6,
								max:3.5,
								min:-7,
								interval:1.75,
								axisLabel: {
									formatter: function (value) {
										return value.toFixed(2) + '%';
									}
								},
								axisLine: {
									show: false
								},
								axisTick: {
									show: false
								},
								splitLine:{
								    lineStyle:{
								        type:'dotted',
								        color:'#666'
								    }
								}
							},
							grid: {
								left: '0%',
								right: '4%',
								bottom: '10%',
								top: '12%',
								containLabel: true
							},
							series: [{
								type: 'line',
								name: '建议模型',
								data: json.data[0]
							}, {
								type: 'line',
								name: '沪深300',
								tooltip:{
									color:"367da2"
								},
								data: json.data[1]
							}, {
								type: 'line',
								name: '全资产账户',
								data: json.data[2]
							}]
						};