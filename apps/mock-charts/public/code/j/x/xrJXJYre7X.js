var mlRing = function(options) {
    let opts = Object.assign({
        id: 'chart-panel',
        data: 88.6,
        background: '#0d1e30',
        level: ["极差", '一般', '优秀'],
        direction: [0, 0, 0, 1], //渐变的方向(此时是从上到下)
        color: [ //渐变颜色(此时分三个级别)
            [{
                    offset: 0,
                    color: '#c7465c'
                },
                {
                    offset: 1,
                    color: '#e68f02'
                }
            ],
            [{
                    offset: 0,
                    color: '#a4be39'
                },
                {
                    offset: 1,
                    color: '#79cf60'
                }
            ],
            [{
                    offset: 0,
                    color: '#03f1d7'
                },
                {
                    offset: 1,
                    color: '#01c0f7'
                }
            ]
        ],
        ringRadiusOut: 80, //外径
        ringRadiusInner: 50, //内径
        splitLineMargin: 5, //分割线边距
        startAngle: -Math.PI / 2, //起始弧度
        endAngle: Math.PI * 3 / 2, //结束角度
        fontSize: {
            data: 24,
            level: 14
        },
        pointRadius: 5
    }, options);

    const zr = zrender.init(document.getElementById(opts.id));
    const w = zr.getWidth();
    const h = zr.getHeight();
    const centerX = w / 2;
    const centerY = h / 2;

    const data = opts.data;
    const startAngle = opts.startAngle;
    const endAngle = opts.endAngle;

    if (opts.background) {
        document.getElementById(opts.id).style.background = opts.background;
    }
    //确定当前数值的所属级别
    let level = 0;
    if (data >= 66.66) {
        level = 2
    } else if (data >= 33.33 && data < 66.66) {
        level = 1
    }
    //渐变颜色
    const linearColor = new zrender.LinearGradient(opts.direction[0], opts.direction[1], opts.direction[2], opts.direction[3], opts.color[level]);
    const currColor = opts.color[level][0].color;

    //添加数值文字
    const fontSizeData = opts.fontSize.data;
    const dataText = new zrender.Text({
        style: {
            text: data + '%',
            fontSize: fontSizeData,
            textFill: currColor,
            textAlign: 'center',
            textVerticalAlign: 'middle',
        },
        position: [centerX, (centerY - fontSizeData / 2)]
    });
    zr.add(dataText);

    //添加级别文字
    const fontSizeLevel = opts.fontSize.level;
    const levelText = new zrender.Text({
        style: {
            text: opts.level[level],
            fontSize: fontSizeLevel,
            textFill: currColor,
            textAlign: 'center',
            textVerticalAlign: 'middle',
        },
        position: [centerX, (centerY + fontSizeLevel)]
    });
    zr.add(levelText);

    //初始化背景圆
    const sector = new zrender.Sector({
        shape: {
            cx: centerX,
            cy: centerY,
            r: opts.ringRadiusOut,
            r0: opts.ringRadiusInner,
            startAngle: startAngle,
            endAngle: endAngle,
            clockwise: true
        },
        style: {
            fill: linearColor
        },
    });
    zr.add(sector);

    const getPoint = function(options) {
        var opts = Object.assign({
            center: [0, 0], //圆的中心点
            angle: 0,
            r: 45,
        }, options);
        var point = [];
        var lingLongX = Math.cos(opts.angle) * opts.r;
        var lingLongY = Math.sin(opts.angle) * opts.r;
        point[0] = opts.center[0] + lingLongX;
        point[1] = opts.center[1] + lingLongY;
        return point;
    }

    //计算分割线的位置
    const getSplitLine = function(options) {
        var opts = Object.assign({
            splitSize: 0, //最多平分56个扇区 此数值需是4的整数倍
            startAngle: 0,
            endAngle: 0,
            r: 0,
            r0: 0,
            data: 0, //百分比，100%等于2*Math.PI
        }, options);

        var unitAngle = (endAngle - startAngle) / opts.splitSize;
        var splitLineSize = Math.floor(opts.splitSize * opts.data / 100);
        var splitLineArr = [];

        for (var i = 0; i < splitLineSize; i++) {
            var startPoint = [];
            var endPoint = [];
            var angle = opts.startAngle + unitAngle * i;

            startPoint = getPoint({
                center: [centerX, centerY], //圆的中心点
                angle: angle,
                r: opts.r0
            });

            if (angle % (Math.PI / 2) === 0) { //刻度线加长特殊标记
                endPoint = getPoint({
                    center: [centerX, centerY], //圆的中心点
                    angle: angle,
                    r: opts.r + 3
                });
            } else {
                endPoint = getPoint({
                    center: [centerX, centerY], //圆的中心点
                    angle: angle,
                    r: opts.r
                });
            }
            splitLineArr.push([startPoint, endPoint]);
        }
        return splitLineArr;
    }

    const splitLineData = getSplitLine({
        splitSize: 56,
        startAngle: startAngle, //从12点方向开始顺时针旋转
        endAngle: endAngle,
        r: opts.ringRadiusOut - opts.splitLineMargin,
        r0: opts.ringRadiusInner + opts.splitLineMargin,
        data: data
    });

    //初始化分割线
    splitLineData.forEach(function(item) {
        var Line = new zrender.Line({
            shape: {
                x1: item[0][0],
                y1: item[0][1],
                x2: item[1][0],
                y2: item[1][1],
            },
            style: {
                stroke: '#fff'
            }
        });
        zr.add(Line);
    });

    //画点方法
    const drawPoint = function(options) {
        var opts = Object.assign({
            cx: 0,
            cy: 0,
            r: 5,
            style: {}
        }, options);

        var particle = new zrender.Circle({
            shape: {
                cx: opts.cx,
                cy: opts.cy,
                r: opts.r
            },
            style: opts.style,
        });
        zr.add(particle);
    }

    const startPoint = getPoint({
        center: [centerX, centerY], //圆的中心点
        angle: startAngle,
        r: opts.ringRadiusOut + opts.splitLineMargin
    });

    //结束点的弧度
    const endAnglePoint = startAngle + (endAngle - startAngle) * data / 100;
    const endPointOuter = getPoint({
        center: [centerX, centerY], //圆的中心点
        angle: endAnglePoint,
        r: opts.ringRadiusOut + opts.splitLineMargin
    });
    const endPointInner = getPoint({
        center: [centerX, centerY], //圆的中心点
        angle: endAnglePoint,
        r: opts.ringRadiusInner + opts.splitLineMargin,
    });

    //结束点画刻度线
    const Line = new zrender.Line({
        shape: {
            x1: endPointInner[0],
            y1: endPointInner[1],
            x2: endPointOuter[0],
            y2: endPointOuter[1],
        },
        style: {
            stroke: '#fff',
            lineWidth: 3
        }
    });
    zr.add(Line);

    //开始点和结束点连线
    const p2p = new zrender.Sector({
        shape: {
            cx: centerX,
            cy: centerY,
            r: opts.ringRadiusOut + opts.splitLineMargin,
            r0: opts.ringRadiusOut + opts.splitLineMargin - 1,
            startAngle: startAngle,
            endAngle: endAnglePoint,
            clockwise: true
        },
        style: {
            fill: linearColor
        },
    });
    zr.add(p2p);

    //初始化起始点
    drawPoint({
        cx: startPoint[0],
        cy: startPoint[1],
        r: opts.pointRadius,
        style: {
            fill: currColor
        }
    });
    //初始化结束点
    drawPoint({
        cx: endPointOuter[0],
        cy: endPointOuter[1],
        r: opts.pointRadius,
        style: {
            fill: currColor,
            stroke: '#fff',
            lineWidth: 3
        }
    });
}

const option = {
    id: 'chart-panel',
    data: 88.6,
    background: '#0d1e30',
    level: ["极差", '一般', '优秀'],
    direction: [0, 0, 0, 1], //渐变的方向(此时是从上到下)
    color: [ //渐变颜色(此时分三个级别)
        [{
                offset: 0,
                color: '#c7465c'
            },
            {
                offset: 1,
                color: '#e68f02'
            }
        ],
        [{
                offset: 0,
                color: '#a4be39'
            },
            {
                offset: 1,
                color: '#79cf60'
            }
        ],
        [{
                offset: 0,
                color: '#03f1d7'
            },
            {
                offset: 1,
                color: '#01c0f7'
            }
        ]
    ],
    ringRadiusOut: 75,
    ringRadiusInner: 50,
    splitLineMargin: 5,
    startAngle: -Math.PI / 2,
    endAngle: Math.PI * 3 / 2,
    fontSize: {
        data: 24,
        level: 14
    },
    pointRadius: 3
}
mlRing(option);
setInterval(() => {
    Object.assign(option, {
        data: parseInt(Math.random() * 100)
    })
    mlRing(option);
}, 3000)