var datas = [835,831,690,536,450];
var max = datas[0];
var len = datas.length;
var datastyle = [];
var normalcolor = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    offset: 0,
    color: 'rgba(117, 203,253, 1)'
}, {
    offset: 1,
    color: 'rgba(1, 163,255, 1)'
}]);
var maxcolor = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    offset: 0,
    color: '#FFFFC2'
}, {
    offset: 1,
    color: '#F8F872'
}]);
for (var i = 1; i < datas.length; i++){
    if (datas[i] > max) {
        max = datas[i];
    }
}
for(var i = 0;i<datas.length;i++){
    datastyle.push(
        {
            value:datas[i],
            itemStyle:{
                normal:{
                    color:datas[i] === max ? maxcolor:normalcolor
                }
            }
        }
    )
}

option = {
    color: ['#3398DB'],
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : 
        {   
            
            type : 'category',
            axisLabel:{
                textStyle:{
                    fontSize:22,
                    color:'#fff'
                }
            },
            axisLine:{
                lineStyle:{
                    color:'#45BAFE'
                }
            },
            axisTick:{
                show:false
            },
            splitLine:{
                show:false
            },
            splitArea:{
                show:false
            },
            data : ['网购', '广场', '工业园', '市场', '小区']
        },
    yAxis : {
        min:0,
        max:1000,
        axisLabel:{
            textStyle:{
                fontSize:22,
                color:'#fff'
            }
        },
        axisTick:{
            inside:true
        },
        axisLine:{
            lineStyle:{
                color:'#45BAFE'
            }
        },
        splitLine:{
            show:false
        },
        splitArea:{
            show:false
        }
    },
    series : [
        {
        type: 'pictorialBar',
        symbol: 'circle',
        symbolSize: [50, 50],
            symbolPosition: 'end',
            symbolOffset: [0, '-120%'],
        z: 10,
        data: datas
     },
        {
            name:'',
            type:'bar',
            barWidth: '40%',
            data:datastyle,
            label: {
                normal: {
                    show: false,
                }
            }
        },
        
    ],
    label: {
        normal: {
            show: true,
            offset:[0,-10],
            textStyle:{
                color:'#fff',
                fontSize:22
            },
            position: 'top',
            formatter: '{c}'
        }
    }
};