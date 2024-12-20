option = {
	"yAxis": [{
		"axisLabel": {
			"formatter": function(value, index) {return value.toFixed(2);},
			"show": true
		},
		"min": 4.14,
		"gridIndex": 0,
		"max": 47.05,
		"axisLine": {
			"show": true
		}
	}],
	"xAxis": [{
		"data": ["2017-12-17", "2017-12-18", "2017-12-19", "2017-12-20", "2017-12-21", "2017-12-22", "2017-12-23", "2017-12-24", "2017-12-25", "2017-12-26", "2017-12-27", "2017-12-28", "2017-12-29", "2017-12-30", "2017-12-31", "2018-01-01", "2018-01-02", "2018-01-03", "2018-01-04", "2018-01-05", "2018-01-06", "2018-01-07", "2018-01-08", "2018-01-09", "2018-01-10", "2018-01-11", "2018-01-12", "2018-01-13", "2018-01-14", "2018-01-15"],
		"gridIndex": 0
	}],
	"grid": [{
		"bottom": "10%",
		"width": "100%",
		"x": "5%",
		"y": "10%"
	}],
	"legend": {
		"data": [{
			"name": "近三十天"
		}, {
			"name": "本月日均"
		}, {
			"name": "日均目标"
		}],
		"selectedMode": true,
		"right": "center"
	},
	"series": [{
		"data": [41.82, 46.77, 47.05, 46.78, 45.86, 42.66, 38.98, 38.58, 42.67, 41.15, 39.17, 37.31, 35.12, 32.5, 30.38, 25.63, 39.35, 38.75, 24.76, 37.15, 38.85, 38.66, 41.57, null, null, null, null, null, null, 39.51],
		"xAxisIndex": 0,
		"name": "近三十天",
		"itemStyle": {
			"normal": {
				"label": {
					"show": true,
					"position": "top",
					"textStyle": {
						"fontFamily": "微软雅黑",
						"fontSize": "12",
						"fontWeight": "bolder"
					}
				}
			}
		},
		"type": "line",
		"yAxisIndex": 0
	}, {
		"data": [38.78, 38.78, 38.78, 38.78, 38.78, 38.78, 38.78, 38.78, 38.78, 38.78, 38.78, 38.78, 38.78, 38.78, 38.78, 38.78, 38.78, 38.78, 4.14, 33.13, 34.08, 34.74, 35.59, null, null, null, null, null, null, 37.88],
		"xAxisIndex": 0,
		"name": "本月日均",
		"itemStyle": {
			"normal": {
				"label": {
					"show": true,
					"position": "top",
					"textStyle": {
						"fontFamily": "微软雅黑",
						"fontSize": "12",
						"fontWeight": "bolder"
					}
				}
			}
		},
		"type": "line",
		"yAxisIndex": 0
	}, {
		"data": [31.56, 31.56, 31.56, 31.56, 31.56, 31.56, 31.56, 31.56, 31.56, 31.56, 31.56, 31.56, 31.56, 31.56, 31.56, 31.56, 31.56, 31.56, 31.56, 31.56, 31.56, 31.56, 31.56, null, null, null, null, null, null, 31.56],
		"xAxisIndex": 0,
		"name": "日均目标",
		"itemStyle": {
			"normal": {
				"label": {
					"show": true,
					"position": "top",
					"textStyle": {
						"fontFamily": "微软雅黑",
						"fontSize": "12",
						"fontWeight": "bolder"
					}
				}
			}
		},
		"type": "line",
		"yAxisIndex": 0
	}],
	"tooltip": {
		"trigger": "axis"
	}
};