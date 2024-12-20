var label = {
                show: true,
                textStyle: {
                    color: '#333',
                    borderWidth: 0,
                    fontSize: 15
                }
            };
            
option = {
    geo3D: {
        map: '云南',
        viewControl: {
            distance: 150,
            alpha: 70
        },
        itemStyle: {
            borderColor: '#000',
            borderWidth: 0.5
        },
        regionHeight: 3,
        regions: [{
            name: '昆明市',
            itemStyle: {
                areaColor: '#b6c5e6'
            },
            label: label,
            emphasis: {
                label: label
            }
        },{
            name: '曲靖市',
            itemStyle: {
                areaColor: '#f0b7a5'
            },
            label: label,
            emphasis: {
                label: label
            }
        },{
            name: '玉溪市',
            itemStyle: {
                areaColor: '#fcd79c'
            },
            label: label,
            emphasis: {
                label: label
            }
        },{
            name: '保山市',
            itemStyle: {
                areaColor: '#a9d6aa'
            },
            label: label,
            emphasis: {
                label: label
            }
        },{
            name: '昭通市',
            itemStyle: {
                areaColor: '#d9a1d4'
            },
            label: label,
            emphasis: {
                label: label
            }
        },{
            name: '丽江市',
            itemStyle: {
                areaColor: '#a5d7e4'
            },
            label: label,
            emphasis: {
                label: label
            }
        },{
            name: '普洱市',
            itemStyle: {
                areaColor: '#f2b9c8'
            },
            label: label,
            emphasis: {
                label: label
            }
        },{
            name: '临沧市',
            itemStyle: {
                areaColor: '#c8dd9e'
            },
            label: label,
            emphasis: {
                label: label
            }
        },{
            name: '楚雄彝族自治州',
            itemStyle: {
                areaColor: '#b6c5e6'
            },
            label: label,
            emphasis: {
                label: label
            }
        },{
            name: '红河哈尼族彝族自治州',
            itemStyle: {
                areaColor: '#f1b7a4'
            },
            label: label,
            emphasis: {
                label: label
            }
        },{
            name: '文山壮族苗族自治州',
            itemStyle: {
                areaColor: '#fcd79c'
            },
            label: label,
            emphasis: {
                label: label
            }
        },{
            name: '西双版纳傣族自治州',
            itemStyle: {
                areaColor: '#abd5a6'
            },
            label: label,
            emphasis: {
                label: label
            }
        },{
            name: '大理白族自治州',
            itemStyle: {
                areaColor: '#d9a1d4'
            },
            label: label,
            emphasis: {
                label: label
            }
        },{
            name: '德宏傣族景颇族自治州',
            itemStyle: {
                areaColor: '#a5d7e4'
            },
            label: label,
            emphasis: {
                label: label
            }
        },{
            name: '怒江傈僳族自治州',
            itemStyle: {
                areaColor: '#eebaca'
            },
            label: label,
            emphasis: {
                label: label
            }
        },{
            name: '迪庆藏族自治州',
            itemStyle: {
                areaColor: '#c8dd9e'
            },
            label: label,
            emphasis: {
                label: label
            }
        }]
    },
    series: [{
        type: 'scatter3D',
        coordinateSystem: 'geo3D',
        symbol: 'circle',
        label: {
            normal: {
                formatter: '{b}',
                position: 'right',
                show: true,
                textStyle: {
                    color: '#de5347',
                    borderWidth: 0,
                    fontSize: 15
                }
            },
            emphasis: {
                show: true
            }
        },
        data: [{
            name: '数据1',
            value: [98.337349, 24.801275, 3]
        }]
    }]
};