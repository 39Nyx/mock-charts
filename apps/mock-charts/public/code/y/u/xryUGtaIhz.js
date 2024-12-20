function randomData() {
	now = new Date(+now + oneDay);
	value = parseInt(Math.random()*(70-30+1)+30);
	
	var minute=now.getMinutes()<10?'0'+now.getMinutes():now.getMinutes();
	var second=now.getSeconds()<10?'0'+now.getSeconds():now.getSeconds();
	return { 
		name: now.toString(),
		value: [
			[now.getFullYear(), now.getMonth(), now.getDate()].join('/')+" "+[now.getHours(),minute,second].join(':'),
			value
		]
	}
}
var data = [];
var data_test;
var now = new Date();
var oneDay = 1000;
var value = 100;
for (var i = 0; i < 200; i++) {
	data.push(randomData());
}

option = {
 title: {
		text: "心电图测试",
		top: 15, left: 'center',  
		textStyle: {
			color: 'rgb(153, 153, 153)',
			fontSize: 22,
			fontWeight: 500
		}
	},
	animation: false,
	grid: {
		show: false,
		containLabel: false,
		top: 200, right: 1, bottom: 400, left: 1
	},
	
    xAxis: {
		interval: 1000,
        type: 'time',
        show: false,
        axisLine: {show:true},
        axisTick: {show:false},
        splitLine: {
        	lineStyle: {
        		color: ['rgb(253, 207, 225)','rgb(253, 234, 237)', 'rgb(253, 234, 237)', 'rgb(253, 234, 237)', 'rgb(253, 234, 237)'],
        		type: 'solid',
        		width: 1
        	}
        }
    },
    yAxis: { 
        type: 'value',
        interval: 2,
        z: 2,
        min: 0, max: 100,
        boundaryGap: [0, '100%'],
        axisLine: {show:false},
        axisTick: {show:false},
        splitLine: {
        	lineStyle: {
				color: ['rgb(253, 207, 225)','rgb(253, 234, 237)', 'rgb(253, 234, 237)', 'rgb(253, 234, 237)', 'rgb(253, 234, 237)'],
        		type: 'solid'
        	}
        }
    },
    series: [{
        name: '模拟数据', type: 'line', smooth: true, showSymbol: false, hoverAnimation: false, z: 5,
        data: data,
        lineStyle: {
        	width: 1,
        	color: '#000000'
        },
    }]
};

setInterval(function () {
	data.shift();
	data_test=randomData();
	data.push(data_test);
	myChart.setOption({
		series: [{
			data: data
		}]
	});
}, 1000);