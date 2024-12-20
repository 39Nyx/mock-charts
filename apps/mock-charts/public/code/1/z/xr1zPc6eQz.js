var geoCoordMap = {
    'Ababa': [114.712, 23.1321],
    'Arxan': [119.948, 47.1756],
    'Badou': [118.692, 26.5106],
    'Bali': [120.897, 29.4267],
    'Beijing': [116.388, 39.9289],
    'Chang Yuan': [116.996, 27.6035],
    'Changbi': [110.936, 19.7945],
    'Chun Ji': [116.372, 35.0214],
    'Danni': [93.401, 28.801],
    'Dapa': [112.587, 33.7775],
    'Demba': [98.2, 29.5],
    'Gong Xi': [117.562, 30.2375],
    'Guan Yu': [116.478, 25.3255],
    'Guangdong': [129.336, 42.7683],
    'Guangzhou': [113.25, 23.1167],
    'Hanyu': [109.145, 34.3287],
    'Hebei': [129.768, 43.0999],
    'Hongqiao': [105.821, 31.0278],
    'Huang Lin': [113.619, 33.6131],
    'Hunan': [120.18, 32.9274],
    'Jilin': [126.56, 43.8508],
    'Jinan': [116.997, 36.6683],
    'Jingsheng': [108.3, 23.9833],
    'Kailash': [81.3167, 31.0667],
    'Kunming': [102.718, 25.0389],
    'Lanzhou': [103.792, 36.0564],
    'Lhassa': [91.1, 29.65],
    'Liu Wanxiang': [106.905, 32.5428],
    'Ludian': [113.729, 33.3913],
    'Peking': [116.388, 39.9289],
    'Qingdao': [120.372, 36.0986],
    'Qiushi': [121.471, 29.9319],
    'Quan Wang': [119.054, 28.9252],
    'Quan Zhang': [111.085, 35.657],
    'Saina': [90.1, 31.6],
    'Shamal': [78.4697, 39.5936],
    'Shan Shan': [112.136, 27.7603],
    'Shanghai': [121.458, 31.2222],
    'Shantung': [119.631, 25.455],
    'Shashi': [112.245, 30.3072],
    'Shenzhen': [111.117, 22.2],
    'Sichuan': [105.48, 35.1221],
    'Sunan': [116.367, 31.6167],
    'Suning': [115.829, 38.4225],
    'Suzhou': [120.618, 31.3114],
    'Tai Long': [108.503, 30.8936],
    'Tiananmen': [116.391, 39.9072],
    'Tufan': [89.1667, 42.9333],
    'Tunde': [100.667, 34.7],
    'Wang Chen': [114.427, 30.163],
    'Wang Jian': [117.891, 25.8239],
    'Weixin': [113.69, 23.3009],
    'Wenzhou': [120.667, 27.9994],
    'Wuxi': [120.294, 31.5772],
    'Xiao Mi': [116.057, 25.2225],
    'Xiaoma': [112.877, 21.9052],
    'Xiaomi': [116.057, 25.2225],
    'Xima': [107.507, 27.9567],
    'Xinjiang': [116.274, 27.7481],
    'Yangjiang': [111.967, 21.85],
    'Yogya': [93.606, 32.106],
    'Zhang Gaoli': [123.062, 41.9925],
    'Zigang': [84.9, 29.2]
};

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

