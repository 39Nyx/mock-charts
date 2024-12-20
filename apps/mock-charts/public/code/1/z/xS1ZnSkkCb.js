
	function colorAreaObj(name, color) {
	    this.name = name;
	    this.itemStyle = {
	        normal: {
	            color: color,
	            show: false,
	        },
	        emphasis: {
	            color: color,
	            show: false,
	        }
	    };
	    this.label = {
	        normal: {
	            show: true,
	        },
	        emphasis: {
	            show: true,
	        }
	    }
	}

    var colorAreaConfig = [
       //业务二部
       { name: '甘肃', color: "rgba(47,144,236,1)" },
       { name: '新疆', color: "rgba(47,144,236,1)" },
       { name: '宁夏', color: "rgba(47,144,236,1)" },
       { name: '青海', color: "rgba(47,144,236,1)" },
       { name: '黑龙江', color: "rgba(47,144,236,1)" },
       { name: '吉林', color: "rgba(47,144,236,1)" },
       { name: '辽宁', color: "rgba(47,144,236,1)" },
       { name: '山西', color: "rgba(47,144,236,1)" },
       { name: '内蒙古', color: "rgba(47,144,236,1)" },
       { name: '广西', color: "rgba(47,144,236,1)" },
       { name: '江苏', color: "rgba(47,144,236,1)" },
       { name: '四川', color: "rgba(47,144,236,1)" },
       { name: '重庆', color: "rgba(47,144,236,1)" },
       { name: '天津', color: "rgba(47,144,236,1)" },
       //业务三部
       { name: '河南', color: "rgba(155,255,255,1)" },
       { name: '河北', color: "rgba(155,255,255,1)" },
       { name: '江西', color: "rgba(155,255,255,1)" },
       { name: '安徽', color: "rgba(155,255,255,1)" },
       { name: '山东', color: "rgba(155,255,255,1)" },
       { name: '云南', color: "rgba(155,255,255,1)" },
       { name: '贵州', color: "rgba(155,255,255,1)" },
       //业务八部
       { name: '北京', color: "rgba(254,62,62,1)" },
       { name: '福建', color: "rgba(254,62,62,1)" },
       { name: '广东', color: "rgba(254,62,62,1)" },
       { name: '海南', color: "rgba(254,62,62,1)" },
       { name: '湖北', color: "rgba(254,62,62,1)" },
       { name: '陕西', color: "rgba(254,62,62,1)" },
       { name: '湖南', color: "rgba(254,62,62,1)" },
       //公司直营
       { name: '浙江', color: "rgba(176,58,91,1)" },
       { name: '上海', color: "rgba(176,58,91,1)" },
    ];

	var data = [];

	data = colorAreaConfig.map(function(v, i) {
	    return new colorAreaObj(v.name, v.color)
	})

	var markPointData = [{
	        "name": "杭州",
	        "coord": [
	            120.19, 30.26
	        ],
	        "runTime": '537',
	        "unitCount": '234',
	        "onlineRate": '42%',
	        "errors": '624',
	        "preErrors": '127'
	    },
	    {
	        "name": "上海",
	        "coord": [
	            121.48, 31.22
	        ],
	        "runTime": '120',
	        "unitCount": '196',
	        "onlineRate": '38%',
	        "errors": '432',
	        "preErrors": '85',
	        "value": '9'
	    },
	    {
	        "name": "温州",
	        "coord": [
	            120.65, 28.01
	        ],
	        "runTime": '50',
	        "unitCount": '120',
	        "onlineRate": '32%',
	        "errors": '252',
	        "preErrors": '60'
	    }
	];

	option = {
	    "tooltip": {
	        "trigger": 'item',
	        "formatter": function(params) {
	            if (params.seriesIndex == 0 && JSON.stringify(markPointData).indexOf(params.name) > -1&& params.data.unitCount) {
	                return '<p class="t-l">城市:' + params.name + '</p><p class="t-l">覆盖' + params.data.unitCount + '个小区</p><p class="t-l">数据1:  ' + params.data.onlineRate +
	                    '</p><p class="t-l">数据2:  ' + params.data.errors + '</p><p class="t-l">数据3:  ' + params.data.preErrors + '<p>'
	            }
	        },
	        "backgroundColor": 'rgba(13,26,52,1)',
	        "borderWidth": '2px',
	        "borderRadius": '0px',
	        "borderColor": 'rgba(94,194,222,1)',
	        "textStyle": {
	            "color": 'rgba(94,194,222,1)'
	        }
	    },
	     legend: {
	         orient: 'horizontal',
	         left: '160',
	         data:[ ]
	     },
	    "series": [{
	        "name": "中国",
	        "type": "map",
	        "mapType": "china",
	        "zoom": 1.2,
	        "selectedMode": false,
	        "layoutCenter": ['50%', '53%'],
	        "layoutSize": "102%",
	        "label": {
	            "normal": {
	                "show": true,
	                "textStyle": {
                        "color": "#fff",
                        "fontSize": "12"
                    }
	            },
	            "emphasis": {
	                "show": true,
	                "textStyle": {
                        "color": "#fff",
                        "fontSize": "12"
                    }
	            }
	        },
	        "itemStyle": {
	            "normal": {
	                "areaColor": "rgba(51, 69, 89, .5)",
	                "borderWidth": 1.5,
	                "borderColor": "#1f5c94",
	                "textStyle": {
                        "color": "#fff",
                        "fontSize": "12"
                    }
	            },
	            "emphasis": {
	                "areaColor": "rgba(51, 69, 89, .5)",
	                "textStyle": {
                        "color": "#fff",
                        "fontSize": "12"
                    }
	            }
	        },
	        "data": data,
	        "markPoint": {
	            "symbol": "circle",
	            "symbolSize":9,
	            "label": {
	                "normal": {
	                    "show": false,
	                },
	                "emphasis": {
	                    show: false,
	                }
	            },
	            "itemStyle": {
	                "normal": {
	                    "color": 'rgb(0,255,0)'
	                }
	            },
	            "data": markPointData
	        }
	    }]
	}