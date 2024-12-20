option = {
    tooltip:{
      formatter:'{d}%'  
    },
   

    series: [{
        type: 'pie',
        radius: ['50%', '75%'],
        color: ['#5b9bd5', '#89c7ff', '#ed7d31'],
        data: [{
            name: '境外人口',
            value: 1322,
        }, {
            name: '来沪',
            value: 133022,
        }, {
            name: '户籍',
            value: 67832,
        }],
        label:{
            normal:{
                textStyle:{
                    color:'#fff',
                    fontSize:30,
                },
                formatter:'{b}：{c}人',
            },
            
        },
        labelLine:{
            normal:{
                lineStyle:{
                    width:2,
                    color:'#fff'
                }
            }
        }
    }]
};