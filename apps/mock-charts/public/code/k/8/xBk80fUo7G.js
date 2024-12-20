	var json = [10, 20, 13, 41, 25, 36, 47];
	option = {

	    tooltip: {
	        trigger: 'axis',
	        //功能是转换tooltip中‘undefied’和‘-’的value值为‘暂无’，未使用异步回调，tooltip样式在外部调整
	        formatter: function(params) {
	            var content = '';
	            //两个for将params中需要的参数嵌入HTML代码块字符串content中
	            for (var i = 0; i < params.length; i++) {
	                if (params[i].name) {
	                    content += "<div class='charts-tipc'><p class='charts-p'>" + params[i].name + "</p>";
	                    break;
	                }
	            }
	            //把上下两个相同的数据取消
	            var currValue;
	            for (var i = 0, key = {}; i < params.length; i++) {
	                key = params[i];
	                var flag = typeof key.value === 'undefined' || key.value === '-';
	                if (!flag) {
	                    if (key.value != currValue) {
	                        content += "<p class='charts-p'><i class='charts-r' style='background-color: " + key.color + " '></i> " + key.seriesName + " : " + key.value + "</p>";
	                    }
	                    currValue = key.value;

	                }
	            }
	            content += '</div>';

	            //return出去后echarts会调用html()函数将content字符串代码化
	            return content;
	        }
	    },
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis: {
	        type: 'category',
	        boundaryGap: false,
	        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
	    },
	    yAxis: {
	        type: 'value'
	    },
	    series: [{
	            name: '人数',
	            type: 'line',
	            data: json.slice(0, 2)
	        }, {
	            name: '预测人数',
	            type: 'line',
	            smooth: false, //关键点，为true是不支持虚线，实线就用true
	            itemStyle: {
	                normal: {
	                    lineStyle: {
	                        width: 2,
	                        type: 'dotted' //'dotted'虚线 'solid'实线
	                    }
	                }
	            },
	            data: ['-'].concat(json.slice(1, 4))
	        }, {
	            name: '人数',
	            type: 'line',
	            data: ['-', '-', '-'].concat(json.slice(3, 6))
	        }, {
	            name: '预测',
	            type: 'line',
	            smooth: false, //关键点，为true是不支持虚线，实线就用true
	            itemStyle: {
	                normal: {
	                    lineStyle: {
	                        width: 2,
	                        type: 'dotted' //'dotted'虚线 'solid'实线
	                    }
	                }
	            },

	            data: ['-', '-', '-', '-', '-'].concat(json.slice(5, 7))
	        },

	    ]
	};