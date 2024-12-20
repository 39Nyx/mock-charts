function getVirtulData(year) {
    year = year || '2017';
    var date = +echarts.number.parseDate(year + '-01-01');
    //var end = +echarts.number.parseDate((+year + 1) + '-01-01');
    //var dayTime = 3600 * 24 * 1000;
    var data = [
    ['2017/1/1', 742],
    ['2017/1/2', 795],
    ['2017/1/3', 805],
    ['2017/1/4', 684],
    ['2017/1/5', 944],
    ['2017/1/6', 770],
    ['2017/1/7', 754],
    ['2017/1/8', 742],
    ['2017/1/9', 635],
    ['2017/1/10', 674],
    ['2017/1/11', 839],
    ['2017/1/12', 1515],
    ['2017/1/13', 1011],
    ['2017/1/14', 690],
    ['2017/1/15', 758],
    ['2017/1/16', 687],
    ['2017/1/17', 703],
    ['2017/1/18', 690],
    ['2017/1/19', 756],
    ['2017/1/20', 869],
    ['2017/1/21', 1093],
    ['2017/1/22', 1564],
    ['2017/1/23', 1341],
    ['2017/1/24', 842],
    ['2017/1/25', 709],
    ['2017/1/26', 683],
    ['2017/1/27', 512],
    ['2017/1/28', 680],
    ['2017/1/29', 738],
    ['2017/1/30', 740],
    ['2017/1/31', 809],
    ['2017/2/1', 937],
    ['2017/2/2', 1515],
    ['2017/2/3', 2894],
    ['2017/2/4', 1620],
    ['2017/2/5', 1420],
    ['2017/2/6', 1447],
    ['2017/2/7', 1282],
    ['2017/2/8', 1280],
    ['2017/2/9', 1195],
    ['2017/2/10', 1178],
    ['2017/2/11', 1089],
    ['2017/2/12', 1078],
    ['2017/2/13', 1109],
    ['2017/2/14', 1010],
    ['2017/2/15', 1104],
    ['2017/2/16', 1167],
    ['2017/2/17', 1242],
    ['2017/2/18', 1165],
    ['2017/2/19', 1219],
    ['2017/2/20', 2707],
    ['2017/2/21', 2889],
    ['2017/2/22', 1798],
    ['2017/2/23', 1662],
    ['2017/2/24', 1372],
    ['2017/2/25', 1400],
    ['2017/2/26', 1364],
    ['2017/2/27', 1398],
    ['2017/2/28', 1898],
    ['2017/3/1', 1794],
    ['2017/3/2', 1767],
    ['2017/3/3', 1631],
    ['2017/3/4', 1534],
    ['2017/3/5', 1413],
    ['2017/3/6', 1423],
    ['2017/3/7', 1460],
    ['2017/3/8', 1454],
    ['2017/3/9', 1453],
    ['2017/3/10', 1446],
    ['2017/3/11', 1376],
    ['2017/3/12', 1469],
    ['2017/3/13', 1557],
    ['2017/3/14', 1702],
    ['2017/3/15', 1769],
    ['2017/3/16', 52342],
    ['2017/3/17', 13423],
    ['2017/3/18', 14337],
    ['2017/3/19', 21228],
    ['2017/3/20', 15607],
    ['2017/3/21', 13372],
    ['2017/3/22', 14651],
    ['2017/3/23', 15677],
    ['2017/3/24', 14682],
    ['2017/3/25', 18388],
    ['2017/3/26', 23534],
    ['2017/3/27', 26704],
    ['2017/3/28', 127910],
    ['2017/3/29', 395976],
    ['2017/3/30', 740802],
    ['2017/3/31', 966845],
    ['2017/4/1', 1223419],
    ['2017/4/2', 1465722],
    ['2017/4/3', 1931489],
    ['2017/4/4', 2514324],
    ['2017/4/5', 3024847],
    ['2017/4/6', 3174056],
    ['2017/4/7', 3208696],
    ['2017/4/8', 3644736],
    ['2017/4/9', 4198117],
    ['2017/4/10', 3868350],
    ['2017/4/11', 3576440],
    ['2017/4/12', 3524784],
    ['2017/4/13', 3621275],
    ['2017/4/14', 3695967],
    ['2017/4/15', 3728965],
    ['2017/4/16', 28485193],
    ['2017/4/17', 3525579],
    ['2017/4/18', 3452680],
    ['2017/4/19', 3535350],
    ['2017/4/20', 3655541],
    ['2017/4/21', 3884779],
    ['2017/4/22', 3780629],
    ['2017/4/23', 3633830],
    ['2017/4/24', 3224390],
    ['2017/4/25', 2923902],
    ['2017/4/26', 2880839],
    ['2017/4/27', 2755101],
    ['2017/4/28', 18758817],
    ['2017/4/29', 2186199],
    ['2017/4/30', 1380389],
    ['2017/5/1', 1153320],
    ['2017/5/2', 969908],
    ['2017/5/3', 855008],
    ['2017/5/4', 778459],
    ['2017/5/5', 705690],
    ['2017/5/6', 644825],
    ['2017/5/7', 605013],
    ['2017/5/8', 519751],
    ['2017/5/9', 462824],
    ['2017/5/10', 412711],
    ['2017/5/11', 397259],
    ['2017/5/12', 360223],
    ['2017/5/13', 351614],
    ['2017/5/14', 332985],
    ['2017/5/15', 288986],
    ['2017/5/16', 262668],
    ['2017/5/17', 254744],
    ['2017/5/18', 247669],
    ['2017/5/19', 245234],
    ['2017/5/20', 235613],
    ['2017/5/21', 242238],
    ['2017/5/22', 230282],
    ['2017/5/23', 208963],
    ['2017/5/24', 77862],
    ['2017/5/25', 186705],
    ['2017/5/26', 173613],
    ['2017/5/27', 167778],
    ['2017/5/28', 172338],
    ['2017/5/29', 174826],
    ['2017/5/30', 168858],
    ['2017/5/31', 142353]
];
    
    return data;
}

