var data= {
	"moduleName": "企业智能制造能力成熟度",
	"tu": ["维度得分", "对比得分1", "对比得分2", "对比得分3"],
	"indicator": [{
		"name": "组织战略"
	}, {
		"name": "人员技能"
	}, {
		"name": "数据"
	}, {
		"name": "集成"
	}, {
		"name": "信息安全"
	}, {
		"name": "装备"
	}, {
		"name": "网络"
	}, {
		"name": "产品设计"
	}, {
		"name": "工艺设计"
	}, {
		"name": "采购"
	}, {
		"name": "计划与调度"
	}, {
		"name": "生产作业"
	}, {
		"name": "设备管理"
	}, {
		"name": "仓储配送"
	}, {
		"name": "安全环保"
	}, {
		"name": "能源管理"
	}, {
		"name": "物流"
	}, {
		"name": "销售"
	}, {
		"name": "产品服务"
	}, {
		"name": "客户服务"
	}, {
		"name": "经营管控"
	}, {
		"name": "融合管理"
	}, {
		"name": "IT运维"
	}],
	"arr": [{
		"areaStyle": {
			"normal": {
				"opacity": 0.3
			}
		},
		"value": ["2.55", "2.68", "2.95", "2.7", "2.9", "2.86", "3.7", "3.875", "2.825", "3.433333333", "3.2", "2.7", "2.225", "2.975", "2.433333333", "1.56", "2.75", "3.34", "2.05", "2.533333333", "3.14", "1.366666667", "3.35"],
		"name": "维度得分"
	}, {
		"areaStyle": {
			"normal": {
				"opacity": 0.3
			}
		},
		"value": ["0", "2", "3", "4", "5", "2", "4", "2", "3", "4", "5", "2", "4", "2", "3", "4", "5", "2", "4", "3.5", "4.5", "2.5", "2.5"],
		"name": "对比得分1"
	}, {
		"areaStyle": {
			"normal": {
				"opacity": 0.3
			}
		},
		"value": ["4", "2", "5", "5", "2", "4", "4", "4", "2", "5", "5", "2", "4.6", "4", "3.8", "2", "5", "5", "2", "4.6", "4", "3.9", "3.4"],
		"name": "对比得分2"
	}, {
		"areaStyle": {
			"normal": {
				"opacity": 0.3
			}
		},
		"value": ["2", "2", "4", "4", "5", "4", "3", "2", "5", "5", "2", "4.6", "4", "3.8", "2", "5", "5", "2", "4.6", "4", "3.9", "3.4"],
		"name": "对比得分3"
	}]
}
option = {
    backgroundColor: '#fff',
    color: ['#4cc9f0', '#4895ef', '#4361ee', '#3f37c9', '#3a0ca3', '#480ca8', '#560bad', '#7209b7', '#b5179e', '#f72585'],
    title: {
        left: '10',
        text: data.moduleName,
        textStyle: {
            align: 'center',
            color: '#4DCEF8',
            fontSize: 18,

        }
    },
    tooltip: {},
    legend: {
        orient: 'vertical',
        x: 'left',
        left: '10',
        data: data.tu,
        top: '15%',
        textStyle: {
            color: '#4DCEF8'
        }
    },
    radar: {
        center: ['60%', '50%'],
        name: {
            textStyle: {
                color: '#72ACD1'
            }
        },
        splitArea: {
            areaStyle: {
                color: ['rgba(81, 106, 134, 1)',
                    'rgba(81, 106, 134, 0.8)', 'rgba(81, 106, 134, 0.6)',
                    'rgba(81, 106, 134, 0.4)', 'rgba(81, 106, 134, 0.2)'
                ]
            }
        },
        indicator: data.indicator
    },
    series: [{
        name: '',
        type: 'radar',
        data:data.arr
    }]
};