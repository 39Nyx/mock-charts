var option = {
      backgroundColor:'#fff',
      title: {
          text: '投诉举报环节受理对比'
      },
      tooltip: {
          trigger: 'axis'
      },
      legend: {
          data: ['投诉举报受理数']
      },
      
      radar: {
          indicator: [{
              text: '研制',
              max: 500
              
          }, {
              text: '生产',
              max: 500
          }, {
              text: '流通',
              max: 500
          }, {
              text: '餐饮服务/使用',
              max:500
          }, {
              text: '其他',
              max: 500
          }],
            radius:100,
          splitNumber: 7,
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
                  color: '#9ee3bb',
                  borderColor: '#5ac3bd',
                  shadowColor:'rgba(0,0,0,0.5)'
              }
          },
          data: [{
              value: [360, 233, 215, 450, 200],
              name:'投诉举报受理数'
          }]
      },
      {
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
              value: [260, 213, 315, 150, 400],
              name:'投诉举报受理数'
          }]
      },]
  };