var indexs= 0
//indexs 是在点击的时候，传进来的一个值，对应下面的数组里面的内容，


setInterval(function (){
    indexs++;
    if(indexs ==2){
        indexs=0;
    }
    console.log(indexs)
    priceAnalysis(indexs)
},5000)



 priceAnalysis(indexs)

var indexs= 0
 function priceAnalysis(indexs){
	var  sisData=[
	[
        {
            name:'销售量',
            type:'bar',
            barWidth:20,
            data:[222, 129, 120, 233.2, 125.6, 176.7, 135.6, 162.2, 132.6, 120.0, 126.4,123.3]
        },
        {
            name:'实际价格',
            type:'line',
            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        },
        {
            name:'预算价格',
            type:'line',
            yAxisIndex: 1,
            data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        }
    ],
    [
        {
            name:'产销率',
            type:'bar',
            barWidth:20,
            data:[100, 197, 165, 188, 219, 121, 109, 192, 131, 271, 199,129]
        }
         
    ],
    ];
    var legendDate=[['销售量','实际价格','预算价格'], ['产销率']];
    
 
option= {
        tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    color:['#5aade0','#d14a61','#4cc47d'],
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    legend: {
        data:legendDate[indexs]
    },
    xAxis: [
        {
            type: 'category',
            data: ['16/01','16/02','16/03','16/04','16/05','16/06','16/07','16/08','16/09','16/10','16/11','16/12'],
            axisPointer: {
                type: 'shadow'
            },
            axisLabel:{
                rotate:40
            }
        }
    ],
      yAxis: [
        {
            type: 'value',
            name: '万元',
            min: 0,
            max: 250,
            interval: 50,
//          axisLabel: {
//              formatter: '{value}万元'
//          }
        },
        {
            type: 'value',
            name: '万元/吨',
            min: 0,
            max: 25,
            interval: 5,
//          axisLabel: {
//              formatter: '{value} °C'
//          }
        }
    ],
     series: sisData[indexs]
}
 myChart.setOption(option,true);
};