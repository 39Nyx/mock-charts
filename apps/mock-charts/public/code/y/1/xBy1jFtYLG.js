option = {
    series: [{
        type: 'pie',
        clockWise: true, //顺时加载
        hoverAnimation: false, //鼠标移入变大
        radius: [15,25],
        center:["50%","50%"],
        data: [
            {
            value: 3,
            itemStyle:{
                 normal: {
                    label: {
                        show: false,
                        position: "center"
                    },
                    labelLine: {
                        show: false
                    },
                    color:'#3abd61'
                },
            },
          },
          {
            name:'ohter',    
            value: 7,
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                        position: "center"
                    },
                    labelLine: {
                        show: false,
                        position:'center'
                    },
                    color: "#E6C335",
                },
              }
        }]
    },
    ]
  };