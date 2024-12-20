  var option =  {
      color: [
        '#0099FF',
        '#E93431',
        '#05D187',
        '#AAAAAA'
      ],
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        right: '10',
        top:'middle',
        icon:'circle',
        data:['综合预案','专项预案','现场预案','其他预案'],
        formatter: function (name) {
          var data = option.series[0].data
          for (var i = 0; i < data.length; i++) {
            if (name == data[i].name) {
              return name + '  ' + data[i].value
            }
          }
        }
      },
      series: [
        {
          name: '应急救援',
          type: 'pie',
          radius: [40, 70],
          center: ['40%', '50%'],
          label: {
            normal: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              borderColor: '#fff',
              borderWidth: '1'
            }
          },
          data:  [
            {value:335, name:'综合预案'},
            {value:310, name:'专项预案'},
            {value:234, name:'现场预案'},
            {value:135, name:'其他预案'}
          ]
        }
      ]

    }