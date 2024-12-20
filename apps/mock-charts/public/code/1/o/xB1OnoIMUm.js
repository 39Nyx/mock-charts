  myChart.setOption({
      backgroundColor: 'rgba(35,43,46)',
      title: {
          text: '',
      },
      tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c}%"
      },
      legend: {
          data: ['5', '4', '3', '2', '1'],
          textStyle: {
              color: '#fff',
          }
      },
      color: ['rgba(37,34,230,1)', 'rgba(0,103,255,1)', 'rgba(0,193,255,1)', 'rgba(81,255,174,1)', 'rgba(221,239,1,1)'],
      calculable: true,
      series: [{
          name: '漏斗图',
          type: 'funnel',
          left: '10%',
          top: 60,
          //x2: 80,
          bottom: 60,
          width: '80%',
          // height: {totalHeight} - y - y2,
          min: 0,
          max: 100,
          minSize: '0%',
          maxSize: '100%',
          sort: 'descending',
          gap: 3,
          label: {
              normal: {
                  show: true,
                  position: 'inside'
              },
              emphasis: {
                  textStyle: {
                      fontSize: 20
                  }
              }
          },
          labelLine: {
              normal: {
                  length: 10,
                  lineStyle: {
                      width: 1,
                      type: 'solid'
                  }
              }
          },
          itemStyle: {
              normal: {
                  borderColor: '#fff',
                  borderWidth: 1
              }
          },
          data: [{
                  value: 100,
                  name: '5'
              },
              {
                  value: 80,
                  name: '4'
              },
              {
                  value: 60,
                  name: '3'
              },
              {
                  value: 40,
                  name: '2'
              },
              {
                  value: 20,
                  name: '1'
              }
          ]
      }]
  });