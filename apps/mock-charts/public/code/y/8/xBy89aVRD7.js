option = {
    tooltip: {
      trigger: 'axis',
      confine: true, // 是否限制在图表内
      trigger: 'axis',
      padding: [10, 55, 10, 20],
      backgroundColor: 'rgba(255,255,255,.8)',
      confine: true, // 是否限制在图表内
      textStyle: {
        align: 'left'
      },
      showContent: true,
      formatter: function (params) {
        var s = '<div style="">'
        for (var i = 0; i < params.length; i++) {
            
            if(params[i].name.indexOf('-')){
                s = s + '<span style="color:red">' + params[i].name +'~'+params[i].name.substring(0,1)+'.99%' +'<span style="margin-left:10px"></span>'+ params[i].value+'笔'
            }else{
                 s = s + '<span style="color:green">' + params[i].name +'~'+params[i].name.substring(0,2)+'.99%' +'<span style="margin-left:10px"></span>'+ params[i].value+'笔'
            }
            s+='</div>'
        }
        return s
      }
    },
    xAxis: {
        type: 'category',
        data: ['-1%', '-2%', '-3%', '-4%', '-5%', '5%', '6%', '7%', '8%', '9%'],
        axisLabel: {
        color: '#333'
      },
      axisTick: { // 坐标轴刻度相关设置
        show: false,
        lineStyle: {
          type: 'solid',
          color: 'red'
        }
      },
      axisLine: { // 坐标轴轴线相关设置
        show: true,
        lineStyle: {
          type: 'solid',
          color: '#666'
        }
      },
    },
    
    yAxis: {
        type: 'value',
        position:'right',
        splitLine: {
        show: true,
        lineStyle: {
          type: 'solid',
          color: '#e4e4e4'
        }
      },
      axisLabel: {
        formatter: function (val) {
          return val + '笔'
        },
        color: '#333'
      },
      axisLine: { // 坐标轴轴线相关设置
        show: false
      },
      axisTick: { // 坐标轴刻度相关设置
        show: false,
        inside: false,
        alignWithLabel: false
      },
    },
    series: [{
        data: [10, 20, 30, 40, 50, 50, 40, 30, 20, 10],
        type: 'bar',
        barCategoryGap:'50%',
        itemStyle:{
            normal:{
                color:function(params){
                    var names = params.name.replace(/%/g,'')
                    var color;
                    if(names>1){
                        color='red'
                    }else{
                        color='green'
                    }
                    return color;
                }
            }
        }
    }]
};
