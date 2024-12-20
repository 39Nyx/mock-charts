var maxData = [50, 50,];
var xData = ['L1','L2'];
var color = ['#0e6a9b','#3b9ccf',];

for (let i = 0; i < maxData.length; i++) {
    maxData[i] = {
        value: maxData[i],
        itemStyle: {
            //color: color[i],
            color: new echarts.graphic.LinearGradient(
                0, 0, 1, 0, [
                    {
                        offset: 0,
                        color: color[i]
                    },
                    {
                        offset: 1,
                        color: '#00feff'
                    }
                ]
            )
        }
    };
}

var tempMaxData = maxData.pop();
var tempXData = xData.pop();

option = {
    title: {
        text: '设备告警top11',
    },
    // xAxis: {
    //     show: false,
    //     type: 'value'
    // },
    // yAxis: {
    //     type: 'category',
    //     data : xData,
    // },
    angleAxis: {
    },
    radiusAxis: {
        type: 'category',
        axisLine:{
            show:false
        },
        axisTick:{
            show:false
        },
        axisLabel:{
            show:false
        },
        splitLine:{
          show:false  
        },
        data: xData,
        z: 10
    },
    polar: {
    },
    series:[{
        type: 'bar',
        barWidth:'10',
        data:maxData,
        coordinateSystem: 'polar',
        name: 'A',
    }]
    
    // series: [
    //     {
    //         name: '最大/最小时延',
    //         type: 'bar',
    //         label: {
    //             show: false,
    //         },
    //         barWidth: 10,
    //         itemStyle: {
    //             barBorderRadius: 3,
    //             color: '#fff'
    //         },
    //         data: maxData
    //     }
    // ]
};


setInterval(()=>{

    xData.unshift(tempXData);
    tempXData = xData.pop();

    maxData.unshift(tempMaxData);
    tempMaxData = maxData.pop();
    
    myChart.setOption(option);
}, 1000);
