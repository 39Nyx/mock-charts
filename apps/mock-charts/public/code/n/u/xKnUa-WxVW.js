function tooltipCharts() {
	console.log(arguments[0]);
	var myChart = echarts.init(document.getElementById('tooltipBarId'));
	var option = {
		tooltip: {},
		dataset: {
			source: [
				['xAxis', '201701', '201702', '201703', '201704', '201705', '201706', '201707', '201708', '201709', '20170', '201710', '20170', '201801'],
				['amount', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7, 65.1, 53.3, 41.1, 30.4, 53.3, 41.1, 53.3, 83.8]
			]
		},
		xAxis: { type: 'category', interval: true, axisLabel: { rotate: 45 }, axisTick: { show: false } },
		yAxis: {}, color: ['#4FA8F9', '#F5A623'],
		grid: { show: true, backgroundColor: '#FAFAFA', left: 30, right: 20, top: 20 },
		series: [
			{ type: 'bar', smooth: true, seriesLayoutBy: 'row', barWidth: 10 }
		]
	};
	myChart.setOption(option);
}

option = {
    title: {
        text: '气泡图测试',
        right:'center',
        top:'1%'
    },
    legend: {
        right: 10,
        data: ['1990', '2015']
    },
    tooltip: {
			alwaysShowContent: true,
			//position: ['50%', '50%'],
			//triggerOn: 'none',
			//trigger: 'item',
			//confine:true,	//设置tooltip在图形区域内
			padding: 0,
			enterable: true,
			transitionDuration: 1,
			textStyle: {
				color: '#000',
				decoration: 'none',
			},
			position: function (point, params, dom, rect, size) {
				return [point[0], point[1]];
			},
			formatter: function (params) {
				 console.log(params.name)
				var tipHtml = '';
				tipHtml = '<div style="height:360px;width:400px;border-radius:5px;background:#fff;box-shadow:0 0 10px 5px #aaa">' +
					'    <div style="height:50px;width:100%;border-radius:5px;background:#F8F9F9;border-bottom:1px solid #F0F0F0">' +
					'        <span style="line-height:50px;margin-left:18px">' + params.name + '</span>' +
					'        <span style="float:right;line-height:50px;margin-right:18px;color:#5396E3;cursor:pointer" onclick="mapTooltipClick(this);">点击查看详情</span>' +
					'    </div>' +
					'    <div style="height:110px;width:100%;background:#fff">' +
					'        <div style="padding-left:18px;padding-top:22px">' +
					'            <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:rgba(92,169,235,1)"></span> ' +
					'            <span>上传表格数量</span>' +
					'            <span style="float:right;margin-right:18px">' + params.data[0] + '</span>' +
					'        </div>' +
					'        <div style="padding-left:18px;padding-top:14px">' +
					'            <span style="display:inline-block;margin-right:5px;width:10px;height:10px;background-color:rgba(92,169,235,1)"></span> ' +
					'            <span>上传数据条数</span>' +
					'            <span style="float:right;margin-right:18px">' + params.data[1] + '</span>' +
					'        </div>' +
					'    </div>' +
					'    <div id="tooltipBarId" style="height:200px;width:100%;border-radius:0 0 5px 0;background:#fff"></div>' +
					'</div>';
				setTimeout(function () {
					tooltipCharts(params.name);
				}, 10);
				return tipHtml;
			}
		},
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        /*splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        }*/
    },
    yAxis: {},
    series: [{
        type: 'scatter',
        name:'1990',
        symbol: 'circle',//'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
        symbolSize: function (data) {
            return Math.sqrt(data[1]) * 2;
        },
        label: {
            emphasis: {
                show: true,
                formatter: function (param) {
                    return param.data[2];
                },
                position: 'top'
            }
        },
        data:[
            ['Sun',50],
            ['Mon',210],
            ['Tue',90],
            ['Wed',234],
            ['Thu',100],
            ['Fri',330],
            ['Sat',400]
        ],
        animationDelay: function(idx) { //延迟展现效果
            return idx * 2000;
        },
        progressive: 3000
    }],
    animationDelayUpdate: function(idx) {
        return idx * 1500;
    }
};

myChart.setOption(option);
    
    var data = [['Sun', 50],
		['Mon', 210],
		['Tue', 90],
		['Wed', 234],
		['Thu', 100],
		['Fri', 330],
		['Sat', 400]
	];
    var count = 0;
	var dataLength = data.length;
	var dataIndex_ = (count) % dataLength;
	var timeTicket = null;
	timeTicket && clearInterval(timeTicket);
	timeTicket = setInterval(function () {
		myChart.dispatchAction({
			type: 'downplay',
			seriesIndex: 0,
		});
		myChart.dispatchAction({
			type: 'highlight',
			seriesIndex: 0,
			dataIndex: (count) % dataLength
		});
		myChart.dispatchAction({
			type: 'showTip',
			seriesIndex: 0,
			dataIndex: (count) % dataLength
		});
		
		count++;
	}, 2000);