var uploadedDataURL = "/asset/get/s/data-1478663631193-SkPRpMlWx.json";

var yunnanJiuDian = [];
var yunnanJingQu = []; //数据格式和下面的一样

$.get(uploadedDataURL, function (reJson) {
    echarts.registerMap('yunnan', reJson);
    myChart.setOption({
        backgroundColor: '#404a59',
        title: {
            text: '云南酒店、景区、厕所分布图',
            left: 'center',
            top: 'top',
            textStyle: {
                color: '#fff'
            }
        },
        tooltip: {
            trigger: 'item'
        },
        geo: {
            type: 'scatter',
            map: 'yunnan',
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
                    areaColor: '#2a333d'
                }
            }
        },
        "series": [{
            type: 'scatter',
            coordinateSystem: 'geo',
            symbolSize: 1,
            large: true,
            itemStyle: {
                normal: {
                    shadowBlur: 2,
                    shadowColor: 'rgba(37, 140, 249, 0.8)',
                    color: 'rgba(37, 140, 249, 0.8)'
                }
            },
            "data": yunnanJiuDian
        }, {
            type: 'scatter',
            coordinateSystem: 'geo',
            symbolSize: 1,
            large: true,
            itemStyle: {
                normal: {
                    shadowBlur: 2,
                    shadowColor: 'rgba(14, 241, 242, 0.8)',
                    color: 'rgba(14, 241, 242, 0.8)'
                }
            },
            "data": yunnanJingQu
        }, {
            type: 'scatter',
            coordinateSystem: 'geo',
            symbolSize: 1,
            large: true,
            itemStyle: {
                normal: {
                    shadowBlur: 2,
                    shadowColor: 'rgba(255, 255, 255, 0.8)',
                    color: 'rgba(255, 255, 255, 0.8)'
                }
            },
            "data": yunnanCeSuo
        }]
    });
});