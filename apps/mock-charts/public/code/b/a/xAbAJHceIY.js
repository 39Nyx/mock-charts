option = {
     title : {
        text: '1000',
        x:'center',
        y:'center',
        
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({c}%)"
    },
   
    legend: {
        orient: 'vertical',
        left: '65%',
        top: 'center',
        data:['安全整改工单','安全预警工单','安全演练工单','安全审计工单',]
    },
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
    
    series : [
        
        {
            
            name:'面积模式',
            type:'pie',
           radius: [45, '27%'],
           color: ['#94f124', '#17c1ff', '#ff8500', '#ffe84c'],
            center : ['50%', '50%'],
            roseType : 'area',
            label: {
                normal: {
                    show: false,
                    
                }
            },
            data:[
                {value:17, name:'安全整改工单'},
                {value:12, name:'安全预警工单'},
                {value:15, name:'安全演练工单'},
                {value:20, name:'安全审计工单'},
            ]
            
        }
        
    ]
};