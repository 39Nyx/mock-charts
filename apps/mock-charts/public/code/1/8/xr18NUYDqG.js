function randomData() {
    now = new Date(+now + oneDay);
    value = value + Math.random() * 21 - 10;
    return {
        name: now.toString(),
        value: [
            [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
            Math.round(value)
        ]
    }
}

function randomData2() {
    now2 = new Date(+now + oneDay);
    value = value + Math.random() * 21 - 10;
    return {
        name: now.toString(),
        value: [
            [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
            Math.round(value)+200
        ]
    }
}

var data = [];
var data2 = [];
var now = +new Date(1997, 9, 3);
var now2 = +new Date(1997, 9, 3);
var oneDay = 24 * 3600 * 1000;
var value = Math.random() * 1000;


for (var i = 0; i < 1000; i++) {
    data.push(randomData());
    data2.push(randomData2());
}

option = {
    title: {
        text: '动态数据 + 时间坐标轴'
    },
    tooltip: {
        trigger: 'axis',
        formatter: function (params) {
            params = params[0];
            var date = new Date(params.name);
            return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
        },
        axisPointer: {
            animation: false
        }
    },
    xAxis: {
        type: 'time',
        splitLine: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
            show: false
        }
    },
    series: [{
        name: '模拟数据',
        type: 'line',
        showSymbol: false,
        hoverAnimation: false,
        data: data
    },{
        name: '模拟数据2',
        type: 'line',
        lineStyle: {
            normal: {
              color: '#ee3b12',
              width: 2,
              shadowColor: '#000',
              shadowBlur: 2,
              shadowOffsetX: 2,
              shadowOffsetY: 2
          }
      },
        showSymbol: false,
        hoverAnimation: false,
        data: data2
    }]
};

setInterval(function () {
    for (var i = 0; i < 5; i++) {
        data.shift();
        data.push(randomData());
        data2.shift();
        data2.push(randomData2());
    }

    myChart.setOption({
          series: [{
          name: '模拟数据',
          type: 'line',
          showSymbol: false,
          hoverAnimation: false,
          data: data
      },{
          name: '模拟数据2',
          type: 'line',
          lineStyle: {
              normal: {
                color: '#ee3b12',
                width: 2,
                shadowColor: '#000',
                shadowBlur: 2,
                shadowOffsetX: 2,
                shadowOffsetY: 2
            }
        },
          showSymbol: false,
          hoverAnimation: false,
          data: data2
      }]
    });
}, 1000);

