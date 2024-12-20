
var geoCoordMap = {
    "西安":[108.95359,34.267518],
"雁塔":[108.954816,34.228829],
"碑林":[108.946972,34.263032],
"未央":[108.953182,34.299297],
"长安":[108.913575,34.164695],
"新城":[108.967219,34.272934],
"灞桥":[109.07085,34.279015],
"高陵":[109.094706,34.541226],
"莲湖":[108.950637,34.271061],
"阎良":[109.232619,34.668335],
"临潼":[109.220554,34.37291],
"鄠邑":[108.611571,34.114989],
"周至":[108.228573,34.169839],
"蓝田":[109.329952,34.157778],
"宝鸡":[107.245006,34.368678],
"渭滨":[107.161521,34.361527],
"金台":[107.153218,34.382289],
"陈仓":[107.375445,34.356308],
"扶风":[107.906699,34.381794],
"岐山":[107.627564,34.449507],
"眉县":[107.756557,34.280563],
"千阳":[107.13878,34.648474],
"凤翔":[107.406797,34.527821],
"凤县":[106.522538,33.916866],
"陇县":[106.870884,34.89873],
"麟游":[107.799906,34.683862],
"太白":[107.325338,34.064339],
"咸阳":[108.715691,34.33623],
"渭城":[108.742912,34.367889],
"秦都":[108.712639,34.335842],
"长武":[107.805531,35.212373],
"兴平":[108.496721,34.306091],
"三原":[108.947201,34.623457],
"彬县":[108.0839,35.049651],
"礼泉":[108.43171,34.48751],
"乾县":[108.24587,34.534357],
"泾阳":[108.84907,34.532893],
"旬邑":[108.340139,35.118146],
"永寿":[108.148304,34.698214],
"武功":[108.20673,34.266199],
"淳化":[108.587044,34.805112],
"铜川":[108.951107,34.903559],
"宜君":[109.123488,35.404485],
"耀州":[108.986375,34.916013],
"王益":[109.082021,35.07574],
"印台":[109.106103,35.120717],
"渭南":[109.477759,34.526339],
"临渭":[109.516711,34.505352],
"蒲城":[109.592584,34.961492],
"大荔":[109.948432,34.803364],
"富平":[109.187145,34.757921],
"合阳":[110.155374,35.243853],
"潼关":[110.253071,34.550695],
"华州":[109.782751,34.502233],
"华阴":[110.098735,34.572061],
"澄城":[109.938652,35.196836],
"白水":[109.597158,35.183732],
"延安":[109.501131,36.657779],
"宝塔":[109.495912,36.591103],
"子长":[109.681506,37.148833],
"志丹":[108.775026,36.828077],
"延长":[110.018798,36.585417],
"安塞":[109.335915,36.870928],
"富县":[109.386291,35.993443],
"延川":[110.20022,36.883942],
"吴起":[108.182847,36.933403],
"甘泉":[109.357569,36.282636],
"洛川":[109.438806,35.768517],
"宜川":[110.175324,36.056538],
"黄陵":[109.269558,35.585363],
"黄龙":[109.846897,35.590475],
"榆林":[110.745971,37.458561],
"榆阳":[109.727434,38.282811],
"神木":[110.505581,38.848872],
"定边":[107.607629,37.60047],
"靖边":[108.800969,37.605237],
"米脂":[110.190398,37.76144],
"横山":[109.300202,37.968415],
"吴堡":[110.745971,37.458561],
"绥德":[110.269615,37.509221],
"佳县":[110.498039,38.025491],
"府谷":[111.073868,39.034206],
"子洲":[110.041678,37.616774],
"清涧":[110.127968,37.094767],
"汉中":[107.02971,33.072645],
"汉台":[107.038309,33.073634],
"洋县":[107.552117,33.228817],
"西乡":[107.772819,32.989321],
"镇巴":[107.901402,32.542965],
"城固":[107.340399,33.162638],
"南郑":[106.942791,33.006012],
"略阳":[106.163136,33.333269],
"勉县":[106.679562,33.159541],
"宁强":[106.263521,32.835684],
"留坝":[106.927174,33.623905],
"佛坪":[107.997301,33.530647],
"安康":[109.03593,32.690514],
"汉滨":[109.033557,32.701137],
"汉阴":[108.514982,32.898963],
"镇坪":[109.533268,31.889699],
"平利":[109.368851,32.395186],
"旬阳":[109.371756,32.839933],
"白河":[110.118933,32.81482],
"石泉":[108.254359,33.044548],
"紫阳":[108.540783,32.52594],
"宁陕":[108.320956,33.316162],
"岚皋":[108.908825,32.312831],
"商洛":[109.924943,33.880181],
"商州":[109.947619,33.869081],
"商南":[110.88801,33.53819],
"镇安":[109.159389,33.429495],
"柞水":[109.120703,33.691993],
"山阳":[109.888618,33.538088],
"丹凤":[110.334104,33.701881],
"洛南":[110.154755,34.097084],
};

