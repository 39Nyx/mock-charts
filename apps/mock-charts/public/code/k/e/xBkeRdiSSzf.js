option = {
      title: {
        text: '年龄分布',
        x: 'center',
        y: 'center' 
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b}'
      },
      legend: {
        x: 'center',
        y: 'bottom'
      },
      calculable: true,
      series: [
        {
          color: [ '#fea1cc',, '#de9cfd', '#d0a8fc',  '#9df174', '#6fea8e', '#78f597', '#65db99', '#78f5af', '#7bebc3', '#78f5d7', '#78f4f5', '#78d6f5', '#78bff5', '#7899f5'],
          type: 'pie',
          radius: [60, 160],
          center: ['50%', '50%'],
          roseType: 'radius',
          data: [
             {value: 39, name: '19-24岁：39%'},
             {value: 5, name: '18岁以下：5%'},
             {value: 52, name: '25-34岁：52%'},
             {value: 4, name: '35-49岁：4%'}
          ]
        }
      ]
    }