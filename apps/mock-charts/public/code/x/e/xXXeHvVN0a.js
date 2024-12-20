var uploadedDataURL = "/asset/get/s/data-1593754153148-tEI006SYP.json";

function showProvince() {
    var name = 'bj';

    // myChart.showLoading();

    $.get(uploadedDataURL, function(geoJson) {

        // myChart.hideLoading();

        echarts.registerMap(name, geoJson);

        myChart.setOption(option = {
            backgroundColor: '#044060',
            title: {
                text: "",
            
                left: 'center',
                textStyle: {
                    color: '#ffffff'
                }
            },
            visualMap: {
                min: 500,
                max: 3000,
                left: 'left',
                top: 'bottom',
                text: ['高', '低'], // 文本，默认为数值文本
                calculable: true,
                inRange:{
                   color: ['white', 'red']
                },
                textStyle: {
                    color: '#ffffff'
                }
            },
            series: [{
                type: 'map',
                mapType: name,
                zoom: 1.2,
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
                            name: '北蔡镇',
                            value: 1886
                        }, {
                            name: '曹路镇',
                            value: 1128               
                        }, {
                            name: '川沙新镇',
                            value: 1272
                        }, {
                            name: '高东镇',
                            value: 1174
                        }, {
                            name: '高桥镇',
                            value: 1122
                        }, {
                            name: '航头镇',
                            value: 2631
                        }, {
                            name: '合庆镇',
                            value: 2628,
                        }, {
                            name: '花木街道',
                            value: 1438,
                        }, {
                            name: '惠南镇',
                            value: 932,
                        }, {
                            name: '金桥镇',
                            value: 1742,
                        }, {
                            name: '金杨新村街道',
                            value: 1879,
                        }, {
                            name: '康桥镇',
                            value: 1742,
                        }, {
                            name: '老港镇',
                            value: 1032,
                        }, {
                            name: '陆家嘴街道',
                            value: 1224,
                        }, {
                            name: '南汇新城镇',
                            value: 1382,
                        }, {
                            name: '三林镇',
                            value: 1957,
                        }, {
                            name: '上钢新村街道',
                            value: 1404,
                        }, {
                            name: '唐镇',
                            value: 1808,
                        }, {
                            name: '塘桥街道',
                            value: 1366,
                        }, {
                            name: '潍坊新村街道',
                            value: 2172,
                        }, {
                            name: '新场镇',
                            value: 1351,
                        }, {
                            name: '洋泾街道',
                            value: 1833,
                        }, {
                            name: '张江镇',
                            value: 1106,
                        }, {
                            name: '周浦镇',
                            value: 1196,
                        }, {
                            name: '张江高科技园区',
                            value: 1106
                            
                        }
                    ]
                    // animationDurationUpdate: 1000,
                    // animationEasingUpdate: 'quinticInOut'
            }]
        });
    });
}

var currentIdx = 0;


showProvince();