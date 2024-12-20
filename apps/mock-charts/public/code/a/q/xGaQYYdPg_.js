app.title = 'Top 10';

option = {
    //color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        backgroundColor:'rgba(255,255,255,0.8)',
        "axisPointer": { // 坐标轴指示器，坐标轴触发有效
            "type": "shadow" // 默认为直线，可选为："line" | "shadow"
        },
        extraCssText: 'box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);',
        textStyle:{
            color:'#6a717b',
        },
         
    }, 
    grid: {
        left: '3%',
        right: '4%',
        top: '1%',
        bottom: '1%',
        containLabel: true
    },
    yAxis: [{
        type: 'category',
        data: ['OPPO R9s','OPPO A57','OPPO A59s','OPPO R9m','OPPO A37m'],
        inverse: true,
        axisTick: {
            show: false,
        },
         axisLabel: {
            // margin: 10,
            textStyle: {
                fontSize: 12,
                color:'#53a8fa'
                }
        },
        "axisLine": {
            "show": false
        },
        "splitLine": {
            "show": false
        }
         
    }],
    xAxis: [{
        type: 'value',
         axisLabel: {
            show: false
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show:false,
            lineStyle: {
                color: '#192469'
            }
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#17367c'
            }
        }
    }],
    //backgroundColor: '#192469',
    series: [{
        // name: 'Top 10',
        type: 'bar',
        barWidth:80,
        data: [8827896, 7472072, 7433391, 7137253, 6382192],
        label: {
            normal: {
                show: true,
                position: 'insideRight',
                textStyle: {
                    color: 'white' //color of value
                }
            }
        },
        
        itemStyle: {
            normal: {
                color: '#0590eb',
                barBorderRadius: 15,
                shadowColor: 'rgba(0,0,0,0.1)',
                shadowBlur: 3,
                shadowOffsetY: 3
            }
        }
    }]
};

myChart.on('click', function(param) {
    console.log(param);
    console.log(param.seriesIndex);
    myChart.setOption(option, true);
});
