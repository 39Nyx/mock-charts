var uploadedDataURL = "/asset/get/s/data-1494317124385-Hy2S_lkgb.json";

myChart.showLoading();
$.get(uploadedDataURL, function(chinaJson) {
    echarts.registerMap('云南', chinaJson);
    myChart.hideLoading();
    myChart.setOption({
        title: {
                text: "迪庆公路离退人员分布",
                left: 'center',
                textStyle: {
                    color: '#000000'
                }
        },
        visualMap: {
            min: 10,
            max: 50,
            text: ['High', 'Low'],
            realtime: false,
            calculable: true,
            inRange: {
                color: ['lightskyblue', 'yellow', 'orangered']
            },


        },

        series: [{
            type: 'map',
            map: '云南',
            selectedMode: 'single',
            itemStyle: {
                normal: {
                    label: {
                        show: true
                    }
                },
                emphasis: {
                    label: {
                        show: true
                    }
                }
            },
            data: [{
                    name: '昆明市',
                    value: 100
                }, {
                    name: '昭通市',
                    value: 10
                }, {
                    name: '普洱市',
                    value: 20
                }, {
                    name: '文山壮族苗族自治州',
                    value: 30
                }, {
                    name: '曲靖市',
                    value: 40
                }, {
                    name: '楚雄彝族自治州',
                    value: 41
                }, {
                    name: '大理白族自治州',
                    value: 15
                }, {
                    name: '临沧市',
                    value: 25
                }, {
                    name: '丽江市',
                    value: 35
                }, {
                    name: '西双版纳傣族自治州',
                    value: 35
                }, {
                    name: '保山市',
                    value: 45
                }, {
                    name: '玉溪市',
                    value: 25
                }, {
                    name: '怒江傈僳族自治州',
                    value: 35
                }, {
                    name: '德宏傣族景颇族自治州',
                    value: 35
                }, {
                    name: '迪庆藏族自治州',
                    value: 45
                }, {
                    name: '红河哈尼族彝族自治州',
                    value: 45
                }


            ]
        }]
    });
});