var data = [
    {name:"西安",value:252},
{name:"雁塔",value:253},
{name:"碑林",value:254},
{name:"未央",value:255},
{name:"长安",value:256},
{name:"新城",value:257},
{name:"灞桥",value:258},
{name:"高陵",value:259},
{name:"莲湖",value:260},
{name:"阎良",value:261},
{name:"临潼",value:262},
{name:"鄠邑",value:263},
{name:"周至",value:264},
{name:"蓝田",value:265},
{name:"宝鸡",value:266},
{name:"渭滨",value:267},
{name:"金台",value:268},
{name:"陈仓",value:269},
{name:"扶风",value:270},
{name:"岐山",value:271},
{name:"眉县",value:272},
{name:"千阳",value:273},
{name:"凤翔",value:274},
{name:"凤县",value:275},
{name:"陇县",value:276},
{name:"麟游",value:277},
{name:"太白",value:278},
{name:"咸阳",value:279},
{name:"渭城",value:280},
{name:"秦都",value:281},
{name:"长武",value:282},
{name:"兴平",value:283},
{name:"三原",value:284},
{name:"彬县",value:285},
{name:"礼泉",value:286},
{name:"乾县",value:287},
{name:"泾阳",value:288},
{name:"旬邑",value:289},
{name:"永寿",value:290},
{name:"武功",value:291},
{name:"淳化",value:292},
{name:"铜川",value:293},
{name:"宜君",value:294},
{name:"耀州",value:295},
{name:"王益",value:296},
{name:"印台",value:297},
{name:"渭南",value:298},
{name:"临渭",value:299},
{name:"蒲城",value:300},
{name:"大荔",value:301},
{name:"富平",value:302},
{name:"合阳",value:303},
{name:"潼关",value:304},
{name:"华州",value:305},
{name:"华阴",value:306},
{name:"澄城",value:307},
{name:"白水",value:308},
{name:"延安",value:309},
{name:"宝塔",value:310},
{name:"子长",value:311},
{name:"志丹",value:312},
{name:"延长",value:313},
{name:"安塞",value:314},
{name:"富县",value:315},
{name:"延川",value:316},
{name:"吴起",value:317},
{name:"甘泉",value:318},
{name:"洛川",value:319},
{name:"宜川",value:320},
{name:"黄陵",value:321},
{name:"黄龙",value:322},
{name:"榆林",value:323},
{name:"榆阳",value:324},
{name:"神木",value:325},
{name:"定边",value:326},
{name:"靖边",value:327},
{name:"米脂",value:328},
{name:"横山",value:329},
{name:"吴堡",value:330},
{name:"绥德",value:331},
{name:"佳县",value:332},
{name:"府谷",value:333},
{name:"子洲",value:334},
{name:"清涧",value:335},
{name:"汉中",value:336},
{name:"汉台",value:337},
{name:"洋县",value:338},
{name:"西乡",value:339},
{name:"镇巴",value:340},
{name:"城固",value:341},
{name:"南郑",value:342},
{name:"略阳",value:343},
{name:"勉县",value:344},
{name:"宁强",value:345},
{name:"留坝",value:346},
{name:"佛坪",value:347},
{name:"安康",value:348},
{name:"汉滨",value:349},
{name:"汉阴",value:350},
{name:"镇坪",value:351},
{name:"平利",value:352},
{name:"旬阳",value:353},
{name:"白河",value:354},
{name:"石泉",value:355},
{name:"紫阳",value:356},
{name:"宁陕",value:357},
{name:"岚皋",value:358},
{name:"商洛",value:359},
{name:"商州",value:360},
{name:"商南",value:361},
{name:"镇安",value:362},
{name:"柞水",value:363},
{name:"山阳",value:364},
{name:"丹凤",value:365},
{name:"洛南",value:366},
];

