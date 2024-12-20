option = {
    backgroundColor:'#FFFFFF',
    /* tooltip:{
        show:true,
        axisPointer:{
            type:'cross'
        },
        formatter:function (params) {
            if(params.value[1]>55)  {
                return params.name + '<br/>'
                +"GNI: "+params.value[1]+ '美元<br/>'
                +'年龄: '+params.value[0];
            }
            else{
                return params.name+' '+params.value;
            }
        }
    },*/
    
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2015', '2016', '2017', '2018']
    },
    yAxis: {
        type: 'value',
        name:"持证主体数",
        fontSize:'16',
    },
    color:'#00af87',
    tooltip: {
            trigger: 'item',
            formatter: "{b}<br/>持证主体数 : {c}"
        },
    grid: {
        top: 100,
        left: '20%',
        width: '38%',
        bottom: '65%'
    },
    series: [{
        data: [820,  901, 1290, 1320],
        type: 'line',
        areaStyle: {},
        itemStyle:{
             normal: {type: 'default',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#08a0ae'
                    }, {
                        offset: 1,
                        color:'#a2f0f7'
                    }], false)
                }
        }
    }]
};
