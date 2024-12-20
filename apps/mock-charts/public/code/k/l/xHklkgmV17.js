var uploadedDataURL = "/asset/get/s/data-1526018707993-B129M3z0f.json";


//function randomData() {
//    return Math.round(Math.random() * 10000);
//}


function showProvince() {
    var name = 'bj';

    // myChart.showLoading();

    $.get(uploadedDataURL, function(geoJson) {

        // myChart.hideLoading();

        echarts.registerMap(name, geoJson);

        myChart.setOption(option = {
            backgroundColor: '#ffffff',
            toolbox: {
                feature: {
                    saveAsImage: {
                        show: true
                    }
                }
            },
            visualMap: {
                show: false,
                min: 0,
                max: 45000,
                left: 'left',
                top: 'bottom',
                text: ['高', '低'], // 文本，默认为数值文本
                calculable: true,
                inRange: {
                    color: ['yellow', 'lightskyblue', 'orangered']
                }
            },
            series: [{
                type: 'map',
                mapType: name,
                roam: true,
                label: {
                    normal: {
                        show: true
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
                    name: '邯郸市',
                    value: 18
                }, {
                    name: '邢台市',
                    value: 22036
                }, {
                    name: '衡水市',
                    value: 39825
                }, {
                    name: '石家庄市',
                    value: 48405
                }, {
                    name: '保定市',
                    value: 15212
                }, {
                    name: '沧州市',
                    value: 26681
                }, {
                    name: '廊坊市',
                    value: 11161,
                }, {
                    name: '张家口市',
                    value: 20687
                }, {
                    name: '承德市',
                    value: 51488,
                }, {
                    name: '唐山市',
                    value: 23053
                }, {
                    name: '秦皇岛市',
                    value: 26504
                }]
                // animationDurationUpdate: 1000,
                // animationEasingUpdate: 'quinticInOut'
            }]
        });
    });
}

var currentIdx = 0;

showProvince();