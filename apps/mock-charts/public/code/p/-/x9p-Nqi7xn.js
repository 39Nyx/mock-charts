option = {
	color: ["#29CB97", "#4072EE", "#FDAC41"],
	title: {
		left: "center",
		text: "A/B",
		textStyle: {
			color: "#748AA1"
		}
	},
	xAxis: {
		type: "category",
		axisLine: {
			lineStyle: {
				color: "#748AA1"
			}
		},
		axisTick: {
			lineStyle: {
				color: "#748AA1"
			}
		},
		axisLabel: {
			color: "#748AA1"
		},
		data: ["2021-12-04 13:00:00", "2021-12-04 14:00:00"]
	},
	yAxis: [{
		name: "A(kn)",
		min: 0,
		max: 16,
		interval: 4,
		type: "value",
		axisLine: {
			lineStyle: {
				color: "#748AA1"
			}
		},
		axisTick: {
			lineStyle: {
				color: "#748AA1"
			}
		},
		axisLabel: {
			color: "#748AA1"
		}
	}, {
		name: "B(rpm)",
		min: 0,
		max: 96,
		interval: 24,
		type: "value",
		axisLine: {
			lineStyle: {
				color: "#748AA1"
			}
		},
		axisTick: {
			lineStyle: {
				color: "#748AA1"
			}
		},
		axisLabel: {
			color: "#748AA1"
		}
	}],
	tooltip: {
		trigger: "axis",
		axisPointer: {
			type: "cross"
		},
		backgroundColor: "rgba(245, 245, 245, 0.8)",
		borderWidth: 1,
		borderColor: "#ccc",
		padding: 10,
		textStyle: {
			color: "#748AA1"
		}
	},
	axisPointer: {
		link: {
			xAxisIndex: "all"
		},
		label: {
			backgroundColor: "#777"
		}
	},
	toolbox: {
		feature: {
			dataZoom: {
				yAxisIndex: false
			},
			brush: {
				type: ["lineX", "clear"]
			}
		}
	},
	dataZoom: [{
		type: "slider",
		show: true,
		xAxisIndex: [0],
		top: "85%",
		start: 0,
		end: 100
	}, {
		type: "slider",
		show: true,
		yAxisIndex: [0],
		left: "92%",
		start: 0,
		end: 100
	}, {
		type: "inside",
		xAxisIndex: [0],
		start: 0,
		end: 100
	}, {
		type: "inside",
		yAxisIndex: [0],
		start: 0,
		end: 100
	}],
	legend: {
		top: 30,
		data: ["A", "B"],
		textStyle: {
			color: "#748AA1"
		}
	},
	grid: {
		left: "10%",
		right: "10%",
		bottom: "15%",
		containLabel: true
	},
	series: [{
		name: "A",
		symbol: "none",
		data: [6.55, 11.02],
		type: "line",
		connectNulls: false,
		symbolSize: 8
	}, {
		name: "B",
		symbol: "none",
		data: [6.69, 11.66],
		type: "line",
		connectNulls: false,
		symbolSize: 8
	}]
}
