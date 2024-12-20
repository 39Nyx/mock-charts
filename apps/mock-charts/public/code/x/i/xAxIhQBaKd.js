//获取圆上面某点的坐标(x0,y0表示坐标，r半径，angle角度)
const getCirlPoint = (x0, y0, r, angle) => {
    let x1 = x0 + r * Math.cos((angle * Math.PI) / 180);
    let y1 = y0 + r * Math.sin((angle * Math.PI) / 180);
    return {
        x: x1,
        y: y1,
    };
};

const getLine = ({ name, endAngle, stroke }) => {
    return {
        name,
        type: 'custom',
        coordinateSystem: 'none',
        renderItem: function (params, api) {
            return {
                type: 'arc',
                shape: {
                    cx: api.getWidth() / 2,
                    cy: api.getHeight() / 2,
                    r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65,
                    startAngle: (270 * Math.PI) / 180,
                    endAngle: (endAngle * Math.PI) / 180,
                },
                style: {
                    stroke,
                    fill: 'transparent',
                    lineWidth: 1.5,
                },
                silent: true,
            };
        },
        data: [0],
    };
};

const getDot = ({ name, circleR, endAngle, circleColor, text, textColor, x, y }) => {
    return {
        name,
        type: 'custom',
        coordinateSystem: 'none',
        renderItem: function (params, api) {
            let x0 = api.getWidth() / 2;
            let y0 = api.getHeight() / 2;
            let r = (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65;
            let point = getCirlPoint(x0, y0, r, endAngle);
            return {
                type: 'group',
                children: [
                    {
                        type: 'circle',
                        shape: {
                            cx: point.x,
                            cy: point.y,
                            r: circleR,
                        },
                        style: {
                            stroke: circleColor,
                            fill: circleColor,
                        },
                        silent: true,
                    },
                    {
                        type: 'text',
                        style: {
                            text,
                            fill: textColor,
                            x: point.x + x,
                            y: point.y + y,
                            fontSize: 20,
                        },
                    },
                ],
            };
        },
        data: [0],
    };
};

option = {
    backgroundColor: '#061740',
    series: [],
};

const progress = 100; // -89.99 - 180

option.series.push(
    getLine({
        name: '背景圈',
        endAngle: 180,
        stroke: '#cccccc',
    })
);
option.series.push(getLine({ name: '进度圈', endAngle: progress, stroke: '#ff0000' }));
option.series.push(
    getDot({
        name: '进度圈点',
        circleR: 4,
        endAngle: progress,
        circleColor: '#ff0000',
        text: '',
        textColor: '',
        x: 0,
        y: 0,
    })
);
option.series.push(
    getDot({
        name: '点1',
        circleR: 6,
        endAngle: -90,
        circleColor: '#ff0000',
        text: '项目立项',
        textColor: '#ffffff',
        x: -10,
        y: -40,
    })
);
option.series.push(
    getDot({
        name: '点2',
        circleR: 6,
        endAngle: -22.5,
        circleColor: '#ff0000',
        text: '项目实施',
        textColor: '#ffffff',
        x: 20,
        y: -12,
    })
);
option.series.push(
    getDot({
        name: '点3',
        circleR: 6,
        endAngle: 45,
        circleColor: '#ff0000',
        text: '项目结题',
        textColor: '#ffffff',
        x: 20,
        y: -10,
    })
);
option.series.push(
    getDot({
        name: '点4',
        circleR: 6,
        endAngle: 112.5,
        circleColor: '#ccc',
        text: '成果培育',
        textColor: '#ffffff',
        x: 0 - '成果培育'.length * 20,
        y: 20,
    })
);
option.series.push(
    getDot({
        name: '点5',
        circleR: 6,
        endAngle: 180,
        circleColor: '#cc',
        text: '成果申报',
        textColor: '#ffffff',
        x: 0 - ('成果申报'.length + 1) * 20,
        y: -10,
    })
);
