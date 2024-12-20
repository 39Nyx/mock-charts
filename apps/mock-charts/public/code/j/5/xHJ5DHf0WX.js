var uploadedDataJSONURL = "/asset/get/s/data-1529909854507-Hk8DzMR-Q.txt";

var uploadedDataURL = "/asset/get/s/data-1529908086273-ByRuoWAW7.json";

$.getJSON(uploadedDataURL, function(data) {
    echarts.registerMap('hangzhouMap', data);
    $.getJSON(uploadedDataJSONURL, function(res) {



        function converData(res) {
            var data = [];
            $.each(res, function(i, v) {
                data.push({
                    value: [v.lon, v.lat]
                })
            })
            return data;
        };

        var option = {
            //鼠标移上去的样式
            tooltip: {
                show: true, //不显示提示标签
                // backgroundColor: "rgba(99,99,99,0.45)", //提示标签背景颜色
                textStyle: {
                    color: "#fff"
                }, //提示标签字体颜色
                trigger: 'item',
                formatter: function(params, ticket, callback) { //提示标签格式
                }
            },
            geo: {
                map: 'hangzhouMap',
                label: {
                    emphasis: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        areaColor: '#323c48',
                        borderColor: '#111'
                    },
                    emphasis: {
                        areaColor: 'transparent'
                    }
                }
            },
            series: [{
                // type: 'map',
                // map: 'hangzhouMap',
                type: 'scatter',
                coordinateSystem: 'geo',
                // zoom: 1.25,
                roam: false,
                selectedMode: 'single',
                data: converData(res),
                symbolSize: 12,
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                itemStyle: {
                    emphasis: {
                        borderColor: '#fff',
                        borderWidth: 1
                    }
                }
            }]
        }

        myChart.setOption(option)

    })

})