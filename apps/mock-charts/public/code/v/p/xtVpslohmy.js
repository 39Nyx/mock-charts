// 市区坐标
var geoCoordMap = {
    "北京市": [116.41433, 39.91095],
    "天津市": [117.191041, 39.134857],
    "河北省": [114.511934, 38.058785],
    "山西省": [112.543424, 37.887658],
    "内蒙古": [111.694848, 40.836106],
    "辽宁省": [123.425425, 41.819004],
    "吉林省": [126.322646, 43.871432],
    "黑龙江省": [128.60352, 47.758573],
    "上海市": [121.477611, 31.226174],
    "江苏省": [118.799398, 32.045042],
    "浙江省": [120.158498, 30.291092],
    "安徽省": [117.293119, 31.87839],
    "福建省": [119.307623, 26.068211],
    "江西省": [115.92252, 28.68553],
    "山东省": [116.989563, 36.682589],
    "河南省": [113.627458, 34.762387],
    "湖北省": [114.305858, 30.605913],
    "湖南省": [112.93296, 28.236376],
    "广东省": [113.261811, 23.118408],
    "广西": [108.326736, 22.824533],
    "海南省": [110.290648, 20.012453],
    "重庆市": [107.546798, 30.978004],
    "四川省": [102.063163, 30.667561],
    "贵州省": [106.661781, 27.609054],
    "云南省": [102.702913, 25.050202],
    "西藏": [88.112616, 31.668426],
    "陕西省": [108.925798, 34.296079],
    "甘肃省": [103.834346, 36.072614],
    "青海省": [95.778449, 36.625145],
    "宁夏": [106.230594, 38.490587],
    "新疆": [83.61023, 40.83845],
    "台湾省": [121.511849, 25.060677],
    "香港": [114.179376, 22.318339],
    "澳门": [113.546969, 22.202741]
};
var rawData = {
    "北京市": [10, 20, 30],
    "天津市": [10, 20, 30],
    "河北省": [10, 20, 30],
    "山西省": [10, 20, 30],
    "内蒙古": [10, 20, 30],
    "辽宁省": [10, 20, 30],
    "吉林省": [10, 20, 30],
    "黑龙江省": [20, 50, 30],
    "上海市": [10, 20, 30],
    "江苏省": [10, 20, 30],
    "浙江省": [10, 20, 30],
    "安徽省": [10, 20, 30],
    "福建省": [10, 20, 30],
    "江西省": [10, 20, 30],
    "山东省": [10, 20, 30],
    "河南省": [10, 20, 30],
    "湖北省": [10, 20, 30],
    "湖南省": [10, 20, 30],
    "广东省": [10, 20, 30],
    "广西": [10, 20, 30],
    "海南省": [10, 20, 30],
    "重庆市": [10, 20, 30],
    "四川省": [10, 20, 30],
    "贵州省": [10, 20, 30],
    "云南省": [10, 20, 30],
    "西藏": [10, 20, 30],
    "陕西省": [10, 20, 30],
    "甘肃省": [10, 20, 30],
    "青海省": [10, 20, 30],
    "宁夏": [10, 20, 30],
    "新疆": [10, 20, 30],
    "台湾省": [10, 20, 30],
    "香港": [10, 20, 30],
    "澳门": [10, 20, 30]
};

option = {
    animation: false,
    // 地图背景颜色
    backgroundColor: new echarts.graphic.RadialGradient(0.5, 0.5, 0.4, [{
        offset: 0,
        color: '#eee'
    }, {
        offset: 1,
        color: '#eee'
    }]),

    geo: {
        scaleLimit: {
            min: 1,
            max: 1
        },
        map: 'china',
        // silent: true,
        roam: true,
        zoom: 1.155, // 地图初始大小
        center: [102.925798, 35.296079], // 初始中心位置
        label: {
            emphasis: {
                show: false,
                areaColor: '#eee'
            }
        },

        // 地区块儿颜色
        itemStyle: {
            normal: {
                areaColor: '#999',
                borderColor: '#fff'
            },
            emphasis: {
                areaColor: '#999'
            }
        }
    },
    series: []
};

function renderEachCity() {
    var option = {
        xAxis3D: {},
        yAxis3D: {},
        zAxis3D:{},
         grid3D: {},
    visualMap: {
        max: 20,
        inRange: {
            color:['#F75D5D', 'yellow', 'red']
        }
    },
        series: []
    };

    echarts.util.each(rawData, function(dataItem, idx) {
        //console.log('dataItem, idx',dataItem, idx)
        //geoCoord 经纬度
        var geoCoord = geoCoordMap[idx];
        var coord = myChart.convertToPixel('geo', geoCoord);

        idx += '';

       
       dataItem[0]=[0,0,10];
        dataItem[1]=[0,1,20];
         dataItem[2]=[0,2,30]
        inflationData = dataItem;
        console.log(10,inflationData);
       
   option.zAxis3D.type = "value";
        option.xAxis3D.type = "category";
        option.xAxis3D.id = idx;
         option.xAxis3D.gridId = idx;
          option.xAxis3D.name = idx;
        option.xAxis3D.data = ["数据A", "数据B", "数据C"];
           option.yAxis3D.id = idx;
        option.yAxis3D.type = "category";
        option.yAxis3D.data = ['Saturday', 'Friday','Friday1'];
        option.zAxis3D.type = "value";
        option.zAxis3D.id = idx;
       
        option.grid3D.width = 90
        option.grid3D.height = 40
        option.grid3D.left = coord[0] - 15
        option.grid3D.top = coord[1] - 15
        option.series.push({
            id: idx,
           
            xAxisId: idx,
            yAxisId: idx,
           type: 'bar3D',
            //data: inflationData,
             data: inflationData
        })
    });
    // console.time('a');
    myChart.setOption(option);
    // console.timeEnd('a');
}






setTimeout(renderEachCity, 0);
// 缩放和拖拽
function throttle(fn, delay, debounce) {

    var currCall;
    var lastCall = 0;
    var lastExec = 0;
    var timer = null;
    var diff;
    var scope;
    var args;

    delay = delay || 0;

    function exec() {
        lastExec = (new Date()).getTime();
        timer = null;
        fn.apply(scope, args || []);
    }

    var cb = function() {
        currCall = (new Date()).getTime();
        scope = this;
        args = arguments;
        diff = currCall - (debounce ? lastCall : lastExec) - delay;

        clearTimeout(timer);

        if (debounce) {
            timer = setTimeout(exec, delay);
        } else {
            if (diff >= 0) {
                exec();
            } else {
                timer = setTimeout(exec, -diff);
            }
        }

        lastCall = currCall;
    };

    return cb;
}

var throttledRenderEachCity = throttle(renderEachCity, 0);

// // 点击显示柱状图
myChart.on('click', function(e) {
    console.log('点击显示柱状图', e)


    if (e.seriesId) {
        console.log('图表', e.seriesId)
    } else {
        console.log('地图', e.region.name)

    }

    // if(e.componentSubType == "bar"){
    //     // 先清除所有柱状图
    $('.tongJiTu').remove();

 


    // }
    return;
});