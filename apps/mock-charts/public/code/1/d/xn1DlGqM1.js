var mapName = 'bj';
echarts.registerMap(mapName, eval('(' + bjMap + ')'));
option = {
	backgroundColor: '#fff',
	grid: {
		x: 30,
		y: 0,
		x2: 30,
		y2: 20
	},
	title: {
		x: 'center',
		y: 10,
		text: '北京市各区县XXX值',
		textStyle: {
			color: '#000'
		}
	},
	visualMap: {
		min: 0,
		max: 45000,
		right: '20',
		bottom: '30',
		text: ['高', '低'],
		calculable: true,
		inRange:{
			color: ['yellow','lightskyblue', 'orangered']
		},
		textStyle: {
			color: '#000'
		}
	},
	series: [{
		type: 'map',
		mapType: mapName,
		label: {
			normal: {
				show: true,
				formatter:"{b}",position:"top",marginLeft:10, rotate:45
			},
			emphasis: {
				textStyle: {
					color: '#fff'
				}
			}
		},
		itemStyle: {
			normal: {
				borderColor: '#389BB7',
				areaColor: '#fff',
			},
			emphasis: {
				areaColor: '#389BB7',
				borderWidth: 0
			}
		},
		
		animation: false,
		data: [{
			name: '东城区',
			value: 18163,
			label: {
				normal: {
					show: true,
					textStyle: {
                        fontSize: 6
                    }
				}
			}
		}, {
			name: '西城区',
			value: 22036,
			label: {
				normal: {
					show: true,
					textStyle: {
                        fontSize: 6
                    }
				}
			}
		}, {
			name: '海淀区',
			value: 39825
		}, {
			name: '朝阳区',
			value: 48405
		}, {
			name: '石景山区',
			value: 15212,
			label: {
				normal: {
					show: true,
					textStyle: {
                        fontSize: 8
                    }
				}
			}
		}, {
			name: '大兴区',
			value: 26681
		}, {
			name: '门头沟区',
			value: 11161,
		}, {
			name: '昌平区',
			value: 20687
		}, {
			name: '通州区',
			value: 51488,
		}, {
			name: '房山区',
			value: 23053
		}, {
			name: '丰台区',
			value: 26504
		}, {
			name: '顺义区',
			value: 17247
		}, {
			name: '怀柔区',
			value: 21812
		}, {
			name: '密云区',
			value: 18589
		}, {
			name: '延庆区',
			value: 22211
		}, {
			name: '平谷区',
			value: 16729
		}
		]
	}]
};