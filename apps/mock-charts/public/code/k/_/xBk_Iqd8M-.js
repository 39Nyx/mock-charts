function renderItem1(params, api) {
    let p1 = [api.value(0), api.value(1)]
    let p2 = [api.value(2), api.value(3)]


    console.log(p1, p2)
    p1 = api.coord(p1)

    p2 = api.coord(p2)
    console.log(p1, p2)

    const temp = {
        type: "bezierCurve",
        shape: {
            x1: p1[0],
            y1: p1[1],
            x2: p2[0],
            y2: p2[1],
            cpx1: params.coordSys.cx,
            cpy1: params.coordSys.cy,
        },
        style: api.style({
            lineWidth: "1px"
        })
    }

    console.log(temp)

    return temp
}

function renderItem2(params, api) {
    let p = [api.value(0), api.value(1)]
    p = api.coord(p)


    const temp = {
        type: "ring",
        shape: {
            cx: p[0],
            cy: p[1],
            r: 10,
            r0: 25,
        },
        style: api.style({
            lineWidth: "1px"
        })
    }

    console.log(temp)

    return temp
}



option = {
    polar: {},
    angleAxis: {
        type: 'value',
    },
    radiusAxis: {
        type: 'value',
    },
    series: [{
        type: 'custom',
        coordinateSystem: 'polar',
        itemStyle: {
            normal: {
                color: '#d14a61'
            }
        },
        renderItem: renderItem1,
        data: [1].map((v, i) => {
            return {
                name: "test",
                value: [2, 0, 2, Math.PI / 2]
            };
        })
    }, {
        type: 'custom',
        coordinateSystem: 'polar',
        itemStyle: {
            normal: {
                color: '#d14a61'
            }
        },
        renderItem: renderItem2,
        data: [
            [0, 0],
            [2, 0],
            [2, Math.PI / 4],
            [2, 2*Math.PI ]
        ].map((v, i) => {
            return {
                name: "test",
                value: [v[0], v[1]]
            };
        })
    }]
};

myChart.setOption(option)