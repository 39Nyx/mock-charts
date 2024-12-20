option = {
    title: {
        text: 'time bar chart'
    },
    tooltip: {
        trigger: 'item',
        formatter: function(params) {
            let {name, value, color, seriesName} = params
            console.log(params)
            let str = `${name}</br>`
            let formatvalue = value
            
                if(seriesName === '平均访问时长') {
                    const timeFormate = function(value) {
                        if( isNaN(parseFloat(value)) ){
                            return '-'
                            //return null;
                          }
                          let t = Math.ceil(value);
                          let h, m, i;
                          h = m = i = 0;
                          i = t % 60;
                          if(t / 60 >= 1) {
                            m = parseInt((t%3600)/ 60);
                          }
                          if(m) {
                            h = parseInt(t / 3600);
                          }
                          return (h < 10 ? ('0' + h) : h) + ':' + (m < 10 ? ('0' + m) : m) + ':' + (i < 10 ? ('0' + i) : i); 
                    }
                    formatvalue = timeFormate(value)
                }
                
               str += `<span style="display: inline-block;margin: 5px;width: 4px;height: 4px; background: ${color}"></span>${seriesName} : ${formatvalue}`
            
            return str
        }
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: function(value, index) {
                return Math.ceil(value/60) + '分钟'
            }
        }
    },
    series: [{
        name: '平均访问时长',
        type: 'bar',
        data:[220, 182, 191, 234, 290, 330, 310]
    }]
};