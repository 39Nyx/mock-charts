var geoCoordMap = {
    "安宁": [102.4765002068, 24.9221981613],
    '北京': [116.4007503787, 39.9031844643],
    '常熟': [120.7485903653, 31.6555551742],
    '常州': [119.9702459619, 31.8117500319],
    '成都': [104.0724994128, 30.6522706787],
    '承德': [117.9566704804, 40.9499365609],
    '从化': [113.5818746211, 23.5510696131],
    '大连': [121.6100532808, 38.9125212468],
    '奉化': [121.4024639083, 29.6575347142],
    '佛山': [113.1165184334, 23.0243820777],
    '赣州': [114.9292790313, 25.8322751212],
    '格尔木': [94.9259982744, 36.4065498327],
    '广州': [113.2596665241, 23.1317626641],
    '贵阳': [106.6264366888, 26.6512290693],
    '杭州': [120.2044835101, 30.2494163927],
    '合肥': [117.2214998776, 31.8223053535],
    '湖州': [120.0831127141, 30.8950975113],
    '淮安': [119.0095521085, 33.6115909198],
    '黄石': [115.033632615, 30.2017072395],
    '济源': [112.5960426589, 35.0680110571],
    '嘉兴': [120.7526864145, 30.7473423022],
    '金华': [119.6423011308, 29.0812674354],
    '晋中': [112.746524575, 37.6863708473],
    '九江': [115.9959247984, 29.7079676407],
    '昆山': [120.9766577064, 31.3867776267],
    '兰州': [103.8315894989, 36.0615869885],
    '灵武': [106.3354282583, 38.101968187],
    '南充': [106.1069611355, 30.8401242884],
    '南京': [118.7907996424, 32.0603627958],
    '南宁': [108.3629356575, 22.8189739942],
    '宁波': [121.6178926436, 29.8630085108],
    '攀枝花': [101.717432423, 26.5857258079],
    '莆田': [119.0032712608, 25.4567595782],
    '齐河': [116.7572690176, 36.7832743223],
    '青岛': [120.3778458118, 36.0658569754],
    '汕头': [116.6775279967, 23.355988358],
    '汕尾': [115.3700592978, 22.7882323483],
    '上饶': [117.9380255288, 28.4577763447],
    '深圳': [114.0528899134, 22.5455155546],
    '石家庄': [114.5089972984, 38.0417774681],
    '台州': [121.4165777076, 28.6588895244],
    '太原': [112.5437100641, 37.8701314671],
    '天津': [117.196712841, 39.0867296952],
    '芜湖': [118.4276122313, 31.3540265172],
    '武汉': [114.2995528195, 30.5952058577],
    '西安': [108.9353562803, 34.3425803471],
    '湘潭': [112.9385603206, 27.8330738358],
    '襄阳': [112.1158953347, 32.0110017292],
    '孝感': [113.9105121086, 30.9272642429],
    '邢台': [114.4990644252, 37.070118515],
    '宜宾': [104.6406244887, 28.7551207751],
    '宜兴': [119.8201556331, 31.3393725615],
    '义乌': [120.070259139, 29.3078885446],
    '榆林': [109.7294191169, 38.2846820783],
    '长沙': [112.9335162442, 28.2323034791],
    '肇庆': [112.4597250973, 23.0494052021],
    '重庆': [106.5482798308, 29.565526745]


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
        text: '全国新能源汽车项目分布',
        subtext: '整车与零件类',
        sublink: 'http://www.pm25.in',
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
        data: ['pm2.5'],
        textStyle: {
            color: '#fff'
        }
    },
    visualMap: {
        min: 0,
        max: 200,
        calculable: true,
        inRange: {
            color: ['#50a3ba', '#eac736', '#d94e5d']
        },
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
                name: '南京',
                value: 116
            },
            {
                name: '常州',
                value: 30
            },
            {
                name: '上饶',
                value: 100
            },
            {
                name: '莆田',
                value: 18.9
            },
            {
                name: '宜兴',
                value: 120
            },
            {
                name: '重庆',
                value: 30
            },
            {
                name: '赣州',
                value: 80
            },
            {
                name: '金华',
                value: 25
            },
            {
                name: '宜兴',
                value: 28.37
            },
            {
                name: '宜宾',
                value: 55
            },
            {
                name: '湖州',
                value: 115
            },
            {
                name: '赣州',
                value: 60
            },
            {
                name: '嘉兴',
                value: 11.57
            },
            {
                name: '广州',
                value: 450
            },
            {
                name: '兰州',
                value: 85
            },
            {
                name: '石家庄',
                value: 30
            },
            {
                name: '肇庆',
                value: 100
            },
            {
                name: '南京',
                value: 100
            },
            {
                name: '黄石',
                value: 30
            },
            {
                name: '合肥',
                value: 60
            },
            {
                name: '广州',
                value: 6
            },
            {
                name: '灵武',
                value: 20
            },
            {
                name: '安宁',
                value: 27
            },
            {
                name: '南宁',
                value: 30
            },
            {
                name: '佛山',
                value: 60
            },
            {
                name: '汕头',
                value: 41.8
            },
            {
                name: '常州',
                value: 23
            },
            {
                name: '淮安',
                value: 30
            },
            {
                name: '攀枝花',
                value: 50
            },
            {
                name: '襄阳',
                value: 7.7
            },
            {
                name: '邢台',
                value: 41.8
            },
            {
                name: '西安',
                value: 41.8
            },
            {
                name: '宁波',
                value: 20
            },
            {
                name: '格尔木',
                value: 5
            },
            {
                name: '榆林',
                value: 41.8
            },
            {
                name: '北京',
                value: 41.8
            },
            {
                name: '济源',
                value: 13.44
            },
            {
                name: '青岛',
                value: 55.7
            },
            {
                name: '武汉',
                value: 41.8
            },
            {
                name: '深圳',
                value: 11
            },
            {
                name: '青岛',
                value: 20
            },
            {
                name: '昆山',
                value: 250
            },
            {
                name: '常熟',
                value: 10
            },
            {
                name: '孝感',
                value: 13.4
            },
            {
                name: '天津',
                value: 11.49
            },
            {
                name: '北京',
                value: 50
            },
            {
                name: '北京',
                value: 57
            },
            {
                name: '襄阳',
                value: 2.2
            },
            {
                name: '芜湖',
                value: 15.6
            },
            {
                name: '齐河',
                value: 10
            },
            {
                name: '合肥',
                value: 30
            },
            {
                name: '青岛',
                value: 41.8
            },
            {
                name: '北京',
                value: 41.8
            },
            {
                name: '常州',
                value: 100
            },
            {
                name: '九江',
                value: 130
            },
            {
                name: '广州',
                value: 46.94
            },
            {
                name: '杭州',
                value: 37.5
            },
            {
                name: '合肥',
                value: 41.8
            },
            {
                name: '武汉',
                value: 17.6
            },
            {
                name: '宁波',
                value: 62
            },
            {
                name: '宁波',
                value: 130
            },
            {
                name: '杭州',
                value: 80
            },
            {
                name: '台州',
                value: 121
            },
            {
                name: '成都',
                value: 41.8
            },
            {
                name: '南充',
                value: 138
            },
            {
                name: '晋中',
                value: 26.8
            },
            {
                name: '湘潭',
                value: 35
            },
            {
                name: '义乌',
                value: 72
            },
            {
                name: '贵阳',
                value: 41.8
            },
            {
                name: '杭州',
                value: 41.8
            },
            {
                name: '长沙',
                value: 59
            },
            {
                name: '深圳',
                value: 41.8
            },
            {
                name: '天津',
                value: 13
            },
            {
                name: '南京',
                value: 30
            },
            {
                name: '西安',
                value: 41.8
            },
            {
                name: '青岛',
                value: 30
            },
            {
                name: '大连',
                value: 41.8
            },
            {
                name: '太原',
                value: 40
            },
            {
                name: '承德',
                value: 20
            },
            {
                name: '武汉',
                value: 41.8
            },
            {
                name: '汕尾',
                value: 41.8
            },
            {
                name: '奉化',
                value: 35
            },
            {
                name: '从化',
                value: 30
            }
        ]),
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