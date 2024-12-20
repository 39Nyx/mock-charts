var uploadedDataURL = "/asset/get/s/data-1539412017265-lb2j07G4h.json";

myChart.showLoading();

$.get(uploadedDataURL, function(geoJson) {
    myChart.hideLoading(); //隐藏动画加载效果
    echarts.registerMap('TY', geoJson); //注册可用的地图

    myChart.setOption(option = {
        title: {
            text: '太原（2018）', //主标题文本，支持使用 \n 换行。
            subtext: '模拟太原覆盖', //副标题文本，支持使用 \n 换行
            sublink: '', //副标题文本超链接。
            textStyle: {
                color: '#fff',
                fontStyle: 'italic'
            }
        },
        tooltip: { //提示框组件
            trigger: 'item', //触发类型
            formatter: '{b}<br/>{c} (p / km2)'
        },
        toolbox: { //工具栏
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
                dataView: {
                    readOnly: false
                },
                restore: {}, //配置项还原
                saveAsImage: {} //保存为图片
            }
        },
        visualMap: {
            //                color:'#fff',
            min: 800,
            max: 50000,
            text: ['High', 'Low'],
            realtime: false,
            calculable: true,
            inRange: {
                color: ['lightskyblue', 'yellow', 'orangered']
            }
        },
        series: [{
            name: '太原',
            type: 'map',
            mapType: 'TY', // 自定义扩展图表类型
            itemStyle: {
                normal: {
                    label: {
                        show: true
                    }
                },
                emphasis: {
                    label: {
                        show: true
                    }
                }
            },
            data: [{
                    name: '小店区',
                    value: 1
                },
                {
                    name: '杏花岭区',
                    value: 15477.48
                },
                {
                    name: '万柏林区',
                    value: 31686.1
                },
                {
                    name: '古交市',
                    value: 6992.6
                },
                {
                    name: '尖草坪区',
                    value: 44045.49
                },
                {
                    name: '晋源区',
                    value: 40689.64
                },
                {
                    name: '娄烦县',
                    value: 37659.78
                },
                {
                    name: '清徐县',
                    value: 45180.97
                },
                {
                    name: '阳曲县',
                    value: 55204.26
                },
                {
                    name: '迎泽区',
                    value: 800.9
                }
            ],
            // 自定义名称映射
            nameMap: {
                'Xiaodian District': '小店区',
                'Xinhualing District': '杏花岭区',
                'District': '万柏林区',
                'Kowloon City': '古交市',
                'Jianchaoping District': '尖草坪区',
                'Jinyuan District': '晋源区',
                'North': '娄烦县',
                'Sai Kung': '清徐县',
                'Sha Tin': '阳曲县',
                'YinZhe District': '迎泽区'
            }
        }]
    });
    myChart.on('click', function(params) { //点击跳转
        console.log(params.value);
                  window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.name));
        
    });
});