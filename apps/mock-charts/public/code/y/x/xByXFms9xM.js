var cityInfo = {
    "Bus": ["销售金额: 599万元", "出票量: 5,675张", "平均票价: 1,203元", "可用性: 5.67%",],
    "上海": ["", "", "", ""],
    "Longyan": ["", "", "", ""]
    
};

option = {
    //backgroundColor: 'rgba(21, 21, 35, .5)',
    backgroundColor: 'rgba(21, 21, 35, 0)',
    tooltip: {
        trigger: 'item',
        formatter: function (param) {
            return cityInfo[param.name].join("<br>");
        }
    },
    geo: {
        map: 'world',
        left: 20,
        right: 20,
        top: 10,
        bottom: 10,
        //center: [116.584556, 40.080111],
        roam: true,
        silent: true,
        itemStyle: {
            normal: {
                borderColor: '#171C35',//'rgba(0,0,0,0)',
                borderWidth: 1.4,
                color: '#4B4D65'
            }
        }
    },
    series: [
        {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            //* 
            data: [
               {name: '上海', value: [121.48, 31.22, 100] },
               {name: 'Longyan', value: [116.746389, 25.674167, 100] },
               {name: 'Bus', value: [104.177724, 10.614922, 100] }
            ], 
            // */
            /* 
            symbolSize: function(val) {
                return Math.max(val[2] / 10, 8);
            },
             */
            symbolSize: 14,
            
            showEffectOn: 'render',
            rippleEffect: {
                scale: 4,
                brushType: 'stroke' // fill | stroke
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    textStyle: {
                        color: '#fff'
                    },
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    // 通用点颜色
                    color: '#FFBA36',
                    //shadowBlur: 50,
                    //shadowColor: '#EE0000'
                    opacity: 1,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowBlur: 100
                },
                emphasis: {
                    color: '#5DC1F4'
                }
            },
            zlevel: 100
        }
        
    ],
    // 设置混合模式为叠加
    blendMode: 'lighter'
};