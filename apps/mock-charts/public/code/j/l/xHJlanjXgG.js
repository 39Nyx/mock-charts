option = {
    backgroundColor: "#FFFFFF",
    title : {
        text: '数据分布',
        subtext: '',
        x:'center'
    },
    tooltip : {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        x:'left',
        data:['aaa','bbb']
    },
    dataRange: {
        min: 0,
        max: 30,
        x: 'left',
        y: 'bottom',
        text:['高','低'],           // 文本，默认为数值文本
        calculable : true
    },
    toolbox: {
        show: true,
        orient : 'vertical',
        x: 'right',
        y: 'center',
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    roamController: {
        show: true,
        x: 'right',
        mapTypeControl: {
            'china': true
        }
    },
    series : [
        {
            name: 'aaa',
            type: 'map',
            mapType: 'china',
            roam: false,
            itemStyle:{
                normal:{label:{show:true}},
                emphasis:{label:{show:true}}
            },
            data:[
                
                {name: '吉林',value: 0},
                {name: '北京',value: 6},
                {name: '广东',value: 0},
                {name: '辽宁',value: 0},
                {name: '海南',value: 0}
            ]
        },
        {
            name: 'bbb',
            type: 'map',
            mapType: 'china',
            itemStyle:{
                normal:{label:{show:true}},
                emphasis:{label:{show:true}}
            },
            data:[
               {name: '吉林',value: 0},
                {name: '北京',value: 6},
                {name: '广东',value: 0},
                {name: '辽宁',value: 0},
                {name: '海南',value: 0}
            ]
        }
    ]
};
                    