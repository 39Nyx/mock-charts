option ={
	"title": {
		"text": "lhl上下多人测试",
		"x": "center",
		"bottom": "0"
	},
	"color": ["#f6ab32", "#f57e46", "#e35857", "#ac58c2", "#4eb468", "#51c4d0", "#5aabe6", "#6f7fe7"],
	"tooltip": {
		"trigger": "axis",
		"axisPointer": {
			"type": "shadow",
			"shadowStyle": {
				"color": "rgba(0,0,0,0)"
			}
		},
		"textStyle": {
			"color": "#fff"
		}
	},
	"grid": {
		"left": "70px"
	},
	"legend": {
		"show": true,
		"data": ["北京", "天津", "河北"],
		"selectedMode": false
	},
	"xAxis": [{
		"type": "category",
		"data": ["老客户购买", "新签客户", "替换对手"],
		"axisTick": {
			"show": false
		},
		"axisLine": {
			"show": true,
			"lineStyle": {
				"color": "#439cdc",
				"width": 2
			}
		},
		"z": 2,
		"axisLabel": {
			"textStyle": {
				"color": "#333333"
			},
			"rotate": 20,
			"margin": 5,
			"interval": 0
		}
	}, {
		"show": false,
		"type": "category",
		"data": ["老客户购买", "新签客户", "替换对手"]
	}],
	"yAxis": {
		"type": "value",
		"scale": true,
		"max": 100,
		"min": 0,
		"axisLabel": {
			"formatter": "{value}  %"
		}
	},
	"series": [{
		"name": "北京规划",
		"type": "bar",
		"xAxisIndex": 1,
		"z": 3,
		"label": {
			"normal": {
				"show": true,
				"position": "top",
				"textStyle": {
					"color": "#000"
				}
			}
		},
		"itemStyle": {
			"normal": {
				"color": "rgba(251, 251, 251, 0)",
				"borderWidth": 2,
				"borderColor": "#505050"
			}
		},
		"barMaxWidth": 35,
		"data": [{
			"value": 100,
			"num": 40
		}, {
			"value": 100,
			"num": 6
		}, {
			"value": 100,
			"num": 0
		}]
	}, {
		"name": "北京累计实际",
		"type": "bar",
		"label": {
			"normal": {
				"show": true,
				"position": "top"
			}
		},
		"barMaxWidth": 35,
		"data": [{
			"value": "30.000",
			"num": 12,
			"per": true
		}, {
			"value": "66",
			"num": 4,
			"per": true
		}, {
			"value": "NaN",
			"num": 0,
			"per": true
		}]
	}, {
		"name": "天津规划",
		"type": "bar",
		"xAxisIndex": 1,
		"z": 3,
		"label": {
			"normal": {
				"show": true,
				"position": "top",
				"textStyle": {
					"color": "#000"
				}
			}
		},
		"itemStyle": {
			"normal": {
				"color": "rgba(251, 251, 251, 0)",
				"borderWidth": 2,
				"borderColor": "#505050"
			}
		},
		"barMaxWidth": 35,
		"data": [{
			"value": 100,
			"num": 45
		}, {
			"value": 100,
			"num": 6
		}, {
			"value": 100,
			"num": 0
		}]
	}, {
		"name": "天津累计实际",
		"type": "bar",
		"label": {
			"normal": {
				"show": true,
				"position": "top"
			}
		},
		"barMaxWidth": 35,
		"data": [{
			"value": "26.667",
			"num": 12,
			"per": true
		}, {
			"value": "66.667",
			"num": 4,
			"per": true
		}, {
			"value": "NaN",
			"num": 0,
			"per": true
		}]
	}, {
		"name": "河北规划",
		"type": "bar",
		"xAxisIndex": 1,
		"z": 3, 
		"label": {
			"normal": {
				"show": true,
				"position": "top",
				"textStyle": {
					"color": "#000"
				}
			}
		},
		"itemStyle": {
			"normal": {
				"color": "rgba(251, 251, 251, 0)",
				"borderWidth": 2,
				"borderColor": "#505050"
			}
		},
		"barMaxWidth": 35,
		"data": [{
			"value": 100,
			"num": 45
		}, {
			"value": 100,
			"num": 0
		}, {
			"value": 100,
			"num": 0
		}]
	}, {
		"name": "河北累计实际",
		"type": "bar",
		"label": {
			"normal": {
				"show": true,
				"position": "top"
			}
		},
		"barMaxWidth": 35,
		"data": [{
			"value": "26.667",
			"num": 12,
			"per": true
		}, {
			"value": "Infinity",
			"num": 8,
			"per": true
		}, {
			"value": "NaN",
			"num": 0,
			"per": true
		}]
	}]
}