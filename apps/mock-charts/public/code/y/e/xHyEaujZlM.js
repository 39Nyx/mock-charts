let geoCoordMap = {
  
    "合肥市": [117.27, 31.86],
    "芜湖市": [118.38, 31.33],
    "蚌埠市": [117.38, 32.92],
    "淮南市": [117.00, 32.63],
    "马鞍山市":[118.5,31.7],
    "淮北市":[116.8,33.95],
    "铜陵市":[117.82,30.93],
    "安庆市":[117.05,30.53],
    "黄山市":[118.33,29.72],
    "滁州市":[118.32,32.3],
    "阜阳市":[115.82,32.9],
    "宿州市":[116.98,33.63],
    "六安市":[116.5,31.77],
    "亳州市":[115.78,33.85],
    "池州市":[117.48,30.67],
    "宣城市":[118.75,30.95],
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
    console.log(res)
    return res;
};

option = {
    title: {   //关于标题的一些设定
        text: '2015年安徽省各市人口分布',
        x: 'center',
        top: "10",
        textStyle: {
            color: '#000',
            fontSize: 25
        }
    },
    tooltip: {
        show: true,
        // formatter:(params)=>{
        //   let data = "测试1:"+params.name + "<br/>"+"值:"+ params.value[2]+"<br/>"+"地理坐标:[" + params.value[0]+","+params.value[1] +"]";
        //   return data;
        // },
    },
    visualMap: [{
        type: 'continuous',
        seriesIndex: 0,
        text: ['人口数（万人）'],//bar3D的颜色转换（最左侧的图例）
        calculable: true,
        max: 1100,
        inRange: {
            color: ['#87aa66', '#eba438', '#d94d4c']
        }
    },
    //{
      // type: 'continuous',
      // seriesIndex: 1,
      // text: ['scatter3D'],//原图右侧的图例（scatter3D）
      // left: 'right',
      // max: 100,
      // calculable: true,
      // inRange: {
      //    color: ['#000', 'blue', 'purple']
      //  }
    //}
    ],
    geo3D: {
        map: 'china',
        roam: true,
        itemStyle: {
            areaColor: '#BBFFFF',
            opacity: 1,
            borderWidth: 0.3,//调节各个省份边界线的深浅
            borderColor: '#000'
        },
        label: {
            show: true,
            textStyle: {
                color: '#000', //地图初始化区域字体颜色
                fontSize: 8,
                opacity: 1,
                backgroundColor: 'rgba(0,23,11,0)'
            },
        },
        emphasis: { //当鼠标放上去  地区区域是否显示名称
            label: {
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 3,
                    backgroundColor: 'rgba(0,23,11,0)'
                }
            }
        },
        //shading: 'lambert',
        light: { //光照阴影
            main: {
                color: '#fff', //光照颜色
                intensity: 1, //光照强度
                //shadowQuality: 'high', //阴影亮度
                shadow: false, //是否显示阴影
                alpha:55,
                beta:10

            },
             ambient: {
                intensity: 0.3
            }
        }
    },
    series: [{
        name: '人口数',
        type: "bar3D",
        coordinateSystem: 'geo3D',
        barSize: 0.10, //柱子粗细
        shading: 'lambert',
        opacity: 1,
        bevelSize:0.3,
        label: {
            show: false,
            formatter: '{b}'
        },
        data: convertData([{
                name: "合肥市",
                value: (717.12).toFixed(2)
            }, {
                name: "芜湖市",
                value: (384.79).toFixed(2)
            }, {
                name: "蚌埠市",
                value: (376.35).toFixed(2)
            }, {
                name: "淮南市",
                value: (246.2).toFixed(2)
            }, {
                name: "马鞍山市",
                value: (228.5).toFixed(2)
            }, {
                name: "淮北市",
                value: (216.5).toFixed(2)
            }, {
                name: "铜陵市",
                value: (73.8).toFixed(2)
            }, {
                name: "安庆市",
                value: (622.1).toFixed(2)
            }, {
                name: "黄山市",
                value: (147.69).toFixed(2)
            }, {
                name: "滁州市",
                value: (449.06).toFixed(2)
            }, {
                name: "阜阳市",
                value: (1042.65).toFixed(2)
            }, {
                name: "宿州市",
                value: (649.51).toFixed(2)
            }, {
                name: "六安市",
                value: (717.73).toFixed(2)
            }, {
                name: "亳州市",
                value: (634.95).toFixed(2)
            }, {
                name: "池州市",
                value: (161.61).toFixed(2)
            }, {
                name: "宣城市",
                value: (279.95).toFixed(2)
            }
        ]),
    }, 
    //{
    //    name: 'scatter3D',
    //    type: "scatter3D",
    //    coordinateSystem: 'geo3D',
    //    symbol: 'pin',
    //    symbolSize: 30,
    //    opacity: 1,
    //    label: {
    //        show: false,
    //        formatter: '{b}'
    //    },
    //    itemStyle: {
    //        borderWidth: 0.5,
    //        borderColor: '#fff'
    //    },
    //    data: convertData([{
    //        name: "阳泉",
    //        value: ((Math.random() * 100) + 50).toFixed(2)
    //    }, {
    //        name: "莱州",
    //        value: ((Math.random() * 100) + 50).toFixed(2)
    //    }, {
    //        name: "湖州",
    //        value: ((Math.random() * 100) + 50).toFixed(2)
    //    }, {
    //        name: "汕头",
    //        value: ((Math.random() * 100) + 50).toFixed(2)
    //    }, {
    //        name: "昆山",
    //        value: ((Math.random() * 100) + 50).toFixed(2)
    //    }, {
    //        name: "张家口",
    //        value: ((Math.random() * 100) + 50).toFixed(2)
    //    }])
   // }
   ]
}