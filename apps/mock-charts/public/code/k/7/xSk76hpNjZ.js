// Generate data
var category = [];
var dottedBase = [];
var lineData = [18092,20728,24045,28348,32808
                ,36097,39867,44715,48444,50415
                ,56061,62677,69521,77560,85038
                ,92477,102268];
var barData = [4600,5000,5500,6500,7500
                ,8500,9900,12500,14000,21500
                ,23200,24450,25250,33300,35800
                ,45400,59810];
var rateData = [];               

for (var i = 0; i < 17; i++) {
    var date = i+2001;
    category.push(date)
    var rate=barData[i]/lineData[i];
    rateData[i] = rate.toFixed(2);
}


// option
option = {
    title: {
        text: 'Trend of average house price and employees’ annual income in Beijing',
        x: 'center',
        y: 0,
        textStyle:{
            color:'#B4B4B4',
            fontSize:16,
            fontWeight:'normal',
        },
        
    },
    backgroundColor: '#191E40',
    tooltip: {
        trigger: 'axis',
        backgroundColor:'rgba(255,255,255,0.1)',
        axisPointer: {
            type: 'shadow',
            label: {
                show: true,
                backgroundColor: '#7B7DDC'
            }
        }
    },
    legend: {
        data: ['Average house price per square meter', 'Average annual income','Housing price-income ratio',],
        textStyle: {
            color: '#B4B4B4'
        },
        top:'7%',
    },
    grid:{
        x:'12%',
        width:'82%',
        y:'12%',
    },
    xAxis: {
        data: category,
        axisLine: {
            lineStyle: {
                color: '#B4B4B4'
            }
        },
        axisTick:{
            show:false,
        },
    },
    yAxis: [{

        splitLine: {show: false},
        axisLine: {
            lineStyle: {
                color: '#B4B4B4',
            }
        },
        
        axisLabel:{
            formatter:'{value} CNY',
        }
    },
        {

        splitLine: {show: false},
        axisLine: {
            lineStyle: {
                color: '#B4B4B4',
            }
        },
        axisLabel:{
            formatter:'{value} ㎡',
        }
    }],
    
    series: [{
        name: 'Housing price-income ratio',
        type: 'line',
        smooth: true,
        showAllSymbol: true,
        symbol: 'emptyCircle',
        symbolSize: 8,
        yAxisIndex: 1,
        itemStyle: {
                normal: {
                color:'#F02FC2'},
        },
        data: rateData
    }, 
    
    {
        name: 'Average house price per square meter',
        type: 'bar',
        barWidth: 10,
        itemStyle: {
            normal: {
                barBorderRadius: 5,
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#956FD4'},
                        {offset: 1, color: '#3EACE5'}
                    ]
                )
            }
        },
        data: barData
    }, 
    
    {
        name: 'Average annual income',
        type: 'bar',
        barGap: '-100%',
        barWidth: 10,
        itemStyle: {
            normal: {
                barBorderRadius: 5,
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: 'rgba(156,107,211,0.5)'},
                        {offset: 0.2, color: 'rgba(156,107,211,0.3)'},
                        {offset: 1, color: 'rgba(156,107,211,0)'}
                    ]
                )
            }
        },
        z: -12,
        
        data: lineData
    }, 
   ]
};