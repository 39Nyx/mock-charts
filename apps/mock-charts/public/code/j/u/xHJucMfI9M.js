var option = {
      backgroundColor:'#fff',
      title: {
          text: '申请事项类型办结情况'
      },
      tooltip: {
          trigger: 'axis'
      },
      legend: {
          data: ['事项办结数']
      },
      
      radar: {
          indicator: [{
              text: '新办',
              max: 100
              
          }, {
              text: '变更',
              max: 100
          }, {
              text: '延续',
              max: 100
          }, {
              text: '换证',
              max: 100
          }, {
              text: '注销',
              max: 100
          }, {
              text: '旧证换新证',
              max: 100
          }],
            radius: 90,
          splitNumber: 10,
          name: {
              textStyle: {
                  color: '#201E1F'
              }
          },
          axisLine: {
              lineStyle: {
                  color: '#B3DBF5',
                  width: 2,
                  type: 'dotted'
              },
          },
          splitLine: {
              lineStyle: {
                  color: ['#B3DBF5', 'transparent', 'transparent', 'transparent'],
                  width: 1
              }
          },
          splitArea: {
              areaStyle: {
                  
                  color: ['#ccc', '#fff']
              }
          }
      },
      series: [{
          type: 'radar',
          tooltip: {
              trigger: 'item'
          },
          symbol: 'circle',
          symbolSize: 5,
          radius:'',
          itemStyle: {
              normal: {
                   areaStyle: {type: 'default'},
                  color: '#C6E2FF',
                  borderColor: '#5ac3bd',
                  shadowColor:'rgba(0,0,0,0.5)'
              }
          },
          data: [{
              value: [100, 33, 15, 50, 60,80],
              name:'事项办结数'
          }]
      }, ]
  };
