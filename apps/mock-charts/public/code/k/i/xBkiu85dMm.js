option = {
    backgroundColor:'#000',
   
    tooltip : {
        trigger: 'axis'
    },
     grid: {
        top: '0%',
        left: '0%',
        right: '0%',
        bottom: '0',
        containLabel: true
    },
    //calculable : true,
    xAxis : [
        {
            type : 'value',
            axisTick : {show: false},
            axisLine: {
                show: false,
                lineStyle:{
                    color:'#aef3ee',
                }
            },
            splitLine: {
                show: false
            },
        }
    ],
    yAxis : [
        {
            type : 'category',
            axisTick : {show: false},
            axisLine: {
                show: false,
                lineStyle:{
                    color:'#fff',
                }
            },
            splitLine: {
                show: false
            },
             data : ['山东','上海','福建','重庆','四川','湖北','陕西','贵州','广东','天津','江西','湖北']
        }
    ],
    series : [
        {
            name:'蒸发量',
            type:'bar',
            barWidth: 10,
       
            data:[{value: 5,itemStyle: {normal: {color :'#ffc900'}}}, 10, 15, 20, 30, 40, 
            {value: 50,itemStyle: {normal: {color :'#6d9b98'}}}, 60, 70, 80,90, 100],
           itemStyle: {
                normal: {
                     barBorderRadius: 5,
                     color: '#aef3ee',
                }
            }
        }
    ]
};   