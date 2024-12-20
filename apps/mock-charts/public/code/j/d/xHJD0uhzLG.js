var _x = $('#chart-panel')[0].offsetWidth;
var _y = $('#chart-panel')[0].offsetHeight;

var cx = _x / 2 - 10;
var cy = _y * 0.6 - 15;
var radius = _x > _y ? _y * 0.2 : _x * 0.2;
var value = 25;
option = {
    series: {
        name: "",
        type: "gauge",
        startAngle: 180,
        endAngle: 0,
        center: ["50%", "60%"],
        radius: "65%",
        axisTick: {
            show: !1
        },
        axisLabel: {
            show: !1
        },
        axisLine: {
            lineStyle: {
                width: 0,
                color: [
                    [value / 100, "#FCB704"],
                    [1, "transparent"]
                ]
            }
        },
        splitLine: {
            show: false
        },
        pointer: {
            width: 5,
            length: "125%",
            color: "auto"
        },
        detail: {
            show: true,
            formatter: '全国 : {value}%'
        },
        data: [{
            value: value,
            name: ""
        }]
    },
    animationDuration: 2E3,
    animationDurationUpdate: 2E3,
    graphic: [{
        type: 'sector',
        left: 'center',
        top: '40%',
        shape: {
            r: radius,
            startAngle: Math.PI,
            endAngle: 0
        },
        style: {
            fill: '#fff',
            stroke: '#fff',
            lineWidth: 5
        },
        z: 11
    }, {
        type: 'circle',
        shape: {
            r: 15,
            cx: cx - radius * Math.cos(Math.PI * (value / 100)),
            cy: cy - radius * Math.sin(Math.PI * (value / 100))
        },
        style: {
            fill: 'red',
            stroke: 'red',
            lineWidth: 3
        },
        z: 13
    }, {
        type: 'arc',
        left: 'center',
        top: '40%',
        shape: {
            r: radius,
            startAngle: Math.PI,
            endAngle: 0
        },
        style: {
            stroke: 'red',
            lineWidth: 3
        },
        z: 11
    }, {
        type: 'image',
        style: {
            image: 'data:image/png;base64,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',
            x: (_x - _y * 0.9) / 2,
            y: (_y * 0.1) / 2,
            width: _y * 0.9,
            height: _y * 0.9
        }
    }]
}