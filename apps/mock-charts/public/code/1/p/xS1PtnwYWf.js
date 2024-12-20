var uploadedDataURL = "/asset/get/s/data-1499156198404-H1AJkAOEZ.json";
function showProvince1() {
    var name = 'bj';
    $.get(uploadedDataURL, function(geoJson) {
        echarts.registerMap(name, geoJson);

        myChart.setOption(option = {
            backgroundColor: '#ffffff',
            title: {
                text: "北京面包甜点店铺分布",
                left: 'center',
                textStyle: {
                    color: '#000'
                }
            },
            visualMap: {
                min: 60,
                max: 2035,
                dimension:0,
                left: 'left',
                top: 'bottom',
                text: ['HIGH', 'LOW'], // 文本，默认为数值文本
                calculable: true,
                inRange: {
                    color: ['#EECFA1', '#EEAD0E']
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
                        areaColor: '#CDAA7D',
                        borderColor: 'rgb(218,165,32)',
                        borderWidth: 1,
                    }
                },
                animation: false,
                data: [{
                        name: '东城区',
                        value: 990,
                    }, {
                        name: '西城区',
                        value: 810,
                    }, {
                        name: '海淀区',
                        value: 1400,
                    }, {
                        name: '朝阳区',
                        value: 2035,
                    }, {
                        name: '石景山区',
                        value: 195,
                    }, {
                        name: '大兴区',
                        value: 465,
                    }, {
                        name: '门头沟区',
                        value: 80,
                    }, {
                        name: '昌平区',
                        value: 615,
                    }, {
                        name: '通州区',
                        value: 675,
                    }, {
                        name: '房山区',
                        value: 330,
                    }, {
                        name: '丰台区',
                        value: 960,
                    }, {
                        name: '顺义区',
                        value: 405,
                    }, {
                        name: '怀柔区',
                        value: 90,
                    }, {
                        name: '密云区',
                        value: 105,
                    }, {
                        name: '延庆区',
                        value: 60,
                    }, {
                        name: '平谷区',
                        value: 75,
                    }]
                    // animationDurationUpdate: 1000,
                    // animationEasingUpdate: 'quinticInOut'
            }]
        });
    });
}
var currentIdx = 0;

showProvince1();


   