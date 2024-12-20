option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    tooltip:{
        trigger:"axis",
        axisPointer:{
            type:"cross"
        }
    },
    yAxis: [{
        name:"数值"
    }, {
        name:"比例",
        position:"right",
        min:0,
        max:350,
        axisLabel:{
            formatter:function(e){
                console.log(e);
                return (e/350*100).toFixed(0) +"%";
            }
        },
        axisPointer:{
            label:{
                formatter:function(e){
                    return (e.value/350*100).toFixed(2)+"%";
                }
            }
        }
    }],
    series: [{
        type: 'line',
        data: [220, 182, 191, 234, 290, 330, 310]
    }]
};