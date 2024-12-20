var uploadedDataURL = "/asset/get/s/data-1535703257065-ByZyYu8v7.json";


$.get(uploadedDataURL, function(geoJson) {
    echarts.registerMap('340700', geoJson);
    var geoCoordMap = {
        '枞阳县1': [357, 459],
        '枞阳县2': [357, 429],
        '枞阳县4': [307, 359],
        '枞阳县5': [357, 409],
        '郊区': [627, 429],
        '铜官区': [667, 359],
        '义安区': [757, 309],
    }
    var data = [{
            name: '枞阳县1',
            value: 159
        },
        {
            name: '枞阳县2',
            value: 109
        },
        {
            name: '枞阳县4',
            value: 69
        },
        {
            name: '枞阳县5',
            value: 80
        },
        {
            name: '郊区',
            value: 70
        },
        {
            name: '铜官区',
            value: 152
        },
        {
            name: '义安区',
            value: 209
        }
    ];
    var max = 480,
        min = 9; // todo
    var maxSize4Pin = 100,
        minSize4Pin = 20;
    var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res;
    };
    myChart.setOption(option = {
        backgroundColor: '#0830a1',
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                if (typeof(params.value)[2] == "undefined") {
                    return params.name + ' : ' + params.value;
                } else {
                    return params.name + ' : ' + params.value[2];
                }
            }
        },
        /*legend: {
            show: true,
            orient: 'horizontal',
            icon: 'circle',
            top: 20,
            x: 'center',
            textStyle: {
                color: '#fff'
            },
            data: ['340700']
        },*/
        geo: {
            show: true,
            map: 'tongling',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false,
                }
            },
            roam: false,
            itemStyle: {
                normal: {
                    areaColor: '#031525',
                    borderColor: '#3B5077',
                },
                emphasis: {
                    areaColor: '#21ffff',
                }
            }

        },
        visualMap: {
            show: false,
            min: 1,
            max: 5,
            text: ['High', 'Low'],
            realtime: false,
            calculable: false,
            inRange: {
                color: ['#1a96ff', '#5cbcff', '#3baaff', '#147ef8', '#ff0515']
            }
        },
        series: [{
                name: '340700',
                type: 'map',
                mapType: '340700', // 自定义扩展图表类型
                hoverAnimation: true,
                roam: false,
                itemStyle: {
                    normal: { //未选中状态
                        label: {
                            show: true, //显示名称
                            color: '#0b35ad',
                        }
                    },
                    emphasis: { // 也是选中样式
                        areaColor: '#ffff18', //'#09ffd7'
                        opacity: 0.7,
                        label: {
                            show: true,
                            textStyle: {
                                color: '#0b35ad'
                            }
                        }
                    }
                },
                data: [{
                        name: '枞阳县',
                        value: 1,
                    },
                    {
                        name: '郊区',
                        value: 2,
                    },
                    {
                        name: '铜官区',
                        value: 3,
                    },
                    {
                        name: '义安区',
                        value: 4,
                    }
                ]
            },
            {
                name: '高亮频率特快',
                type: 'effectScatter',
                roam: false,
                coordinateSystem: 'geo',
                data: convertData(data),
                symbolSize: function(val) {
                    return val[2] / 8;
                },
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke',
                    scale: 3, //设置缩放
                    period: 3, //设置时间
                },
                hoverAnimation: true,
                itemStyle: {
                    normal: {
                        normal: {
                            areaColor: '#ff0515',
                            color: '#ff0515',
                            shadowBlur: 10,
                            shadowColor: '#ff0515'
                        }
                    }
                },
                zlevel: 2,
            },

        ]
    });
});