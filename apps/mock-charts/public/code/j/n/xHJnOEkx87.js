var uploadedDataURL = "/asset/get/s/data-1534216044779-SkHOvTy8X.json";

function randomData() {
    return Math.round(Math.random() * 10000);
}


function showProvince() {
    //var name = 'hn';
    var visColor = ["rgb(255,33,0)", "rgb(255,56,0)", "rgb(255,120,0)", "rgb(255,173,0)", "rgb(255,205,0)", "rgb(255,230,0)", "rgb(255,220,0)", "rgb(170,236,0)", "rgb(13,129,0)"]
    //myChart.showLoading();

    $.get(uploadedDataURL, function(geoJson) {

        // myChart.hideLoading();

        echarts.registerMap(name, geoJson);

        myChart.setOption(option = {

            title: {
                text: "郑州市周边县区2018年9月份综合指数情况",
                //subtext: '七月',
                left: 'center',
                bottom: '450',
                textStyle: {
                    color: 'black',
                    fontSize: 28
                },
            },
            tooltip: {
                trigger: 'item'
            },

            visualMap: {
                min: 4,
                max:5,
                left: '870',
                top: '500',
                text: ['高', '低'], // 文本，默认为数值文本
                calculable: false,
                orient: 'vertical', //'horizontal',
                color: visColor

            },
            toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                    dataView: {
                        readOnly: false
                    },
                    restore: {},
                    saveAsImage: {}
                }
            },
            series: [{
                type: 'map',
                selectedMode: 'single',
                left: '6%',
                right: '18%',
                top: '20%',
                mapType: name,
                label: {
                    normal: {
                        show: true,
                        position: 'left',
                        formatter: "{b}" + ":\n" + "{c}",

                        fontSize: 11,
                        color: "white",
                        fontWeight: 600,
                    },


                    emphasis: {
                        textStyle: {
                            color: '#fff'

                        }
                    }
                },


                itemStyle: {

                    normal: {
                        borderColor: 'black',
                        areaColor: '#fff',
                    },
                    emphasis: {
                        areaColor: '#389BB7',
                        borderWidth: 0
                    }
                },
                animation: false,

                data: [{name:'上街区',value:4.53},
{name:'航空港区',value:4.71},
{name:'中牟县',value:4.17},
{name:'巩义市',value:4.58},
{name:'荥阳市',value:4.26},
{name:'新密市',value:4.01},
{name:'新郑市',value:4.59},
{name:'登封市',value:4.01},
{name:'惠济区',value:3.86},
{name:'二七区',value:4.54},
{name:'中原区',value:4.94},
{name:'管城回族区',value:4.49},
{name:'金水区',value:4.49},




                    //{name: '济源市', value:0}
                ]

            }],

        });
    });
}

var currentIdx = 0;

showProvince();