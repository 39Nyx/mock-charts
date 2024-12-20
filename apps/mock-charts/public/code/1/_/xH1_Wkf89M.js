var option = {
      backgroundColor:'#fff',
      title: {
          text: '有案底企业许可申请办结情况'
      },
      tooltip: {
          trigger: 'axis'
      },
      legend: {
          data: ['企业许可办结数']
      },
      
      radar: {
          indicator: [{
              text: '取缔无证经营',
              max: 100
              
          }, {
              text: '捣毁制假售假窝点',
              max: 100
          }, {
              text: '停业整顿',
              max: 100
          }, {
              text: '吊销许可证',
              max: 100
          }, {
              text: '移交司法机关',
              max: 100
          }],
            radius: 90,
          splitNumber: 12,
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
                  
                  color: ['#C1C1C1', '#fff']
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
              value: [60, 33, 15, 50, 100],
              name:'企业许可办结数'
          }]
      }, ]
  };
