var uploadedDataURL = "/asset/get/s/data-1499156198404-H1AJkAOEZ.json";
function showProvince1() {
    var name = 'bj';
    $.get(uploadedDataURL, function(geoJson) {
        echarts.registerMap(name, geoJson);

        myChart.setOption(option = {
            backgroundColor: '#ffffff',
            title: {
                text: "北京市各区房价",
                subtext: "时间：2017.08",
                left: 'center',
                textStyle: {
                    color: '#000'
                }
            },
            visualMap: {
                min: 0.05,
                max: 2.6,
                dimension:0,
                left: 'left',
                top: 'bottom',
                text: ['HIGH', 'LOW'], // 文本，默认为数值文本
                calculable: true,
                inRange: {
                    color: ['#3EACE5', '#F02FC2']
                }
            },
            series: [{
                type: 'map',
                mapType: name,
                label: {
                    normal: {
                        show: false,
                    },
                    emphasis: {
                        textStyle: {
                            color: 'rgba(255, 255, 255, 0.8)'
                        }
                    }
                },
                itemStyle: {

                    normal: {
                        borderColor: '#fff',
                        borderWidth: 1,
                        areaColor: '#000',
                    },
                    emphasis: {
                        areaColor: '#EABBFF',
                        borderColor: 'rgb(255,222,254)',
                        borderWidth: 1,
                    }
                },
                animation: false,
                data: [{
                        name: '东城区',
                        value: 2.154761905,
                        label: {
                            normal: {
                                show: false
                            }
                        }
                    }, {
                        name: '西城区',
                        value: 2.545098039,
                        label: {
                            normal: {
                                show: false
                            }
                        }
                    }, {
                        name: '海淀区',
                        value: 0.857076566,
                    }, {
                        name: '朝阳区',
                        value: 0.869230769,
                    }, {
                        name: '石景山区',
                        value: 0.776190476,
                        label: {
                            normal: {
                                show: false
                            }
                        }
                    }, {
                        name: '大兴区',
                        value: 0.150772201,
                    }, {
                        name: '门头沟区',
                        value: 0.02122674,
                    }, {
                        name: '昌平区',
                        value: 0.146056548,
                    }, {
                        name: '通州区',
                        value: 0.15209713,
                    }, {
                        name: '房山区',
                        value: 0.052562814,
                    }, {
                        name: '丰台区',
                        value: 0.759477124,
                    }, {
                        name: '顺义区',
                        value: 0.1,
                    }, {
                        name: '怀柔区',
                        value: 0.018087612,
                    }, {
                        name: '密云区',
                        value: 0.021489457,
                    }, {
                        name: '延庆区',
                        value: 0.015747242,
                    }, {
                        name: '平谷区',
                        value: 0.044526316,
                    }]
                    // animationDurationUpdate: 1000,
                    // animationEasingUpdate: 'quinticInOut'
            }]
        });
    });
}

var currentIdx = 0;

showProvince1();

