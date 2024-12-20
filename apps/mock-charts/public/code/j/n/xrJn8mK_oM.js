var uploadedDataURL = "/asset/get/s/data-1523180637653-B1LvNDPof.json";

$.getJSON(uploadedDataURL, function(data) {

    var points = [].concat.apply([], data.map(function(track) {
        return track.map(function(seg) {
            return seg.coord.concat([1]);
        });
    }));
    myChart.setOption({
        animation: false,
        bmap: {
            center: [116.404412, 39.914382],
            zoom: 12,
            roam: true
        },
        visualMap: {
            show: false,
            top: 'top',
            min: 0,
            max: 5,
            seriesIndex: 0,
            calculable: true,
            inRange: {
                color: ['blue', 'blue', 'green', 'yellow', 'red']
            }
        },
        series: [{
            type: 'heatmap',
            coordinateSystem: 'bmap',
            data: points,
            pointSize: 5,
            blurSize: 6
        }]
    });

    var bmap = myChart.getModel().getComponent('bmap').getBMap();

    var county = ['北京市通州区', '北京市丰台区', '北京市顺义区', '北京市昌平区', '北京市西城区', '北京市东城区', '北京市密云县', '北京市大兴区', '北京市延庆县', '北京市平谷区', '北京市海淀区', '北京市朝阳区', '北京市门头沟区', '北京市石景山区', '北京市房山区', '北京市怀柔区'];

    for (var i = 0; i < county.length; i++) {
        var bdary = new BMap.Boundary();
        bdary.get(county[i], function(rs) { //获取行政区域
            //bmap.clearOverlays(); //清除地图覆盖物       
            var count = rs.boundaries.length; //行政区域的点有多少个
            if (count === 0) {
                alert('未能获取当前输入行政区域');
                return;
            }
            var pointArray = [];
            for (var i = 0; i < count; i++) {
                var ply = new BMap.Polygon(rs.boundaries[i], {
                    strokeWeight: 2,
                    strokeColor: "#ff0000"
                }); //建立多边形覆盖物
                bmap.addOverlay(ply); //添加覆盖物

            }

        });

    }
    bmap.addControl(new BMap.MapTypeControl());
});