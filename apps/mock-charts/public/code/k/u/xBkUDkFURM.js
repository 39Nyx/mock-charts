var uploadedDataURL = "/asset/get/s/data-1526267683863-H1n7kFICf.json";

var mapName = '河北省';

myChart.showLoading();
$.get(uploadedDataURL, function(chinaJson) {
    echarts.registerMap(mapName, chinaJson);
    myChart.hideLoading();
    myChart.setOption({
        visualMap: {
            min: 20,
            max: 60,
            text:['High','Low'],
            realtime: false,
            calculable: true,
            inRange: {
                color: ['lightskyblue','yellow', 'orangered']
            }
        },
        series: [{
            type: 'map',
            map: mapName,
            selectedMode:'single',
            itemStyle:{
                normal:{
                    label:{
                        show:true
                    }
                },
                emphasis:{
                    label:{
                        show:true
                    }
                }
            },
         
        }]
    })
});
