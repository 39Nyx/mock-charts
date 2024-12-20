
var mapName = 'china'
    
var data = [
    {name: '杭州', pName: '浙江', value: [120.219375, 30.259244, 125]},
    {name: '宁波', pName: '浙江', value: [121.579006, 29.885259, 55]},
    {name: '合肥', pName: '安徽', value: [117.282699, 31.866942, 36]},
    {name: "黄山市", pName: '安徽', value: [118.29357, 29.734435, 125]},
    {name: '南京', pName: '江苏', value: [118.778074, 32.057236, 78]},
    {name: '苏州', pName: '江苏', value: [120.619907, 31.317987, 69]},
    {name: '成都', pName: '四川', value: [104.067923, 30.679943, 100]},
    {name: '广东', pName: '广东', value: [113.394818, 23.408004, 36]},
    {name: '深圳', pName: '广东', value: [114.025974, 22.546054, 58]}
]
    
var provinces = [
    {name:"北京"},
    {name:"天津"},
    {name:"河北"},
    {name:"山西"},
    {name:"内蒙古"},
    {name:"辽宁"},
    {name:"吉林"},
    {name:"黑龙江"},
    {name:"上海"},
    {name:"江苏"},
    {name:"浙江"},
    {name:"安徽"},
    {name:"福建"},
    {name:"江西"},
    {name:"山东"},
    {name:"河南"},
    {name:"湖北"},
    {name:"湖南"},
    {name:"重庆"},
    {name:"四川"},
    {name:"贵州"},
    {name:"云南"},
    {name:"西藏"},
    {name:"陕西"},
    {name:"甘肃"},
    {name:"青海"},
    {name:"宁夏"},
    {name:"新疆"},
    {name:"广东"},
    {name:"广西"},
    {name:"海南"},
];

provinces.forEach(item => {
    item.value = data
                    .filter(item2 => item2.pName === item.name)
                    .reduce((pre, curr) => curr.value[2]+pre, 0)
})

provinces.sort((a, b) => {
    return b.value - a.value
})

console.log(provinces)
    
var colors = ['#f15a24', '#f47b28', '#f89d2c', '#fcaa2f', '#fccc21'].reverse()
    

var max = provinces[0].value,
    min = 0;

option = {
    title: {
        text: '风险城市分布图',
        x: 'center',
        textStyle: {
            color: "#999",
            fontSize: 24
        }
    },
    
    tooltip: {
        trigger: 'item',
        formatter: function(params){
            var toolTiphtml = ''

            for(var i = 0;i<data.length;i++){
                if(params.name==data[i].name){
                    toolTiphtml += data[i].name+' : ' + data[i].value[2]
                }
            }
            return toolTiphtml
           
        }
    },
 
    visualMap: {
        show: true,
        min: 0,
        max: max,
        text: ['高', '低'],
        calculable: true,
        seriesIndex: [1],
        inRange: {
            color: ['#ddfdfe', '#2686e2']
        }
    },
    geo: {
        show: true,
        map: mapName,
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false,
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                borderColor: '#3B5077',
            },
            emphasis: {
                // 鼠标滑过展示的区域颜色
                areaColor: 'pink',
            }
        }
    },
    series: [{
            name: '散点',
            
            type: 'scatter',
            
            coordinateSystem: 'geo',
            
            data: data,
            
            // 散点大小
            symbolSize: function(val) {
                return val[2] / 10;
            },
            
            // 散点旁边的文案
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    color: '#000',
                    show: true
                },
                emphasis: {
                    show: false
                }
            },
            
            // 散点的样式
            itemStyle: {
                normal: {
                    color: 'yellow'
                }
            }
        },
        {
            type: 'map',
            map: mapName,
            geoIndex: 0,
            aspectScale: 0.75, //长宽比
            showLegendSymbol: false, // 存在legend时显示
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: false,
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#031525',
                    borderColor: '#3B5077',
                },
                emphasis: {
                    areaColor: '#2B91B7'
                }
            },
            
           
            data: provinces
        },
        
        {
            name: 'Top 5',
            
            silent: true,
            
            type: 'effectScatter',
            
            coordinateSystem: 'geo',
            
            data: data.slice(0, 5),
            
            symbolSize: function(val) {
                return val[2] / 10;
            },

            
            rippleEffect: {
                brushType: 'stroke'
            },
 
            
            itemStyle: {
               
                normal: {
                    color: function(val) {
                        return colors[val.dataIndex]
                    }
                }
            }
        },

    ]
};
myChart.setOption(option);