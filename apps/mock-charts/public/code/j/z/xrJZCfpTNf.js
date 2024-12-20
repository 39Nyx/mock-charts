option = {
    backgroundColor: '#0E2A43',
	name: 'a',
	tooltip: {
		trigger: 'axis', //按x轴显示
		show: true,
		axisPointer: {
			lineStyle: {
				color: 'none', //不显示线条
			},
		},
		textStyle: {
			align: 'left',
			fontSize: 12,
			color: '#fff',
		},
		extraCssText: 'box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2)' //添加阴影
	},
	color: ['#0580f2', '#faa732', '#677a48'],
	grid: {
		left: '5%',
		right: '6%',
		top: '14%',
		bottom: '6%',
		containLabel: true
	},
	
	xAxis: {
		show: true,
		type: 'category',
		axisTick: {
			show: false
		},
		axisLine: {
			show: false,
			lineStyle: {
				color: '#fff',
			}
		},
		axisLabel: {
			textStyle: {
				fontSize: 14,
				color: '#fff'
			}
		},
		data: ['201705', '201706', '201707', '201708', '201709', '201710','201711','201712']
	},
	yAxis: {
		show: true,
		type: 'value',
		axisTick: {
			show: false
		},
		axisLine: {
			show: false,
		},
		splitLine: {
			show: false,
			lineStyle: {
				color: '#f2f3f7'
			}
		},
		axisLabel: {
			textStyle: {
				fontSize: 12,
				color: '#fff'
			}
		}
	},
	legend: {
        show: true,
        icon: 'circle',
        top: 0,
        textStyle: {
            fontSize: 12,
            color: '#ffffff'
        },
        data: ['学生注册数', '学校注册数', '企业注册数']
    },
	series: [{
		name: '学生注册数',
		type: 'line',
		symbol: 'circle',
		itemStyle: {
			emphasis: {
				symbol: 'circle',
			}
		},
		symbolSize: [8, 8],
		data: [2545, 2853, 2979, 3002, 3026, 3054,3336,3857]
	}, {
		name: '学校注册数',
		type: 'line',
		symbol: 'circle',
		symbolSize: [8, 8],
		data: [124, 130, 130, 130, 130, 1665,1667,1667]
	}, {
		name: '企业注册数',
		type: 'line',
		symbol: 'circle',
		symbolSize: [8, 8],
		data: [208, 344, 366, 384, 415, 526,606,612]
	}]
};
var i = 0;
setInterval(function(){
	if(i==8){
		i = 0;
	}
	showTip(i);
	i++;
}, 1000);

function showTip(i) {
	var j=i;
	myChart.dispatchAction({
	type: 'showTip',
	seriesIndex: 0,
	dataIndex: i
	})
}