var convertData = function (data) {
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

var convertedData = [
    convertData(data),
    convertData(data.sort(function (a, b) {
        return b.value - a.value;
    }).slice(0, 6))
];


option = {
    backgroundColor: '#404a59',
    animation: true,
    animationDuration: 1000,
    animationEasing: 'cubicInOut',
    animationDurationUpdate: 1000,
    animationEasingUpdate: 'cubicInOut',
   tooltip: {
        trigger: 'item',
        formatter: function(params) {
            return params.name + ' 发明专利: ' + params.value[2];
        }
    },
   
    title: [
       {
        text: '陕西省2017年企业发明专利分析图',
        subtext: 'data from CAIP',
        sublink: '',
        left: 'center',
        textStyle: {
            color: '#000000',
            size: 10,
        }
    },
    
        {
            id: 'statistic',
            right: 120,
            top: 40,
            width: 100,
            textStyle: {
                color: '#fff',
                fontSize: 16
            }
        }
    ],
    toolbox: {
        iconStyle: {
            normal: {
                borderColor: '#fff'
            },
            emphasis: {
                borderColor: '#b1e4ff'
            }
        },
        feature: {
            dataZoom: {},
            brush: {
                type: ['rect', 'polygon', 'clear']
            },
            saveAsImage : {show: true}
        }
    },
    brush: {
        outOfBrush: {
            color: '#abc'
        },
        brushStyle: {
            borderWidth: 2,
            color: 'rgba(0,0,0,0.2)',
            borderColor: 'rgba(0,0,0,0.5)',
        },
        seriesIndex: [0, 1],
        throttleType: 'debounce',
        throttleDelay: 300,
        geoIndex: 0
    },
    geo: {
        map: '陕西',
        left: '10',
        right: '35%',
        center: [108, 35.5],
        zoom: 5,
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true,
        mapStyle: {
            styleJson:

                [{
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": {
                            "saturation": -100

                        }
                    },
                    {
                        "featureType": "land",
                        "elementType": "all",
                        "stylers": {
                            "saturation": -100
                        }
                    },
                    {
                        "featureType": "boundary",
                        "elementType": "geometry",
                        "stylers": {
                            "saturation": -100
                        }
                    },
                    {
                        "featureType": "railway",
                        "elementType": "all",
                        "stylers": {
                            "saturation": -100
                        }
                    },
                    {
                        "featureType": "highway",
                        "elementType": "geometry",
                        "stylers": {
                            "lightness": 20,
                            "saturation": -100
                        }
                    },
                    {
                        "featureType": "highway",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "visibility": "off"

                        }
                    },

                    {
                        "featureType": "highway",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "arterial",
                        "elementType": "geometry",
                        "stylers": {
                            "saturation": -100
                        }
                    },
                    {
                        "featureType": "arterial",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "saturation": -100
                        }
                    },
                    {
                        "featureType": "poi",
                        "elementType": "all",
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "green",
                        "elementType": "all",
                        "stylers": {
                            "color": "#056197",
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "subway",
                        "elementType": "all",
                        "stylers": {
                            "saturation": -100
                        }
                    },
                    {
                        "featureType": "manmade",
                        "elementType": "all",
                        "stylers": {
                            "saturation": -100
                        }
                    },
                    {
                        "featureType": "local",
                        "elementType": "all",
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "arterial",
                        "elementType": "labels",
                        "stylers": {
                            "saturation": -100
                        }
                    },
                    {
                        "featureType": "boundary",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "#029fd4"
                        }
                    },
                    {
                        "featureType": "building",
                        "elementType": "all",
                        "stylers": {
                            "saturation": -100
                        }
                    },
                    {
                        "featureType": "label",
                        "elementType": "all",
                        "stylers": {

                        }
                    }
                ]
        }
    },
    grid: {
        right: 40,
        top: 100,
        bottom: 40,
        width: '30%'
    },
    xAxis: {
        type: 'value',
        scale: true,
        position: 'top',
        boundaryGap: false,
        splitLine: {show: false},
        axisLine: {show: false},
        axisTick: {show: false},
        axisLabel: {margin: 2, textStyle: {color: '#aaa'}},
    },
    yAxis: {
        type: 'category',
        name: 'TOP 20',
        nameGap: 16,
        axisLine: {show: false, lineStyle: {color: '#ddd'}},
        axisTick: {show: false, lineStyle: {color: '#ddd'}},
        axisLabel: {interval: 0, textStyle: {color: '#ddd'}},
        data: []
    },
    series : [
        {
            name: '2017陕西专利情况统计汇总',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertedData[0],
            symbolSize: function (val) {
                return Math.max(val[2] / 20, 8);
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#ddb926'
                }
            }
        },
        {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertedData[1],
            symbolSize: function (val) {
                return Math.max(val[2] / 20, 2);
            },
            showEffectOn: 'emphasis',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#f4e925',
                    shadowBlur: 2,
                    shadowColor: '#333'
                }
            },
            zlevel: 1
        },
        {
            id: 'bar',
            zlevel: 2,
            type: 'bar',
            symbol: 'none',
            itemStyle: {
                normal: {
                    color: '#ddb926'
                }
            },
            data: []
        }
    ]
};


