option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    series: [{
        type: 'line',
        data:[220, 182, 191, 234, 290, 330, 310]
    }]
};option = {
          color: ['#1c9a4c'],
          grid: {
            left: '8%',
            right: '10%',
            top: '12%',
            bottom: '18%',
            containLabel: true
          },
          yAxis: {
            data: ["用户撞车", "SQL注入检测", "机器人登录",
            "账号盗用", "web高频攻击", "端口扫描", "内网连接…",
            "邮件外发",
            ],
            axisTick: {
              show: false
            },

          },

          xAxis: [{
            axisTick: {
              show: false
            },
            type: 'value',
            max: 100,
            splitNumber: 5,
            axisLabel: {
              formatter: '{value}%'
            }
          }],
          series: [{
            name: '销量',
            type: 'bar',
            barWidth: '55%',
            label: {
              normal: {
                show: true,
                position: 'right',
                textStyle: {
                  color: 'black'
                }
              }
            },
            data: [80, 20, 36, 10, 50, 80, 100, 60]
          }]
        };