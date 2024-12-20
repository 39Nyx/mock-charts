var data = {
   title: ['总计', '北京', '上海', '浙江', '深圳', '广东', '宁波', '云南', '江苏', '湖南','其他'],
   plan_production: [500, 300, 490, 333, 346, 777, 888, 864, 789, 765,500],
   actual_production: [300, 400, 500, 300, 400, 500, 300, 400, 500, 500,500],
   attainment_rate: [60, 80, 90, 60, 70, 80, 90, 60, 70, 90,500],
   productivity_1: [30, 45, 88, 100, 110, 70, 80, 90, 100, 100,500],
   productivity_2: [30, 45, 88, 100, 110, 70, 80, 90, 100, 100,500],
   productivity_3: [30, 45, 88, 100, 110, 70, 80, 90, 100, 100,500],
   productivity_4: [30, 45, 88, 100, 110, 70, 80, 90, 100, 100,500]
};

for (var pr in data) {
   data[pr] = data[pr].slice(1, -1);
}

function getTableLine(num) {
   var list = [];
   var bottom = 180; //控制线的位置
   var height = 20;
   for (var i = 0; i < num; i++) {
       list.push({
           type: 'line',
           bottom: bottom - i * height,
           right: 80,
           style: {
               fill: '#333'
           },
           shape: {
               x1: 0,
               y1: 0,
               x2: 3200,
               y2: 0,
           }

       });
   }
   return list;
}
var lineList = getTableLine(8);


option = {
   color: ['#4472c4','#ed7d31', '#ffc000','#5b9bd5','#','70ad47','#264478','#a5a5a5'],
   title: [{
       text: ' \n其他\n停业转型\n立案侦查\n失联跑路\n僵尸企业\n清盘推出\n拟停业',
       bottom: 35, //控制表格Y轴方向
       left: 10,
       textStyle: {
           lineHeight: 20,
           fontSize: 13,
           fontWeight: 'normal',
           formatter: function(value) {
               return '{table|' + value + '}';
           },
           rich: {
               table: {
                   align: 'center'
               }
           }
       }
   }],
   tooltip: {
       trigger: 'axis',
       axisPointer: {
           type: 'cross',
           label: {
               backgroundColor: '#283b56'
           }
       }
   },
   legend: {
       data: ['其他', '停业转型', '立案侦查', '失联跑路', '僵尸企业', '清盘推出', '拟停业']
   },
   grid: {
       bottom: 210,
       left: 80,
       right: 80
   },
   xAxis: [{
       type: 'category',
       boundaryGap: true,
       data: data.title,
       axisTick: {
           length: 170//竖线的长度
       },
       axisLabel: {
           formatter: function(value, index) {
               var indexNum = 0;
              for(var i = 0; i < data.title.length; i++){
                  if(value == data.title[i]){
                      indexNum = i;
                  }
              }
              return '{table|' + value +
                  '}\n{table|' + data.plan_production[indexNum] +
                  '}\n{table|' + data.actual_production[indexNum] +
                  '}\n{table|' + data.attainment_rate[indexNum] +
                  '}\n{table|' + data.productivity_1[indexNum] + 
                  '}\n{table|' + data.productivity_2[indexNum] +
                  '}\n{table|' + data.productivity_3[indexNum] +
                  '}\n{table|' + data.productivity_4[indexNum] +'}';
           },
           rich: {
               table: {
                   lineHeight: 20,
                   align: 'center'
               }
           }
       }
   }],
   yAxis: [{
       type: 'value',
       scale: true,
       minInterval: 1,
       name: '数量',
       axisLine: {
           show:false
       },
       splitLine: {
           show: true,
           color:'#333'
       },
       min: function(v) {
           return Math.max((v.min - 20), 0);
       }
   }],
   series: [{
       name: '其他',
       stack:'aa',
       type: 'bar',
       barWidth: '40px',
       label: {
           show: true,
           position: 'top'
       },
       yAxisIndex: 0,
       data: data.plan_production
   }, {
       name: '停业转型',
       stack:'aa',
       type: 'bar',
       label: {
           show: true,
           position: 'top'
       },
       yAxisIndex: 0,
       data: data.actual_production
   }, {
       name: '立案侦查',
       stack:'aa',
       type: 'bar',
       label: {
           show: true,
           position: 'top',
           
       },
       yAxisIndex: 0,
       data: data.attainment_rate
   }, {
       name: '失联跑路',
       type: 'bar',
       stack:'aa',
       label: {
           show: true,
           position: 'top',
          
       },
       yAxisIndex: 0,
       data: data.productivity_1
   }
   , {
       name: '僵尸企业',
       type: 'bar',
       stack:'aa',
       label: {
           show: true,
           position: 'top',
          
       },
       yAxisIndex: 0,
       data: data.productivity_2
   }
   , {
       name: '清盘推出',
       type: 'bar',
       stack:'aa',
       label: {
           show: true,
           position: 'top',
          
       },
       yAxisIndex: 0,
       data: data.productivity_3
   }
   , {
       name: '拟停业',
       type: 'bar',
       stack:'aa',
       label: {
           show: true,
           position: 'top',
          
       },
       yAxisIndex: 0,
       data: data.productivity_4
   }
   ],
   graphic: lineList
};