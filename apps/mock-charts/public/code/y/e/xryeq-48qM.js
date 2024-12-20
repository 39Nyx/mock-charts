option = {
    backgroundColor:'#ffffff',
    tooltip: {},
   /* legend: {
        top:'35%',
       data:['检查主体','违法违规主体']
    },*/
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#000000',
                /*backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]*/
           }
        },
        indicator: [
           { name: '日常检查', max: 600},
           { name: '飞行检查', max: 600},
           { name: '专项检查', max: 600},
           { name: '督导检查', max: 600},
           { name: '临时检查', max: 600}
        ],
        radius: '30%',
        center: ['50%','30%'],
         splitNumber: 6,
         splitArea: {
              areaStyle: {
                  
                  color: ['#ccc', '#fff']
              }
          },
    },
    calculable : true,
    series: [{
        type: 'radar',
        // areaStyle: {normal: {}},
        //itemStyle: {normal: {areaStyle: {type: 'default'}}},
        data : [
            
             {
                 
                value : [228,255,290,234,60],
                name : '违法违规主体',
                itemStyle: {
              normal: {
                   areaStyle: {type: 'default'},
                  color: '#95c8f7',
                  borderColor: '#5ac3bd',
                  shadowColor:'rgba(0,0,0,0.5)'
              }
          },
            },
            {
                value : [489, 442, 568,455,166],
                name : '检查主体',
                itemStyle: {
              normal: {
                   areaStyle: {type: 'default'},
                  color: '#75b7a8',
                  borderColor: '#5ac3bd',
                  shadowColor:'rgba(0,0,0,0.5)'
              }
          },
            }
        ]
    }]
};