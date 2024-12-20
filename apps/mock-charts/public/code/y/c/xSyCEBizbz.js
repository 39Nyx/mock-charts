var uploadedDataURL = "/asset/get/s/data-1511850713219-BkWkmF5xM.json";
$.get(uploadedDataURL, function(geoJson) {
    echarts.registerMap('map', geoJson);
    jsonmap = echarts.getMap('map').geoJson.features;
});
option = {
    geo: {
        map: 'map',
        scaleLimit: {
            max: 4,
            min: 1,
        },
        selectedMode: 'single',
    }
};

//选中时缩放至选中处 无任何选中时回归中心
myChart.on("geoselectchanged", function(e) {
    //根据地图数据获取中心位置 
    var cppoint = jsonmap.find(function(a) {
        return a.properties.name == e.batch[0].name;
    }).properties;
    //筛选选中的城市
    var selected = Object.entries(e.batch[0].selected).filter(function(a) {
        return a[1];
    }).map(function(a) {
        return a[0];
    });
    if (!selected.length) {
        myChart.setOption(option = {
            geo: {
                center: null,
                zoom: 1,
            }
        });
    } else {
        myChart.setOption(option = {
            geo: {
                center: cppoint.cp,
                zoom: 3,
            }
        });
    }
});