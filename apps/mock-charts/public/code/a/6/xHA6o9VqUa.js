var subtext = '基于18年6月3日对gallery的爬虫结果'


function topN(N) {
    var data = [];
    for (var i = 0; i < rawData.length; i++){
        data[i] = {};
        data[i].date = rawData[i].date;
        data[i].data = rawData[i].data.slice(0, N);
    }
    return data;
}

var data = topN(10);

var legend = [];
var testA = [];
//alert(data[10].data.length)
var colorListMapping = {};

//from myself
colorListMapping = {
    '广东': 'rgba(111,48,113, 0.8)',
    '山东': 'rgba(153,48,144, 0.8)',
    '浙江': 'rgba(174,49,138, 0.8)',
    '上海': 'rgba(211,50,123, 0.8)',
    '北京': 'rgba(227,50,109, 0.8)',
    '江苏': 'rgba(250,56,92, 0.8)',
    '安徽': 'rgba(2255,88,101, 0.8)',
    '四川': 'rgba(255,112,99, 0.8)',
    '湖北': 'rgba(255,130,85, 0.8)',
    '河北': 'rgba(255,165,58, 0.8)',
    '湖南': 'rgba(253,191,48, 0.8)',
    '福建': 'rgba(252,221,48, 0.8)',
    '河南': 'rgba(111,48,113, 0.8)',
    '广西': 'rgba(153,48,144, 0.8)',
    '陕西': 'rgba(174,49,138, 0.8)',
    '云南': 'rgba(211,50,123, 0.8)',
    '江西': 'rgba(227,50,109, 0.8)',
    '天津': 'rgba(250,56,92, 0.8)',
    '重庆': 'rgba(2255,88,101, 0.8)',
    '山西': 'rgba(255,112,99, 0.8)',
    '辽宁': 'rgba(255,130,85, 0.8)',
    '贵州': 'rgba(255,165,58, 0.8)',
    '甘肃': 'rgba(253,191,48, 0.8)',
    '内蒙古': 'rgba(252,221,48, 0.8)',
    '海南': 'rgba(111,48,113, 0.8)',
    '黑龙江': 'rgba(153,48,144, 0.8)',
    '吉林': 'rgba(174,49,138, 0.8)',
    '宁夏': 'rgba(211,50,123, 0.8)',
    '新疆': 'rgba(227,50,109, 0.8)',
    '青海': 'rgba(250,56,92, 0.8)'
}




var colorListS = [];
var colorListS1 = [];
//var t1=[];
//ti = data[i].data;   
//colorListF[0] = [1,2,3] 

//alert(colorListF[0])
for (var i = 0; i < data.length; i++) {
    var colorListF = [];
    var colorListF1 = {};
    for (var n = 0; n < data[i].data.length; n++) {
        colorListF.push(colorListMapping[data[i].data[n].name]);
        colorListF1[data[i].data[n].name] = colorListMapping[data[i].data[n].name];
        //dataValueF.push(data[i].data[n].value);
    }
    colorListS[i] = colorListF
    colorListS1[i] = colorListF1;

}
//alert(colorList1['江苏']);
//
//alert(colorListS[1]);
//alert(data1)
var option = {
    //  backgroundColor: '#25499F',
    //backgroundColor: "#020d22",
    baseOption: {
        animationDurationUpdate: 40,
        animationEasingUpdate: 'quinticInOut',
        timeline: {
            show: false,
            axisType: 'category',
            orient: 'vertical',
            autoPlay: true,
            //  inverse: true,
            playInterval: 30,
            left: null,
            right: 30,
            top: 330,
            bottom: 100,
            //  width: 46,
            height: null,
            label: {
                normal: {
                    show: true,
                    interval: 0,
                    //  textStyle: {
                    //  color: '#ddd'
                    //  }
                },
                //  emphasis: {
                //      textStyle: {
                //          color: '#fff'
                //      }
                //  }
            },
            symbol: 'none',
            lineStyle: {
                color: '#ccc',
                show: false
            },
            checkpointStyle: {
                symbol: 'none',
                color: '#bbb',
                borderColor: '#777',
                show: false,
                borderWidth: 1
            },
            controlStyle: {
                showNextBtn: false,
                showPrevBtn: false,
                normal: {
                    color: '#666',
                    show: false,
                    borderColor: '#666'
                },
                emphasis: {
                    color: '#aaa',
                    borderColor: '#aaa'
                }
            },
            data: data.map(function(ele) {
                return ele.date
            })
        },
        //  backgroundColor: '#25499F',
        title: [{
            //  text: '基于18年5月4日对gallery的爬虫结果',
            //  subtext: 'GDP单位:亿元',
            left: 'center',
            top: 'top',
            textStyle: {
                fontSize: 25,
                //  color: 'rgba(255,255,255, 0.9)'
            }
        }, {
            subtext: subtext,
            left: 'center',
            top: '5%'
        }],
        //  tooltip: {
        //      formatter: function(params) {
        //          if ('value' in params.data) {
        //              return params.data.value[2] + ': ' + params.data.value[0];
        //          }
        //      }
        //  },
        grid: {
            left: 10,
            right: '20%',
            top: '12%',
            height: 'auto',
            bottom: 10
        },
        xAxis: {},
        yAxis: {},
        series: [

            {
                id: 'bar',
                type: 'bar',
                barWidth: '12',
                tooltip: {
                    show: false
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        textStyle: {
                            //  color: '#ddd'
                        }
                    }
                },
                data: []
            },

        ]
    },
    options: []
}

for (var i = 0; i < data.length; i++) {
    //alert(colorListS[i])
    var xMax = 20;
    if (data[i].data[0].value > 20) {
        xMax = 'dataMax'
    }
    option.options.push({
        // backgroundColor:'#292d37',
        //backgroundColor: "#020d22",
        title: {
            text: data[i].date.substring(0,7)
        },
        xAxis: {
            show: true,
            type: 'value',
            interval: 1,
            //boundaryGap: [0, 0.1],
            //min: 10,
            max: xMax,
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false,
                color: 'rgb(170,170,170)',
                formatter: '{value}',
                textStyle: {
                    color: '#ddd'
                }
            },
            splitLine: {
                show: false
            }
        },
        yAxis: {
            type: 'category',
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false,
                textStyle: {
                    //  color: '#ddd'
                }
            },

            data: data[i].data.map(function(ele) {
                return ele.name
            }).reverse()
        },
        series: [

            {
                id: 'bar',
                itemStyle: {

                    normal: {
                        color: function(params) {
                            // build a color map as your need.
                            var colorList = colorListS1[i - 1]
                            return colorList[params.name]
                        },
                        label: {
                            show: true,
                            position: 'top',
                            formatter: '{c}%'
                        }
                    }


                },
                label: {
                    normal: {
                        position: 'right',
                        formatter: '{b} : {c}',
                        color: '#000000'
                    }
                },
                data: data[i].data.map(function(ele) {
                    return ele.value
                }).sort(function(a, b) {
                    return a > b
                })
            },

        ]
    })
}