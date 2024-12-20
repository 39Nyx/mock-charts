option = {
    backgroundColor:'#fff',
    title : {
       text: '各检查类型违规占比',
        subtext: '各检查类型违规占比'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",

    },
    color: ['#669999','#33CC99','#e47070', '#55b4e3','#eab2f6', '#ccc' ,'#FF9966',],

    legend: {
        //x : 'center',
        //y : 'bottom',
        width:'55%',
        //bottom:'30%',
        orient : 'vertical',
        left:'70%',
        top:'38%',
        data:['食品批发商','商场超市','便利店','食杂店','食品贸易商',
        '网络食品销售商','食品自动售货销售商','冷冻（藏）仓库食品销售商','其他食品销售经营者']
    },
    series: [
         
        {
            name:'各检查类型违规占比',
            type:'pie',
            radius: ['0', '25%'],
            //color: ['#00FF00', '#B22222', '#00CDCD'],
            label: {
                normal: {
                    formatter: '{b}\n{d}%'
                },
          
            },
            selectedMode: 'single',
             itemStyle : {
                normal : {
                    label : {
                        show : false
                    },
                    labelLine : {
                        show : false
                    }
                }
            },
            data:[
                {value:2000, name:'食品批发商'},
                {value:1800, name:'商场超市',selected:true,
                label:{show:true},
                labelLine : { show : true}    
                },
                {value:1500, name:'便利店'},
                {value:1300, name:'食杂店'},
                {value:1400, name:'食品贸易商'},
                {value:1100, name:'食品自动售货销售商'},
                {value:1250, name:'网络食品销售商'},
                {value:1100, name:'冷冻（藏）仓库食品销售商'},
                {value:1500, name:'其他食品销售经营者'}
         
            ]
        }
    ]
};