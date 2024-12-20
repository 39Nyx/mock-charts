options = [
    {
    backgroundColor:'#ffffff',
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['新办', '变更', '延续', '补办', '注销', '旧证换新证']
    },
    toolbox: {
        show : true,
        feature : {
           // mark : {show: true},
           dataView : {show: true, readOnly: false},
           magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
           // restore : {show: true},
           // saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'新办',
            type:'line',
            stack: '总量',
            data:[568, 752, 801, 927, 1136,568, 752, 801, 927, 1136, 927, 1136]
        },
        {
            name:'变更',
            type:'line',
            stack: '总量',
            data:[70, 74, 94, 103, 148,70, 74, 94, 103, 148,70, 74]
        },
        {
            name:'延续',
            type:'line',
            stack: '总量',
            data:[201, 252, 287, 335, 407,201, 252, 287, 335, 407,201, 252]
        },
        {
            name:'补办',
            type:'line',
            stack: '总量',
            data:[116, 135, 163, 160, 238,116, 135, 163, 160, 238,116, 135]
        },
        {
            name:'注销',
            type:'line',
            stack: '总量',
            data:[72, 76, 109, 120, 139,72, 76, 109, 120, 139,72, 76]
        },
       {
            name:'旧证换新证',
            type:'line',
            stack: '总量',
            data:[129, 144, 181, 219, 277,129, 144, 181, 219, 277,129, 144]
        }
    ]
}, {
    backgroundColor:'#ffffff',
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",

    },
    series: [
        {
            name:'数量占比',
            type:'pie',
            hoverAnimation: false,
            legendHoverLink:false,
            radius: ['42%', '45%'],
            color: ['#915872', '#3077b7', '#9a8169', '#3f8797','#5b8144','#307889'],
            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                },
               
            },
            tooltip: {
               show:false,
               
               
            },
            
            data:[ {value:568, name:''},
                {value:70, name:''},
                {value:201, name:''},
                {value:116, name:''},
                {value:72, name:''},
                {value:129, name:''}]
        },
        {
            name:'数量占比',
            type:'pie',
            radius: ['45%', '85%'],
            //color: ['#d74e67', '#0092ff', '#eba954', '#21b6b9','#60a900','#01949b',' #f17677','#d74e67', '#0092ff', '#eba954', '#21b6b9','#60a900','#01949b','#f17677'],
            color: ['#d74e67', '#0092ff', '#eba954', '#21b6b9','#60a900','#01949b'],
            label: {
                normal: {
                    formatter: '{b}\n{d}%'
                },
          
            },
            data:[{value:568, name:'新办'},
                {value:70, name:'变更'},
                {value:201, name:'延续'},
                {value:116, name:'补办'},
                {value:72, name:'注销'},
                {value:129, name:'旧证换新证'}
               ]
        }
    ]
}
    
    ];
    
    
    
    
    
myChart.on('click', function(params) {
    alert(1);
/*if (params.componentType === 'series' && params.seriesType === 'line') {
    alert(params);
    }*/
    
});