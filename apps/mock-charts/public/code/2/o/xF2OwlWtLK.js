var option = {
      
     
      tooltip: {
          trigger: 'axis'
      },
      
      
      radar: {
          indicator: [{
              text: '反网站篡改',
              max: 5000
              
          }, {
              text: '反流量攻击',
              max: 5000
          }, {
              text: '反DNS劫持',
              max: 5000
          }, {
              text: '反短彩信控制',
              max: 5000
          }, {
              text: '反CDN劫持',
              max: 5000
          }],
            radius: 90,
          splitNumber: 2,
          name: {
              textStyle: {
                  color: '#519bf4'
              }
          },
          axisLine: {
              lineStyle: {
                  color: '358552',
                  width: 2,
                  type: 'solid'
              },
          },
          splitLine: {
              lineStyle: {
                  color: ['#3eab4e', '#317f4b',],
                  width: 2
              }
          },
          splitArea: {
              areaStyle: {
                  
                  color: '#297340', 
              }
          }
      },
   
  };