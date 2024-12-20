var posList = [
    'left', 'right', 'top', 'bottom',
    'inside',
    'insideTop', 'insideLeft', 'insideRight', 'insideBottom',
    'insideTopLeft', 'insideTopRight', 'insideBottomLeft', 'insideBottomRight'
];

app.configParameters = {
    position: {
        options: echarts.util.reduce(posList, function(map, pos) {
            map[pos] = pos;
            return map;
        }, {})
    },
    distance: {
        min: 0,
        max: 100
    }
};

app.config = {
    position: 'top',
    distance: 20,
    onChange: function() {
        myChart.setOption({
            series: {
                type: 'scatter',
                label: {
                    normal: {
                        position: app.config.position,
                        distance: app.config.distance
                    }
                }
            }
        });
    }
};



option = {
    series: [{
        name: 'aaa',
        type: 'scatter',
        symbolSize: 160,
        symbol: 'roundRect',
        data: [
            [1, 1]
        ],
        label: {
           
            emphasis: {
                position: 'right',
                distance: app.config.distance,

                show: true,
                formatter: function(p){
                    console.log('pppp----',p);
                    return [
                    '{a|'+p.seriesName+'}{b|}',
                    '{hr|}',
                    '{valueM|危险事件}{valueR|'+p.data[0]+'}',
                    '{valueM|安全等级得分}{valueR|'+p.data[1]+'}',
                ].join('\n')
                },
                
                backgroundColor: '#333',
                borderColor: '#555',
                borderWidth: 1,
                borderRadius: 5,
                padding: 10,
                fontSize: 28,
                // shadowBlur: 1,
                // shadowColor: '#888',
                // shadowOffsetX: 0,
                // shadowOffsetY: 3,
                // textBorderColor: '#000',
                // textBorderWidth: 3,
                color: '#fff',
                rich: {
                    a: {
                        // width:300,
                        fontSize: 20,
                        color: '#eee',
                        align: 'left',
                        padding: [5, 0, 50, 0],
                    },
                    b: {
                        // backgroundColor: '#333',
                        width: '100%',
                        align: 'right',
                        height: 30,
                        borderRadius: [4, 4, 0, 0]
                    },
                    hr: {
                        borderColor: '#777',
                        width: '100%',
                        borderWidth: 0.5,
                        height: 0
                    },
                    valueL: {
                        padding: [50, 0, 0, 0],
                        fontSize: 12,
                        height: 18,
                        align: 'left'
                    },
                    valueM: {
                        padding: [0,5, 0, 0, 0],
                        fontSize:12,
                        color: '#eee',
                        height: 18,
                        align: 'right'
                    },
                    valueR: {
                        fontSize:12,
                        width: 30,
                        color: '#eee',
                        height: 18,
                        align: 'right'
                    },

                },
            }
            
            // ------------
        }
    },
    ],
    xAxis: {
        max: 2
    },
    yAxis: {
        max: 2
    }
};