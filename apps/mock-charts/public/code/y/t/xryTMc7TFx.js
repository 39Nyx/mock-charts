var uploadedDataURL = "/asset/get/s/data-1486722624120-By_r8fi_l.json";

$.get(uploadedDataURL, function (geoJson) {

    myChart.hideLoading();

    echarts.registerMap('北京市', geoJson);

var allData = {
"citys":[
{"name":"海淀区","value":[116.30, 39.96,2],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},
{"name":"大兴区","value":[116.35, 39.73,2],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},
{"name":"通州区","value":[116.67, 39.91,4],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},
{"name":"昌平区","value":[116.23, 40.226,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},
],
"moveLines":[
{"fromName":"海淀区","toName":"大兴区","coords":[[116.30, 39.96],[116.35, 39.73]]},
{"fromName":"大兴区","toName":"通州区","coords":[[116.35, 39.73],[116.67, 39.91]]},
{"fromName":"通州区","toName":"昌平区","coords":[[116.67, 39.91],[116.23, 40.226]]},
{"fromName":"昌平区","toName":"海淀区","coords":[[116.23, 40.226],[116.30, 39.96]]},
]
};
  
option = {
    backgroundColor: '#404a59',
    title: {
        text: '迁徙图',
        left: 'center',
        textStyle: {
            color: '#fff'
        }
    },
    legend: {
        show: true,
        orient: 'vertical',
        top: 'bottom',
        left: 'right',
        data: ['地点', '线路'],
        textStyle: {
            color: '#fff'
        }
    },
    geo: {
        map: '北京市',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#323c48',
                borderColor: '#404a59'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    series: [{
        name: '地点',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
            brushType: 'stroke',
            period:7,
            scale:26
        },
        label: {
            emphasis: {
                show: true,
                position: 'right',
                formatter: '{b}'
            }
        },
        symbolSize: 2,
        showEffectOn: 'render',
        itemStyle: {
            normal: {
                color: '#46bee9'
            }
        },
        data: allData.citys
    }, {
        name: '线路',
        type: 'lines',
        coordinateSystem: 'geo',
        zlevel: 2,
        large: true,
        effect: {
            show: true,
            constantSpeed: 30,
            symbol: 'pin',//ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
            symbolSize: 3,
            trailLength: 0,
        },
        lineStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0, color: '#58B3CC'
                    }, {
                        offset: 1, color: '#F58158'
                    }], false),
                width: 1,
                opacity: 0.6,
                curveness: 0.2
            }
        },
        data: allData.moveLines
    }]
};
myChart.setOption(option);
});