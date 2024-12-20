option = {
    backgroundColor:'#ffffff',
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        //x : 'center',
        //y : 'bottom',
        width:'55%',
        //bottom:'30%',
        orient : 'vertical',
        left:'65%',
        top:'35%',
         data:['食品批发商','商场超市','便利店','食杂店','食品贸易商',
        '网络食品销售商','食品自动售货销售商','冷冻（藏）仓库食品销售商','其他食品销售经营者']
    },
    color: ['#669999','#33CC99','#e47070', '#55b4e3','#eab2f6', '#ccc' ,'#FF9966' ,'#8af298','#8a9df2'],
     toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true,
                type: ['pie', 'funnel']
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    series: [
        {
            name:'经营类别',
            type:'pie',
            radius: ['0', '30%'],
            roseType : 'radius',
            //color: ['#d74e67', '#0092ff', '#eba954', '#21b6b9','#60a900','#01949b',' #f17677','#d74e67', '#0092ff', '#eba954', '#21b6b9','#60a900','#01949b','#f17677'],
            label: {
                normal: {
                    formatter: '{b}\n{d}%'
                },
          
            },
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
                {value:1800, name:'商场超市'},
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
                    