app.title = '双轴对等分、顶部预留一等份空间';
data1 = [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 155.6, 186.2, 48.7, 18.8, 6.0, 2.3];
data2 = [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2];

//取出最大值
maxD1 = Math.max.apply(Math, data1);
maxD2 = Math.max.apply(Math, data2);

//双轴对等分
part = 6;
partA = part-1;

option = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['降水量','平均温度']
    },
    xAxis: [
        {
            type: 'category',
            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '水量',
            axisLabel: {
                formatter: '{value} ml'
            },
            splitNumber:part,
            max:function(value){
              return (Math.ceil(value.max/partA)*partA) + Math.ceil(value.max/partA);
            },
            interval: Math.ceil(maxD1/partA)
        },
        {
            type: 'value',
            name: '温度',
            axisLabel: {
                formatter: '{value} °C'
            },
            splitNumber:part,
            max:function(value){
              return (Math.ceil(value.max/partA)*partA) + Math.ceil(value.max/partA);
            },
            interval: Math.ceil(maxD2/partA)
        }
    ],
    series: [
        {
            name:'降水量',
            type:'bar',
            data:data1
        },
        {
            name:'平均温度',
            type:'line',
            yAxisIndex: 1,
            data:data2
        }
    ]
};
