var all = [{"name":"台湾","value":0,"itemStyle":null},{"name":"澳门","value":0,"itemStyle":null},{"name":"香港","value":0,"itemStyle":null},{"name":"西藏","value":2,"itemStyle":{"emphasis":{"areaColor":"#FFD2D2"},"normal":{"areaColor":"#FFD2D2"}}},{"name":"青海","value":3,"itemStyle":{"emphasis":{"areaColor":"#FFD2D2"},"normal":{"areaColor":"#FFD2D2"}}},{"name":"宁夏","value":29,"itemStyle":{"emphasis":{"areaColor":"#FFD2D2"},"normal":{"areaColor":"#FFD2D2"}}},{"name":"重庆","value":44,"itemStyle":{"emphasis":{"areaColor":"#FFB5B5"},"normal":{"areaColor":"#FFB5B5"}}},{"name":"贵州","value":74,"itemStyle":{"emphasis":{"areaColor":"#FFB5B5"},"normal":{"areaColor":"#FFB5B5"}}},{"name":"甘肃","value":244,"itemStyle":{"emphasis":{"areaColor":"#FF9797"},"normal":{"areaColor":"#FF9797"}}},{"name":"云南","value":274,"itemStyle":{"emphasis":{"areaColor":"#FF9797"},"normal":{"areaColor":"#FF9797"}}},{"name":"辽宁","value":490,"itemStyle":{"emphasis":{"areaColor":"#FF7575"},"normal":{"areaColor":"#FF7575"}}},{"name":"新疆","value":559,"itemStyle":{"emphasis":{"areaColor":"#FF7575"},"normal":{"areaColor":"#FF7575"}}},{"name":"黑龙江","value":632,"itemStyle":{"emphasis":{"areaColor":"#FF5151"},"normal":{"areaColor":"#FF5151"}}},{"name":"上海","value":716,"itemStyle":{"emphasis":{"areaColor":"#FF5151"},"normal":{"areaColor":"#FF5151"}}},{"name":"四川","value":780,"itemStyle":{"emphasis":{"areaColor":"#FF2D2D"},"normal":{"areaColor":"#FF2D2D"}}},{"name":"广西","value":889,"itemStyle":{"emphasis":{"areaColor":"#FF2D2D"},"normal":{"areaColor":"#FF2D2D"}}},{"name":"吉林","value":936,"itemStyle":{"emphasis":{"areaColor":"#FF0000"},"normal":{"areaColor":"#FF0000"}}},{"name":"内蒙古","value":1031,"itemStyle":{"emphasis":{"areaColor":"#FF0000"},"normal":{"areaColor":"#FF0000"}}},{"name":"天津","value":1746,"itemStyle":{"emphasis":{"areaColor":"#EA0000"},"normal":{"areaColor":"#EA0000"}}},{"name":"江西","value":2106,"itemStyle":{"emphasis":{"areaColor":"#EA0000"},"normal":{"areaColor":"#EA0000"}}},{"name":"湖南","value":2564,"itemStyle":{"emphasis":{"areaColor":"#CE0000"},"normal":{"areaColor":"#CE0000"}}},{"name":"陕西","value":3000,"itemStyle":{"emphasis":{"areaColor":"#CE0000"},"normal":{"areaColor":"#CE0000"}}},{"name":"浙江","value":3049,"itemStyle":{"emphasis":{"areaColor":"#AE0000"},"normal":{"areaColor":"#AE0000"}}},{"name":"广东","value":3295,"itemStyle":{"emphasis":{"areaColor":"#AE0000"},"normal":{"areaColor":"#AE0000"}}},{"name":"福建","value":3297,"itemStyle":{"emphasis":{"areaColor":"#930000"},"normal":{"areaColor":"#930000"}}},{"name":"北京","value":3803,"itemStyle":{"emphasis":{"areaColor":"#930000"},"normal":{"areaColor":"#930000"}}},{"name":"海南","value":7491,"itemStyle":{"emphasis":{"areaColor":"#750000"},"normal":{"areaColor":"#750000"}}},{"name":"湖北","value":9582,"itemStyle":{"emphasis":{"areaColor":"#750000"},"normal":{"areaColor":"#750000"}}},{"name":"安徽","value":11617,"itemStyle":{"emphasis":{"areaColor":"#600000"},"normal":{"areaColor":"#600000"}}},{"name":"河南","value":13017,"itemStyle":{"emphasis":{"areaColor":"#600000"},"normal":{"areaColor":"#600000"}}},{"name":"江苏","value":24686,"itemStyle":{"emphasis":{"areaColor":"#4D0000"},"normal":{"areaColor":"#4D0000"}}},{"name":"山西","value":29654,"itemStyle":{"emphasis":{"areaColor":"#4D0000"},"normal":{"areaColor":"#4D0000"}}},{"name":"山东","value":59154,"itemStyle":{"emphasis":{"areaColor":"#2F0000"},"normal":{"areaColor":"#2F0000"}}},{"name":"河北","value":87813,"itemStyle":{"emphasis":{"areaColor":"#2F0000"},"normal":{"areaColor":"#2F0000"}}}];

option = {
	backgroundColor: '#404A59',
	title: {
		text: '抗日烈士籍贯分布',
		x: 'center',
		textStyle: {
			color: '#FFF'
		}
	},
	tooltip: {
		trigger: 'item',
		formatter: '{b} {c} 人'
	},
	legend: {
		show: false,
	},
	series: [{
		name: 'data',
		type: 'map',
		mapType: 'china',
		roam: false,
		showLegendSymbol: false,
		data: all,
		itemStyle: {
			emphasis: {
				areaColor: '#DC143C'
			}
		},
		label: {
			normal: {
				show: false
			},
			emphasis: {
				show: false
			}
		}
	}]
};