option = {
    title : {
        
        text: '哪些小说最受影视剧的欢迎',
        subtext: ' 被改编得最多的小说  来源：IMDB',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} 次"
    },
    legend: {
        x : 'center',
        y : 'bottom',
        data:['rose1','rose2','rose3','rose4','rose5','rose6','rose7','rose8']
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
    calculable : true,
    series : [
        {
            
            name:'面积模式',
            type:'pie',
            radius : [30, 110],
            center : ['50%', '50%'],
            roseType : 'area',
            data:[
                  {value:160, name:'Robin Hood'},
                {value:115, name:'James Bond'},
                {value:409, name:'Dracula'},
                
                {value:142, name:'King Arthur'},
                {value:229, name:'Hamlet'},
                {value:167, name:'Frankenstein Monster'},
                {value:292, name:'Sherlock Holmes'},
              
                
              
                {value:115, name:'Tarzan'}
            ]
        }
    ]
};
