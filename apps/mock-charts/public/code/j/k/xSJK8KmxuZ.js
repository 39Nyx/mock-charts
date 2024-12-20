app.title = '65k+ 飞机航线';

myChart.showLoading();

$.get('data/asset/data/flights.json', function(data) {

    myChart.hideLoading();

    function getAirportCoord(idx) {
        return [data.airports[idx][3], data.airports[idx][4]];
    }
    var routes = data.routes.map(function (airline) {
        return [
            getAirportCoord(airline[1]),
            getAirportCoord(airline[2])
        ];
    });

    myChart.setOption(option = {
        title: {
            text: 'World Flights',
            left: 'center',
            textStyle: {
                color: '#eee'
            }
        },
        backgroundColor: '#000',
        width:'450',
        height:'160',
        tooltip: {
            formatter: function (param) {
                var route = data.routes[param.dataIndex];
                return data.airports[route[1]][1] + ' > ' + data.airports[route[2]][1];
            }
        },
        geo: {
            map: 'world',
            left: 0,
            right: 0,
            silent: true,
            itemStyle: {
                normal: {
                    borderColor: '#92c431',
                    color: '#243510'
                }
            }
        },
        series: [{
            type: 'lines',
            coordinateSystem: 'geo',
            data: routes,
            large: true,
            largeThreshold: 100,
            lineStyle: {
                normal: {
                    opacity: 0.0,
                    width: 0.5,
                    curveness: 0.
                }
            },
            // 设置混合模式为叠加
            blendMode: 'lighter'
        }]
    });
});