option = {
    backgroundColor: '#404a59',
    title: {
        text: '2015年全国城市事件统计（数量）',
        subtext: 'data from GDELT',
        sublink: 'https://www.gdeltproject.org/',
        x: 'center',
        textStyle: {
            color: '#fff'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: function(params) {
            return params.name + ' : ' + params.value[2];
        }
    },
    legend: {
        orient: 'vertical',
        y: 'bottom',
        x: 'right',
        data: ['EventNum'],
        textStyle: {
            color: '#fff'
        }
    },
    visualMap: {
        min: 0,
        max: 1500,
        calculable: true,
        color: ['#d94e5d', '#eac736', '#50a3ba'],
        textStyle: {
            color: '#fff'
        }
    },
    geo: {
        map: 'china',
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
    series: [{
            name: 'pm2.5',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData([{
                name: 'Ababa',
                value: 552
            }, {
                name: 'Arxan',
                value: 27
            }, {
                name: 'Badou',
                value: 58
            }, {
                name: 'Bali',
                value: 1134
            }, {
                name: 'Beijing',
                value: 9851
            }, {
                name: 'Chang Yuan',
                value: 62
            }, {
                name: 'Changbi',
                value: 65
            }, {
                name: 'Chun Ji',
                value: 92
            }, {
                name: 'Danni',
                value: 38
            }, {
                name: 'Dapa',
                value: 9
            }, {
                name: 'Demba',
                value: 33
            }, {
                name: 'Gong Xi',
                value: 53
            }, {
                name: 'Guan Yu',
                value: 68
            }, {
                name: 'Guangdong',
                value: 351
            }, {
                name: 'Guangzhou',
                value: 468
            }, {
                name: 'Hanyu',
                value: 28
            }, {
                name: 'Hebei',
                value: 215
            }, {
                name: 'Hongqiao',
                value: 108
            }, {
                name: 'Huang Lin',
                value: 117
            }, {
                name: 'Hunan',
                value: 251
            }, {
                name: 'Jilin',
                value: 96
            }, {
                name: 'Jinan',
                value: 284
            }, {
                name: 'Jingsheng',
                value: 327
            }, {
                name: 'Kailash',
                value: 496
            }, {
                name: 'Kunming',
                value: 22
            }, {
                name: 'Lanzhou',
                value: 126
            }, {
                name: 'Lhassa',
                value: 225
            }, {
                name: 'Liu Wanxiang',
                value: 134
            }, {
                name: 'Ludian',
                value: 144
            }, {
                name: 'Peking',
                value: 3146
            }, {
                name: 'Qingdao',
                value: 18
            }, {
                name: 'Qiushi',
                value: 48
            }, {
                name: 'Quan Wang',
                value: 244
            }, {
                name: 'Quan Zhang',
                value: 53
            }, {
                name: 'Saina',
                value: 4
            }, {
                name: 'Shamal',
                value: 222
            }, {
                name: 'Shan Shan',
                value: 240
            }, {
                name: 'Shanghai',
                value: 2923
            }, {
                name: 'Shantung',
                value: 45
            }, {
                name: 'Shashi',
                value: 45
            }, {
                name: 'Shenzhen',
                value: 326
            }, {
                name: 'Sichuan',
                value: 113
            }, {
                name: 'Sunan',
                value: 206
            }, {
                name: 'Suning',
                value: 219
            }, {
                name: 'Suzhou',
                value: 318
            }, {
                name: 'Tai Long',
                value: 355
            }, {
                name: 'Tiananmen',
                value: 1113
            }, {
                name: 'Tufan',
                value: 246
            }, {
                name: 'Tunde',
                value: 1288
            }, {
                name: 'Wang Chen',
                value: 70
            }, {
                name: 'Wang Jian',
                value: 118
            }, {
                name: 'Weixin',
                value: 92
            }, {
                name: 'Wenzhou',
                value: 92
            }, {
                name: 'Wuxi',
                value: 1177
            }, {
                name: 'Xiao Mi',
                value: 213
            }, {
                name: 'Xiaoma',
                value: 93
            }, {
                name: 'Xiaomi',
                value: 748
            }, {
                name: 'Xima',
                value: 170
            }, {
                name: 'Xinjiang',
                value: 162
            }, {
                name: 'Yangjiang',
                value: 109
            }, {
                name: 'Yogya',
                value: 42
            }, {
                name: 'Zhang Gaoli',
                value: 23
            }, {
                name: 'Zigang',
                value: 37
            }]),

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
        }

    ]
}