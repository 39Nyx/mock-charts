option = {
    title : {
        text: '责任归咎',
        subtext: '纯属虚构',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
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
            name:'半径模式',
            type:'pie',
            radius : [20, 110],
            center : ['25%', '50%'],
            roseType : 'radius',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            lableLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            data:[
                {value:39, name:'圣母'},
                {value:11, name:'媒体'},
                {value:6, name:'键盘侠'},
                {value:10, name:'政府'},
                {value:8, name:'俱乐部'},
                {value:1, name:'家长'},
              
            ]
        },
        {
            name:'面积模式',
            type:'pie',
            radius : [30, 110],
            center : ['75%', '50%'],
            roseType : 'area',
            data:[
                {value:39, name:'圣母'},
                {value:11, name:'媒体'},
                {value:6, name:'键盘侠'},
                {value:10, name:'政府'},
                {value:8, name:'俱乐部'},
                {value:1, name:'家长'},
           
            ]
        }
    ]
};
