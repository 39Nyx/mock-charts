myChart.showLoading();

$.get('http://show.funlee.cn/api/wuhan.json', function (geoJson) {

    myChart.hideLoading();

    echarts.registerMap('wuhan', geoJson);

    myChart.setOption(option = {
        tooltip: {
            trigger: 'item',
            formatter: '{b}:{c}'
        },
        toolbox: {
            show: false,
        },
        visualMap: {
            min: 800,
            max: 50000,
            text:['High','Low'],
            realtime: false,
            calculable: true,
            bottom:50,
            textStyle:{
                color:"#00eaff"
            },
            inRange: {
                color: ['lightskyblue','yellow', 'orangered']
            }
        },
        series: [
            {
                name: '重点人员在汉活动情况',
                type: 'map',
                mapType: 'wuhan', // 自定义扩展图表类型
                roam:true,
                zoom:'',
                itemStyle:{
                    normal:{label:{show:false}},
                    emphasis:{
                        label:
                            {
                                show:true,
                            },
                        areaColor:"red"
                        
                    }
                },
                label:{
                    normal:{
                        textStyle:{
                            color:"#00eaff"
                        }
                    }
                },
                data:[
                    {name: '江岸区', value: 20057.34},
                    {name: '江汉区', value: 15477.48},
                    {name: '硚口区', value: 31686.1},
                    {name: '汉阳区', value: 6992.6},
                    {name: '武昌区', value: 44045.49},
                    {name: '洪山区', value: 40689.64},
                    {name: '青山区', value: 37659.78},
                    {name: '东西湖区', value: 45180.97},
                    {name: '蔡甸区', value: 55204.26},
                    {name: '江夏区', value: 21900.9},
                    {name: '黄陂区', value: 4918.26},
                    {name: '新洲区', value: 5881.84},
                    {name: '汉南区', value: 4178.01}
                ],
                // 自定义名称映射
                nameMap: {
                    // 'Central and Western': '江岸区',
                    // 'Eastern': '江汉区',
                    // 'Islands': '硚口区',
                    // 'Kowloon City': '汉阳区',
                    // 'Kwai Tsing': '武昌区',
                    // 'Kwun Tong': '洪山区',
                    // 'North': '青山区',
                    // 'Sai Kung': '东西湖区',
                    // 'Sha Tin': '蔡甸区',
                    // 'Sham Shui Po': '江夏区'
                    // 'Southern': '黄陂区',
                    // 'Tai Po': '新洲区',
                    // 'Tsuen Wan': '汉南区'
                }
            }
        ]
    });
});