app.title = '极坐标柱状图label';

option = {
    angleAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四'],
        z: 10
    },
    grid: {
        left: '30%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    radiusAxis: {

    },
    polar: {},
    // barGap:'0%',
    // barCategoryGap:'0%',
    series: [{
            type: 'bar',
            data: [-1, -2, 3, -4],
            coordinateSystem: 'polar',
            name: 'A',
            stack: 'b'
        },
        {
            type: "custom",
            coordinateSystem: 'polar',
            renderItem: function(params, api) {
                var values = [api.value(0), api.value(1)];
                var coord = api.coord(values);
                return {
                    type: 'text',
                    // position: [3 * Math.sin(coord[3]), 3 * Math.cos(coord[3])],
                    // rotation: coord[3] + Math.PI / 2,
                    // origin: [coord[0], coord[1]],
                    style: {
                        text: api.value(0),
                        fill: "#ac6",
                        fontSize: 16,
                        textAlign: "right",
                        textVerticalAlign: "middle",
                        x: coord[0],
                        y: coord[1]
                    }
                };
            },
            data: [-1, -2, -3, -4],
        }
    ],
    legend: {
        show: true,
        data: ['A', 'B', 'C']
    }
};
// var l = barLayout[currentBarIndex]['offsetCenter'] * Math.PI * (coord[2] / 180)
// var angle = coord[3]*(180/Math.PI)
// var x = Math.sin(coord[3]) * l
// var y = Math.cos(coord[3]) * l