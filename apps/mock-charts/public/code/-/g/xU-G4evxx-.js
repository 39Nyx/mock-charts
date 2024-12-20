let data = [0.47];
 option = {
        series: [
          {
            type: "liquidFill",
            data: data,
            direction: "right", //波浪方向或者静止
            radius: "80%",
            // 水球颜色
            color: ["#00c2ff"],
            center: ["50%", "50%"], //水球位置
            // outline  外边
            outline: {
              // show: false
              borderDistance: 3, //内环padding值
              itemStyle: {
                borderWidth: 8, //圆边线宽度
                borderColor: "#00c2ff",
                shadowBlur: 10,
                shadowColor: 'rgba(63, 218, 255, 0.5)'
              }
            },
            backgroundStyle: {
                // borderWidth: 5,
                // borderColor: 'rgb(255,0,255,0.9)',
                color: 'rgb(255,0,255,0.01)'
            },
            label: {
              show: false
            }
          }
        ]
      };