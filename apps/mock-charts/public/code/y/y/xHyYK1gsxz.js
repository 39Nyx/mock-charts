var districts = {
    "宝安区": {
        "lat": 22.5896850000,
        "lng": 113.8631380000
    },
    "南山区": {
        "lat": 22.5296850000,
        "lng": 113.9331380000
    },
    "福田区": {
        "lat": 22.5381230000,
        "lng": 114.0687750000
    },
    "罗湖区": {
        "lat": 22.5621550000,
        "lng": 114.1394890000
    },
    "盐田区": {
        "lat": 22.5760380000,
        "lng": 114.2389500000
    },
    "龙岗区": {
        "lat": 22.7158600000,
        "lng": 114.2343500000
    }
};

var allData = {
    "穆斯林影响系数": {
        "district_count": [{
            "district": "宝安区",
            "count": 0.2
        },{
            "district": "南山区",
            "count": 0.3
        },{
            "district": "福田区",
            "count": 0.4
        },{
            "district": "罗湖区",
            "count": 0.4
        },{
            "district": "盐田区",
            "count": 0.2
        },{
            "district": "龙岗区",
            "count": 0.2
        }]
    },
    "外来人口影响系数": {
        "district_count": [{
            "district": "宝安区",
            "count": 0.3
        },{
            "district": "南山区",
            "count": 0.3
        },{
            "district": "福田区",
            "count": 0.4
        },{
            "district": "罗湖区",
            "count": 0.26
        },{
            "district": "盐田区",
            "count": 0.28
        },{
            "district": "龙岗区",
            "count": 0.33
        }]
    },
    "失业率影响系数": {
        "district_count": [{
            "district": "宝安区",
            "count": 0.1
        },{
            "district": "南山区",
            "count": 0.2
        },{
            "district": "福田区",
            "count": 0.1
        },{
            "district": "罗湖区",
            "count": 0.1
        },{
            "district": "盐田区",
            "count": 0.2
        },{
            "district": "龙岗区",
            "count": 0.2
        }]
    },
    "低收入影响系数": {
        "district_count": [{
            "district": "宝安区",
            "count": 0.18
        },{
            "district": "南山区",
            "count": 0.15
        },{
            "district": "福田区",
            "count": 0.1
        },{
            "district": "罗湖区",
            "count": 0.1
        },{
            "district": "盐田区",
            "count": 0.2
        },{
            "district": "龙岗区",
            "count": 0.24
        }]
    }
};

var option = {
    // color: ['#85b6b2', '#6d4f8d','#cd5e7e', '#e38980','#f7db88'],
    bmap: {
        center: [114.1039166260,22.5902744004],
        zoom: 12,
        roam: true,
        enableMapClick: false,
        mapStyle: {
            styleJson: [{
                "featureType": "all",
                "elementType": "all"

            }, {
                "featureType": "poi",
                "elementType": "all",
                "stylers": {
                    "visibility": "on"
                }
            }]
        }
    },
    legend: {
        show: false,
        orient: 'vertical',
        right: 20,
        top: 15,
        padding: 10,
        backgroundColor: "rgba(255,255,255,0.8)",
        data: []
    },
    series: [{
        type: 'pie',
        data: []
    }]
};

myChart.setOption(option);

myChart.on('legendselectchanged', function (params) {
    console.log(params.name);
    for(var prop in districtChart){
        districtChart[prop].dispatchAction({
            type: 'legendToggleSelect',
            name:params.name
        });
    }
});
setTimeout(init, 0);


function init() {
    initMap();
    initPieDistrict(myChart, getMap());
    showPie(["穆斯林影响系数", "外来人口影响系数", "失业率影响系数", "低收入影响系数"]);
    //showPie(["直接访问", "联盟广告", "视频广告"]);

}

function initMap() {
    var top_left_navigation = new BMap.NavigationControl({
        //type: BMAP_NAVIGATION_CONTROL_SMALL
    });
    var map = getMap();
    //map.centerAndZoom("苏州", 13);
    map.addControl(top_left_navigation);
    map.disableDoubleClickZoom();
    map.removeEventListener("click");
    return map;
}


function getMap() {
    return myChart.getModel().getComponent('bmap').getBMap();
}


var districtPoint = districts;
var districtChart = {};
var districtLabels = [];
var parentChart = null;

var initPieDistrict = function(chart, map) {
    parentChart = chart;
    var count = 0;
    for (var prop in districtPoint) {
        var district = prop;
        var position = districtPoint[prop];
        var id = "districtPoint" + count++;
        districtLabels.push(district);
        districtChart[district] = initPieMarker(map, id, district, position);
    }
    //console.log(districtLabels);
    //console.log(districtChart);
}



function initPieMarker(map, id, district, position) {
    var htm = '<div id="' + id + '" style="width:100px;height:100px;"></div>';
    var point = new BMap.Point(position.lng, position.lat);
    var myRichMarkerObject = new BMapLib.RichMarker(htm, point, {
        "anchor": new BMap.Size(-30, -30),
        barkground: "transparent"
    });
    map.addOverlay(myRichMarkerObject);
    document.getElementById(id).parentNode.style.backgroundColor = "transparent";
    document.getElementById(id).parentNode.style.zIndex = "1";
    var myChart = echarts.init(document.getElementById(id), "macarons");
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        
        title: {
            left: "center",
            top: "center",
            textStyle: {
                fontSize: 14,
                fontWeight: "bold"
            }
        },
        series: [{
            name: district,
            type: 'pie',
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center',
                    formatter: "{a}"
                }
            },
            radius: ['25', '40'],
            data: []

        }]
    }
    myChart.setOption(option);
    return myChart;
}

function showPie(arr) {
    let obj = {};
    console.log(arr.length, "len")
    districtLabels.forEach((i) => {
        obj[i] = {};
        arr.forEach((j) => {
            console.log(j, "xxx")
            obj[i][j] = 0;
        });
    });

    console.log(obj, "AA")
        //数据降维
    for (let prop in allData) {
        allData[prop].district_count.forEach((i) => {
            if (obj[i.district][prop] === 0) {
                obj[i.district][prop] = i.count;
            }
        });
    }
    console.log(obj);
    setData(obj, arr);
}

var placeHolderStyle = {
    normal : {
        color: 'rgba(255,255,255,0.8)',
        label: {show:false},
       
        labelLine: {show:false}
    },
    emphasis : {
        color: 'rgba(0,0,0,0)'
    }
};

function setData(data, label) {

    districtLabels.forEach((district) => {
        var count = 0;
        var dt = (data[district]);
        var newPieData = [];
        for (let prop in dt) {
            newPieData.push({
                name: prop,
                value: dt[prop]
            });
            count += dt[prop];
        }
        console.log(newPieData);

        if (count === 0) {
            newPieData = [];
        }
        districtChart[district].setOption({
            title: {
                show: count > 0,
                text: district
            },
            legend: {
                show:  false,
                data: label
            },
            series: [{
                data: newPieData
            }, {
                tooltip:{show:false},
                type: 'pie',
                radius: [0, 25],
                data: [{
                    value: 0,
                    itemStyle : placeHolderStyle
                }]
            }]
        })
    });
    let labelName = label.map((i) => {
        return {
            name: i
        };
    });

    //修改parentChart
    parentChart.setOption({
        legend: {
            show: (label.length > 0),
            data: label
        },
        series: [{
            data: labelName
        }]
    });
}