option = {
    color: ['#e5cd00'],
    backgroundColor: '#04243E',
    xAxis: {
        type: 'category',
        data: ['河流', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLabel : {
            color : 'white'
        },
        axisLine : {
            lineStyle : {
                color : 'rgba(200,200,200,0.2)'
            }
           
        },
    },
    yAxis: {
        type: 'value',
        axisLine : {
            show : false,
            lineStyle : {
                color : 'rgba(200,200,200,0.2)'
            }
        },
        axisLabel : {
            color : '#4397d2'
        },
        splitLine : {
            lineStyle : {
                color : 'rgba(200,200,200,0.2)'
            }
        },
        splitArea : {
            show : true,
            areaStyle :{
                color : ['rgba(250,250,250,0)','rgba(200,200,200,0.1)']
            }
        }
    },
    grid : {
        top : '12%',
        bottom : '15%'
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        barWidth: 20,
        itemStyle : {
          normal : {
              barBorderRadius: [10, 10, 0, 0] //圆角
          }  
        },
        label: {
            normal: {
                show: true,
                position: 'top',
                color : 'white'
            }
        },
    }]
};