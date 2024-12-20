var data = [
    {name: '1徐记烧饼', value: 1},
        {name: '2天桥老金涮肉', value: 2},
        {name: '3成都一家人火锅', value: 3},
        {name: '4烧虾师', value: 4},
        {name: '5甘兎庵抹茶主题甜品店', value: 5},
        {name: '6和府捞面', value: 6},
        {name: '7萌心火辣串串香', value: 7},
        {name: '8一点点', value: 8},
        {name: '9中关村茶点', value: 9},
        {name: '10富华斋饽饽铺', value: 10},
];

var geoCoordMap = {
          '1徐记烧饼铺':[116.370219,39.932679],
        '2天桥老金涮肉':[116.401558,39.888591],
        '3成都一家人火锅':[116.457267,39.937886],
        '4烧虾师':[116.45292,39.939003],
        '5甘兎庵抹茶主题甜品店':[116.379312,39.916994],
        '6和府捞面':[116.321269,39.985656],
        '7萌心火辣串串香':[116.418773,40.005001],
        '8一点点':[116.465115,39.91139],
        '9中关村茶点':[116.328247,39.992868],
        '10富华斋饽饽铺':[116.382108,39.941263],
};

function convertData(data) {
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

function randomValue() {
    return Math.round(Math.random()*1000);
}



option = {
    tooltip: {},
    title: {
                text: '北京十大网红店铺分布',
                subtext: '数据来源@北京吃货小分队'
            },
    geo: {
  map: 'beijing',
  left: 0, top: 0, right: 0, bottom: 0,
  boundingCoords: [
    // 定位左上角经纬度
    [115.0, 37.4],
    // 定位右下角经纬度
    [117.4, 41.6]
],
        roam: true,
        label: {
            normal: {
                show: true,
                textStyle: {
                    color: 'rgba(0,0,0,0.4)'
                }
            }
        },
        itemStyle: {
            normal:{
                borderColor: 'rgba(0, 0, 0, 0.2)'
            },
            emphasis:{
                areaColor: null,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 20,
                borderWidth: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    },
    series : [
       {
           type: 'scatter',
           coordinateSystem: 'geo',
           data: convertData(data),
           symbolSize: 60,
           symbol: 'pin',
           symbolRotate: 30,
           label: {
               normal: {
                   formatter: '{b}',
                   show: true
               },
               emphasis: {
                   show: true
               }
           },
           itemStyle: {
               normal: {
                    color: '#F06C00'
               }
               
           }
        },
     
    ]
};