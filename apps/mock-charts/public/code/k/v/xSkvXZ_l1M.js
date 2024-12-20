app.title = '极坐标系下绘制自定义图形';

option = {
    title: {
        text: '群形荟萃',
        show: true,
        textStyle: {
          color: '#fff',
          fontSize: 28,
          fontFamily: 'Impact'
        },
        top: 'center',
        left: 'center'
      },
      angleAxis: {
        show: true//角度坐标的显示
      },
      radiusAxis: {
        show: true//半径坐标的显示
      },
      polar: {},
    series: [{
        type: 'custom',//类型为自定义series
        coordinateSystem: 'polar',//定义坐标系是极坐标
        center: ['50%', '50%'],
        renderItem(params, api) {//两个重要参数params, api对象，包含许多要用的数值
            const lineAngle = (1.75 - (api.value(1) > 1 ? 1 : api.value(1)) * 1.5) * Math.PI;//定义线段的角度弧度值
           return {
            type: 'group', 
            children: [{
              type: 'sector',
              shape: {
                cx: params.coordSys.cx,//中心x坐标
                cy: params.coordSys.cy,//中心y坐标
                r0: 55,//内半径
                r: 80,//外半径
                startAngle: 0.75 * Math.PI,//起始角度弧度值
                endAngle:  0.25* Math.PI//终止角度弧度值
              },
              style: {
                fill: 'red'//填充色
              }
            },
            {
              type: 'line',
              shape: {
                x1: params.coordSys.cx + 120 * Math.sin(lineAngle),
                x2: params.coordSys.cx + 80 * Math.sin(lineAngle),
                y1: params.coordSys.cy + 120 * Math.cos(lineAngle),
                y2: params.coordSys.cy + 80 * Math.cos(lineAngle)
              },
              style: {
                stroke: 'green',
                lineWidth: 10
              }
            },
            {
              type: 'sector',
              shape: {
                cx: params.coordSys.cx,
                cy: params.coordSys.cy,
                r0: 70,
                r: 100,
                startAngle: Math.PI * 0.75,
                endAngle:
                  Math.PI * (api.value(0) * 1.5 + 0.75)
                  //终止弧度值=起始弧度值+当前值所占弧度值
                  //当前值所占弧度值=当前值所占比例*参考值所占的总弧度值 
              },
              style: {
                fill: '#00C8FF'
              }
            },
            {
            type: 'rect',
            shape: {
                x: 300,
                y: 200, 
                width: 200, 
                height: 100
            },
            style: {
                fill: 'yellow',
                }
          },{
              type: 'circle',
                shape: {
                    cx: params.coordSys.cx,
                    cy: params.coordSys.cy,
                    r: 50
                },
                style: {
                    fill: 'pink'
                }
            }]
            }
        },
        data: [
            [0.668, 0.78]
        ],
    }]
};