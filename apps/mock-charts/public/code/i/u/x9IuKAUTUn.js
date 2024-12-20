var option = {
    title: [
        {
          text: `{a|${11}}{b|分}`,
          subtext: "标题",
          top: "center",
          left: "center",
          subtextStyle: {
            color: "#646C73",
            fontSize: 16,
            fontFamily: "PingFangSC-Regular",
            top: "center"
          },
          itemGap: -10, //主副标题间距
          textStyle: {
            fontWeight: "normal",
            rich: {
              a: {
                padding: [0, 0, 20, 0],
                fontWeight: "normal",
                fontSize: 48,
                color: "#000",
                fontFamily: "DINAlternate-Bold",
                textShadow: [5, 5, 10, "#7ff06fff"]
              },
              b: {
                fontWeight: "normal",
                fontSize: 20,
                padding: [0, 0, 5, 3],
                color: "#646C73",
                textShadowBlur: 5
              }
            }
          }
        }
      ],
    angleAxis: {
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        min: 0,
        max: 100,
        boundaryGap: ["1000", "100"]
    },
    radiusAxis: {
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        data: ['a', 'b', 'c'],
        z: 10
    },
    polar: {
        radius: '80%'
    },
    series: [{
        type: 'bar',
        data: [, , 40],
        coordinateSystem: 'polar',
        barMaxWidth: 20,
        z: 2,
        name: '抢修项目',
      
        color: '#1779ee',
        barGap: '-100%',
    },  
        {
          type: "bar",
     
          data: [, , 100],
          coordinateSystem: 'polar',
        barMaxWidth: 20,
        z: -2,
        name: '抢修项目',
  
        color: '#f0f0f0',
        barGap: '-100%',
         
        },
    {
          type: "pie",
          z: -2000,
          radius: [0, "50%"],
          itemStyle: {
            borderWidth: 0,
            shadowBlur: 44,
            shadowColor: "rgba(14,73,206,0.23)"
          },
          data: [
            {
              value: 100,
              itemStyle: {
                color: "#fff"
              }
            }
          ]
        }, 
          
          
        ],
 
    tooltip: {
        show: false
    },

};