var base = +new Date(2014, 9, 3);
var oneDay = 24 * 3600 * 1000;
var date = [];

var data = [Math.random() * 150];
var now = new Date(base);

function addData(shift) {
    now = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/');
    date.push(now);
    data.push((Math.random() - 0.4) * 10 + data[data.length - 1]);

    if (shift) {
        date.shift();
        data.shift();
    }

    now = new Date(+new Date(now) + oneDay);
}

for (var i = 1; i < 100; i++) {
    addData();
}

option = {
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: date,
          splitLine: {
            show: true,
            lineStyle: {
              color: "#1f2943"
            }
          },
    },
    yAxis: {
        boundaryGap: [0, '50%'],
        type: 'value'
    },
    dataZoom: {
        type: 'inside',
    },
    series: [
        {
            name:'成交',
            type:'line',
            smooth:true,
            symbol: 'none',
            stack: 'a',
            areaStyle: {
                normal: {}
            },
            data: data
        }
    ]
};

var c = 1

setInterval(function () {
    addData(true);
    c = c === 1 ? 0 : 1
    myChart.setOption({
        xAxis: {
            data: [...date],
            splitLine: {
                lineStyle: {
                    color: c === 1 ? 'red' : 'green'
                }
            }
        },
        series: [{
            name:'成交',
            data: [...data]
        }]
    });
}, 500);