myChart.on('brushselected', renderBrushed);

// myChart.setOption(option);

setTimeout(function () {
    myChart.dispatchAction({
        type: 'brush',
        areas: [
            {
                geoIndex: 0,
                brushType: 'polygon',
                coordRange: [[108.531376,34.202873],[108.521027,34.067096],[108.521027,34.067096],[109.406397,34.058483],[109.506432,34.13788],[109.339707,34.562282],[109.376501,34.719093],[109.135037,34.712446],[108.791237,34.320305],[108.624512,34.243945]]
            }
        ]
    });
}, 0);


function renderBrushed(params) {
    var mainSeries = params.batch[0].selected[0];

    var selectedItems = [];
    var categoryData = [];
    var barData = [];
    var maxBar = 30;
    var sum = 0;
    var count = 0;

    for (var i = 0; i < mainSeries.dataIndex.length; i++) {
        var rawIndex = mainSeries.dataIndex[i];
        var dataItem = convertedData[0][rawIndex];
        var pmValue = dataItem.value[2];

        sum += pmValue;
        count++;

        selectedItems.push(dataItem);
    }

    selectedItems.sort(function (a, b) {
        return a.value[2] - b.value[2];
    });

    for (var i = 0; i < Math.min(selectedItems.length, maxBar); i++) {
        categoryData.push(selectedItems[i].name);
        barData.push(selectedItems[i].value[2]);
    }

    this.setOption({
        yAxis: {
            data: categoryData
        },
        xAxis: {
            axisLabel: {show: !!count}
        },
        title: {
            id: 'statistic',
            text: count ? '平均: ' + (sum / count).toFixed(4) : ''
        },
        series: {
            id: 'bar',
            data: barData
        }
    });
}