var data = getVirtulData(2017);

option = {
    backgroundColor: '#404a59',

    title: [{
        top: 10,
        text: '电视剧《人民的名义》百度搜索指数',
        subtext: '数据来源：百度指数（截止至2017年5月31日）',
        left: 'center',
        textStyle: {
            color: '#fff'
        }
    },{
            text: '15媒调 李紫乔 \n201501213006',
            borderColor: '#',
            //borderWidth: 1,
            textStyle: {
                color: '#ccc',
                fontSize: 12
            },
            right: '4%',
            top: '90%'
    }],
    tooltip: {
        trigger: 'item',
        formatter:'{a}<br/>{c}',
    },
    toolbox: {
        show: true,
        top:29,
        left:'73%',
        iconStyle:{
            normal:{
                borderColor:'',
                    },
        },
        feature: {
            dataView: {readOnly: false},
            restore: {
            },
            saveAsImage: {
                    pixelRatio:3,
            }
        }
    },
    legend: [{
        top: 100,
        left: '6%',
        data: ['百度搜索指数'],
        textStyle: {
            color: '#fff'
        }
    }, {
        top: 130,
        left: '6%',
        data: ['Top 10'],
        textStyle: {
            color: '#fff'
        }
    }],
    visualMap: {
        min:510,
        max: 20000000,
        calculable: true,
        itemHeight: 285,
        text: ['high', 'low'],
        color: ['#ea3e1a', '#feb111', '#73ae73','#1193ba'],
        //type: 'continuous',
        orient: 'vertical',
        left: '75%',
        top: 65,
        textStyle: {
            color: '#ccc'
        }
    },
    calendar: [{
        top: 90,
        left: 'center',
        range: ['2017-01-01', '2017-02-28'],
        cellSize: [40, 40],
        splitLine: {
            show: true,
            lineStyle: {
                color: '#000',
                width: 4,
                type: 'solid'
            }
        },
        monthLabel: {
            firstDay: 1,
            nameMap: 'cn',
            margin:10,
        },
        yearLabel: {
            show:false,
            formatter: '{start}  1st',
            textStyle: {
                color: '#fff'
            }
        },
        itemStyle: {
            normal: {
                color: '#323c48',
                borderWidth: 1,
                borderColor: '#111'
            }
        }
    }, {
        top: 400,
        left: 'center',
        range: ['2017-03-01', '2017-05-31'],
        cellSize: [40, 40],
        splitLine: {
            show: true,
            lineStyle: {
                color: '#000',
                width: 4,
                type: 'solid'
            }
        },
        monthLabel: {
            firstDay: 1,
            nameMap: 'cn',
            margin:5,
        },
        yearLabel: {
            show:false,
            formatter: '2nd',
            textStyle: {
                color: '#fff'
            }
        },
        itemStyle: {
            normal: {
                color: '#323c48',
                borderWidth: 1,
                borderColor: '#111'
            }
        }
    }],
    series: [{
        name: '百度搜索指数',
        type: 'scatter',
        coordinateSystem: 'calendar',
        data: data,
        symbolSize: 10,
        itemStyle: {
            normal: {
                color: '#73b9bc'
            }
        }
    }, {
        name: '百度搜索指数',
        type: 'scatter',
        coordinateSystem: 'calendar',
        calendarIndex: 1,
        data: data,
        symbolSize: 10,
        itemStyle: {
            normal: {
                color: '#73b9bc'
            }
        }
    }, {
        name: 'Top 10',
        type: 'effectScatter',
        coordinateSystem: 'calendar',
       
        data: data.sort(function(a, b) {
            return b[1] - a[1];
        }).slice(0, 10),
        symbolSize: function(val) {
            return val[1] / 500000;
        },
        showEffectOn: 'render',
        rippleEffect: {
            brushType: 'stroke'
        },
        hoverAnimation: true,
        itemStyle: {
            normal: {
                color: '#ea3e1a',
                shadowBlur: 10,
                shadowColor: '#333'
            }
        },
        zlevel: 1
    }, {
        name: 'Top 10',
        type: 'effectScatter',
        coordinateSystem: 'calendar',
        calendarIndex: 1,
        data: data.sort(function(a, b) {
            return b[1] - a[1];
        }).slice(0, 10),
        symbolSize: function(val) {
            return val[1] / 500000;
        },
        showEffectOn: 'render',
        rippleEffect: {
            brushType: 'stroke'
        },
        hoverAnimation: true,
        itemStyle: {
            normal: {
                color: '#ea3e1a',
                shadowBlur: 10,
                shadowColor: '#333'
            }
        },
        zlevel: 1
    }]
};