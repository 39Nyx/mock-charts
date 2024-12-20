var hours = ['06:00', '06:30', '07:00', '07:30', '08:00', '08:30', '09:00',
        '09:30', '10:00', '10:30','11:00'];
        
var days = ['NL-3A', 'FE-5A', 'FE-3AC',
        'GX6', 'FE-S1', 'FE-7A', 'KC-1B', 'KC-2HB(15TD)', 'KC-2(15TD)', 'FE-7', 'FE-3AD', 'KC-2HB', 'FE-4KACK-2', 'NL-3', 'FE-6', 'unknown'];

//var data = [[5,0,10],[1,1,8],[2,2,8],[3,3,8],[4,4,8],[5,5,8],[6,6,8],[7,7,8],[8,8,8],[9,9,8],[10,10,8],[11,11,8],[12,12,8],[13,13,8],[14,14,8],[15,15,8]];
//data = data.map(function (item) {
  //  return [item[1], item[0], item[2]];
//});

var data1 = [[0,0.5,4]];
var data2 = [[0,0.8,4]];

option = {
    title: {
        text: 'Punch Card of Github',
        link: 'https://github.com/pissang/echarts-next/graphs/punch-card'
    },
    legend: {
        data: ['NL-3A','FE-5A'],
        left: 'right'
    },
    //   tooltip: {
    //   position: 'top',
   //   formatter: function (params) {
  //     return params.value[2] + ' commits in ' + hours[params.value[0]] + ' of ' + days[params.value[1]];
  //}
 //},
    grid: {
        left: 2,
        bottom: 10,
        right: 10,
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: hours,
        boundaryGap: false,
        splitLine: {
            show: true,
            lineStyle: {
                color: '#999',
                type: 'dashed'
            }
        },
        axisLine: {
            show: false
        }
    },
    yAxis: {
      //  type: 'category',
        type: 'value',
      //  data: days,
        data: [0,1,2,3,4,5,6,7,8],
        min:0,
        max:8,
       splitNumber:10,
        axisLine: {
            show: false
        }
    },
    series: [{
        name: 'NL-3A',
        type: 'scatter',
        symbolSize: function (val) {
            return val[2] * 2;
        },
        data: data1,
        animationDelay: function (idx) {
            return idx * 5;
        }
    },{
        name: 'FE-5A',
        type: 'scatter',
        color:'blue',
        symbolSize: function (val) {
            return val[2] * 2;
        },
        data: data2,
        animationDelay: function (idx) {
            return idx * 5;
        }
    },{
        name: 'FE-5A',
        type: 'scatter',
        color:'blue',
        symbolSize: function (val) {
            return val[2] * 2;
        },
        data: data2,
        animationDelay: function (idx) {
            return idx * 5;
        }
    }]
};