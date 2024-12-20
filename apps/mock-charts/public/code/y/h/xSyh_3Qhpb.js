option = {
    tooltip: {show:false},
    backgroundColor:'#0c3a6e',
    legend: {show:false},
    graphic:[
        {
            type:'line',
            z: 100,left: 60,bottom: 60,
            shape: {x1:0,y1:0,x2:300,y2:0},
            style:{fill: '#fff',stroke: '#fff',lineWidth: 2}
        }
    ],
    series: [
        {
            type:'funnel',
            funnelAlign: 'left',
            itemStyle:{normal:{color:'#fff'}},
            labelLine:{normal:{lineStyle:{color:'#fff'}}},
            data:[
                {name:'北京'},
                {name:'上海'},
                {name:'西安'},
                {name:'南京'},
                {name:'深圳'}
            ]
        }
    ]
};
