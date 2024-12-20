option = {
        color: ["rgba(88,133,247,1)", "rgba(246,194,67,1)"],
        legend: {
          orient: "horizontal",
          x: "80%",
          y: "0%",
          itemWidth: 8,
          itemHeight: 8,
          textStyle: {
            color: "#333",
            fontSize: "12",
            fontFamily: "ArialMT"
          },
          data: [
            {
              name: "资产数量",
              icon: "circle"
            },
            {
              name: "风险数量",
              icon: "circle"
            }
          ]
        },
        grid: {
          left: "3%",
          right: "4%",
          top: "10%",
          bottom: "3%",
          containLabel: true
        },
        tooltip: {
          alwaysShowContent: false,
          enterable: true,
          bordeRadius: 5,
          borderWidth: 1,
          borderColor: "rgba(255,255,255,0.2)",
          backgroundColor: "rgba(255,255,255,0.9)",
          padding: 0,
          position: "top",
          textStyle: {
            fontSize: 14,
            color: "#333"
          }
        },
        xAxis: [
          {
            type: "category",
            data: [
          "2018-04-20",
          "2018-04-21"
        ],
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: "rgba(187,187,187,1)",
                width: 2
              }
            },
            axisLabel: {
              color: "rgba(51,51,51,1)",
              fontSize: 14
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "资产数量",
            position: 'left',
            axisTick: {
              show: false
            },
            axisLabel: {
              color: "#5885F7",
              fontSize: 12
            },
            nameTextStyle:{
               color: "#5885F7",   
            },
            axisLine: {
              show: false
            },
            splitLine: {
              lineStyle: {
                color: ["#ddd"]
              }
            }
          },
           {
            type: "value",
            name: "风险数量",
            position: 'right',
            axisTick: {
              show: false
            },
            axisLabel: {
              color: "#F6C243",
              fontSize: 12
            },
             nameTextStyle:{
               color: "#F6C243",   
            },
            axisLine: {
              show: false
            },
            splitLine: {
              lineStyle: {
                color: ["#ddd"]
              }
            }
          }
        ],
        series: [
          {
            name: "资产数量",
            type: "line",
            smooth: true,
            z: 6,
            lineStyle: {
              normal: {
                width: 3,
                shadowColor: "rgba(0,0,0,0.2)",
                shadowBlur: 10,
                shadowOffsetY: 10
              }
            },
            data:[758, 950]
          },
          {
            name: "风险数量",
            type: "line",
            yAxisIndex: 1,
            smooth: true,
            z: 3,
            lineStyle: {
              normal: {
                width: 3,
                shadowColor: "rgba(0,0,0,0.2)",
                shadowBlur: 10,
                shadowOffsetY: 10
              }
            },
            data: [200, 150]
          }
        ]
      };