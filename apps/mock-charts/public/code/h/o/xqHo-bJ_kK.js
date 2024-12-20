var option;

      var placeHolderStyle = {
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
        color: "rgba(0,0,0,0)",
        borderWidth: 0
      };

      option = {
        title: [
          {
            text: "2",
            left: "36%",
            top: "40%",
            textStyle: {
              color: "#EC3535",
              fontSize: 100,
              align: "center"
            }
          }
        ],

        legend: {
          legend: {
            orient: "vertical", //设置图例的方向
            right: 10,
            top: "center",
            itemGap: 30 //设置图例的间距
          }
        },

        graphic: {
          type: "text",
          left: "28%",
          top: "75%",
          style: {
            text: "业务隐患数量",
            textAlign: "center",
            fill: "#999",
            fontSize: 40
          }
        },

        //第一个图表
        series: [
          {
            type: "pie",
            radius: ["65%", "55%"],
            center: ["40%", "50%"],
            startAngle: 225,
            labelLine: {
              show: false
            },
            label: {
              position: "center"
            },
            data: [
              {
                value: 100,
                itemStyle: {
                  color: "#3a3a3a"
                }
              },
              {
                value: 35,
                itemStyle: placeHolderStyle
              }
            ]
          },
          //上层环形配置
          {
            type: "pie",
            radius: ["65%", "55%"],
            center: ["40%", "50%"],
            hoverAnimation: false, //鼠标移入变大
            startAngle: 225,
            labelLine: {
              show: false
            },
            label: {
              position: "center"
            },
            data: [
              {
                value: 50,
                itemStyle: {
                  color: new echarts.graphic.LinearGradient(1, 0, 0, 1, [
                    {
                      offset: 0,
                      color: "#FF8989"
                    },
                    {
                      offset: 1,
                      color: "#EC3535"
                    }
                  ])
                }
              },
              {
                value: 35,
                itemStyle: placeHolderStyle
              }
            ]
          },
          // 外圆线
          {
            type: "pie",
            radius: ["80%", "79%"],
            center: ["40%", "50%"],
            hoverAnimation: false, //鼠标移入变大
            startAngle: 225,
            labelLine: {
              show: false
            },
            label: {
              position: "center"
            },
            data: [
              {
                value: 75,
                itemStyle: {
                  color: new echarts.graphic.LinearGradient(1, 0, 0, 1, [
                    {
                      offset: 0,
                      color: "#FF8989"
                    },
                    {
                      offset: 1,
                      color: "red"
                    }
                  ])
                }
              },
              {
                value: 25,
                itemStyle: placeHolderStyle
              }
            ]
          }
        ]
      };
      option && myChart.setOption(option);