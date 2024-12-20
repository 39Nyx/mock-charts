option = {
    title : {
        text: '',
        subtext: '',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    backgroundColor:'#fff',
      label: {
             normal: {
                 textStyle: {
                     fontSize: 14
                 },
                 formatter: function(param) {
                     console.log(param);
                     return param.name + ':'+param.value +'\n'+ Math.round(param.percent) + '%';
                 }
             }
         },
    legend: {
        left: 'center',
        data: ['单吨蒸汽耗天然气','蒸汽产出合计']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'单吨蒸汽耗天然气'},
                {value:310, name:'蒸汽产出合计'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
